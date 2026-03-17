import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { EmojiProgress } from "@/components/EmojiProgress";
import { useAuth } from "@/contexts/AuthContext";
import { courses, getAllLessons } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, BookOpen, Award } from "lucide-react";

export default function Dashboard() {
  const { user, enrollments } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const enrolledCourses = useMemo(() =>
    courses.filter(c => enrollments.some(e => e.courseId === c.id)),
    [enrollments]
  );

  const completedCourses = useMemo(() =>
    enrolledCourses.filter(c => {
      const e = enrollments.find(en => en.courseId === c.id);
      return e && e.completedLessons.length === getAllLessons(c).length;
    }),
    [enrolledCourses, enrollments]
  );

  const inProgressCourses = useMemo(() =>
    enrolledCourses.filter(c => !completedCourses.includes(c)),
    [enrolledCourses, completedCourses]
  );

  const filteredBrowse = useMemo(() =>
    courses.filter(c =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase())
    ),
    [search]
  );

  const streak = enrollments.length > 0 ? Math.min(enrollments.length * 2 + 1, 14) : 0;

  if (!user) return null;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-10">
        {/* Welcome */}
        <div className="glass-card-strong rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display font-bold text-2xl md:text-3xl text-foreground">
              Welcome back, {user.name}! 👋
            </h1>
            <p className="text-muted-foreground mt-1">Keep up the great work!</p>
          </div>
          <div className="flex items-center gap-4">
            {streak > 0 && (
              <div className="glass-card rounded-2xl px-5 py-3 flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="font-display font-bold text-lg text-foreground">{streak}-day streak</p>
                  <p className="text-xs text-muted-foreground">Don't break it!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: <BookOpen className="w-5 h-5 text-primary" />, value: enrolledCourses.length, label: "Enrolled" },
            { icon: <TrendingUp className="w-5 h-5 text-accent" />, value: inProgressCourses.length, label: "In Progress" },
            { icon: <Award className="w-5 h-5 text-primary" />, value: completedCourses.length, label: "Completed" },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
              <div className="flex justify-center mb-2">{s.icon}</div>
              <p className="font-display font-bold text-xl text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            className="pl-12 h-12 rounded-2xl glass-card border-2 text-base"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {/* In Progress */}
        {inProgressCourses.length > 0 && (
          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">📊 Your Progress</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {inProgressCourses.map(course => (
                <div key={course.id} className="glass-card rounded-2xl p-5 hover-lift cursor-pointer" onClick={() => navigate(`/subjects/${course.slug}/learn`)}>
                  <h3 className="font-display font-semibold text-foreground mb-3">{course.title}</h3>
                  <EmojiProgress course={course} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Enrolled */}
        <section>
          <h2 className="font-display font-bold text-xl text-foreground mb-4">📚 My Courses</h2>
          {enrolledCourses.length === 0 ? (
            <div className="glass-card rounded-2xl p-8 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <p className="text-muted-foreground">You haven't enrolled yet! Browse courses below.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {enrolledCourses.map(course => (
                <CourseCard key={course.id} course={course} showProgress />
              ))}
            </div>
          )}
        </section>

        {/* Completed */}
        {completedCourses.length > 0 && (
          <section>
            <h2 className="font-display font-bold text-xl text-foreground mb-4">🏆 Completed</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedCourses.map(course => (
                <CourseCard key={course.id} course={course} showProgress completed />
              ))}
            </div>
          </section>
        )}

        {/* Browse All */}
        <section>
          <h2 className="font-display font-bold text-xl text-foreground mb-4">🌐 Browse All Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrowse.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
