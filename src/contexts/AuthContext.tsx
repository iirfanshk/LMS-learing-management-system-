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
    const saved = localStorage.getItem("skillup_user");
    return saved ? JSON.parse(saved) : null;
  });

  const [enrollments, setEnrollments] = useState<EnrollmentProgress[]>(() => {
    const saved = localStorage.getItem("skillup_enrollments");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    if (user) localStorage.setItem("skillup_user", JSON.stringify(user));
    else localStorage.removeItem("skillup_user");
  }, [user]);

  useEffect(() => {
    localStorage.setItem("skillup_enrollments", JSON.stringify(enrollments));
  }, [enrollments]);

  const login = useCallback(async (email: string, _password: string): Promise<boolean> => {
    // Mock login
    setUser({ id: "1", name: email.split("@")[0], email, avatar: undefined });
    return true;
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string): Promise<boolean> => {
    setUser({ id: "1", name, email, avatar: undefined });
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setEnrollments([]);
    localStorage.removeItem("skillup_user");
    localStorage.removeItem("skillup_enrollments");
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
