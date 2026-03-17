import React, { createContext, useContext, useState, useEffect, useCallback } from "react";

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface EnrollmentProgress {
  courseId: string;
  completedLessons: string[];
  lastLessonId?: string;
  lastPosition?: number;
  enrolledAt: string;
}

interface AuthContextType {
  user: User | null;
  enrollments: EnrollmentProgress[];
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  enroll: (courseId: string) => void;
  completeLesson: (courseId: string, lessonId: string) => void;
  isEnrolled: (courseId: string) => boolean;
  getProgress: (courseId: string) => EnrollmentProgress | undefined;
  updateLastPosition: (courseId: string, lessonId: string, position: number) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    const saved = localStorage.getItem("skillforge_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [enrollments, setEnrollments] = useState<EnrollmentProgress[]>(() => {
    const saved = localStorage.getItem("skillforge_enrollments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem("skillforge_user", JSON.stringify(user));
    else localStorage.removeItem("skillforge_user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("skillforge_enrollments", JSON.stringify(enrollments));
  }, [enrollments]);

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    const usersRaw = localStorage.getItem("skillforge_registered_users");
    const users: { name: string; email: string; password: string }[] = usersRaw ? JSON.parse(usersRaw) : [];
    const found = users.find(u => u.email === email && u.password === password);
    if (!found) return false;
    setUser({ id: "1", name: found.name, email: found.email, avatar: undefined });
    return true;
  }, []);

  const register = useCallback(async (name: string, email: string, password: string): Promise<boolean> => {
    const usersRaw = localStorage.getItem("skillforge_registered_users");
    const users: { name: string; email: string; password: string }[] = usersRaw ? JSON.parse(usersRaw) : [];
    if (users.find(u => u.email === email)) return false;
    users.push({ name, email, password });
    localStorage.setItem("skillforge_registered_users", JSON.stringify(users));
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setEnrollments([]);
    localStorage.removeItem("skillforge_user");
    localStorage.removeItem("skillforge_enrollments");
  }, []);

  const enroll = useCallback((courseId: string) => {
    setEnrollments(prev => {
      if (prev.find(e => e.courseId === courseId)) return prev;
      return [...prev, { courseId, completedLessons: [], enrolledAt: new Date().toISOString() }];
    });
  }, []);

  const completeLesson = useCallback((courseId: string, lessonId: string) => {
    setEnrollments(prev => prev.map(e => {
      if (e.courseId !== courseId) return e;
      if (e.completedLessons.includes(lessonId)) return e;
      return { ...e, completedLessons: [...e.completedLessons, lessonId] };
    }));
  }, []);

  const isEnrolled = useCallback((courseId: string) => {
    return enrollments.some(e => e.courseId === courseId);
  }, [enrollments]);

  const getProgress = useCallback((courseId: string) => {
    return enrollments.find(e => e.courseId === courseId);
  }, [enrollments]);

  const updateLastPosition = useCallback((courseId: string, lessonId: string, position: number) => {
    setEnrollments(prev => prev.map(e => {
      if (e.courseId !== courseId) return e;
      return { ...e, lastLessonId: lessonId, lastPosition: position };
    }));
  }, []);

  return (
    <AuthContext.Provider value={{ user, enrollments, login, register, logout, enroll, completeLesson, isEnrolled, getProgress, updateLastPosition }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
