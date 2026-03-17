import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { courses, getAllLessons } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Clock, User } from "lucide-react";
import { useEffect, useMemo } from "react";

export default function ProfilePage() {
  const { user, enrollments } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  const stats = useMemo(() => {
    const enrolled = enrollments.length;
    const completed = courses.filter(c => {
      const e = enrollments.find(en => en.courseId === c.id);
      return e && e.completedLessons.length === getAllLessons(c).length;
    }).length;
    const totalLessons = enrollments.reduce((sum, e) => sum + e.completedLessons.length, 0);
    return { enrolled, completed, totalLessons };
  }, [enrollments]);

  if (!user) return null;

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-2xl space-y-8">
        {/* Profile Card */}
        <div className="glass-card-strong rounded-3xl p-8 text-center">
          <div className="w-24 h-24 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display text-3xl font-bold mx-auto ring-4 ring-primary/20">
            {user.name.charAt(0).toUpperCase()}
          </div>
          <h1 className="font-display font-bold text-2xl text-foreground mt-4">{user.name}</h1>
          <p className="text-muted-foreground text-sm">{user.email}</p>
          <p className="text-xs text-muted-foreground mt-1">Member since 2026</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4">
          {[
            { icon: <BookOpen className="w-5 h-5 text-primary" />, value: stats.enrolled, label: "Enrolled" },
            { icon: <Award className="w-5 h-5 text-accent" />, value: stats.completed, label: "Completed" },
            { icon: <Clock className="w-5 h-5 text-primary" />, value: stats.totalLessons, label: "Lessons Done" },
          ].map((s) => (
            <div key={s.label} className="glass-card rounded-2xl p-4 text-center">
              <div className="flex justify-center mb-2">{s.icon}</div>
              <p className="font-display font-bold text-xl text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start gap-3 h-12 rounded-xl" onClick={() => navigate("/settings")}>
            <User className="w-4 h-4" /> Edit Profile & Settings
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 h-12 rounded-xl" onClick={() => navigate("/certificates")}>
            <Award className="w-4 h-4" /> View Certificates
          </Button>
          <Button variant="outline" className="w-full justify-start gap-3 h-12 rounded-xl" onClick={() => navigate("/dashboard")}>
            <BookOpen className="w-4 h-4" /> Go to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
