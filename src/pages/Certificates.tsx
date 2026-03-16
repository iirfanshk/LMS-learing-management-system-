import { MascotBubble } from "@/components/MascotBubble";
import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { courses, getAllLessons } from "@/data/courses";
import { useMemo } from "react";
import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CertificatesPage() {
  const { user, enrollments } = useAuth();

  const completedCourses = useMemo(() => {
    if (!user) return [];
    return courses.filter(c => {
      const e = enrollments.find(en => en.courseId === c.id);
      return e && e.completedLessons.length === getAllLessons(c).length;
    });
  }, [user, enrollments]);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center">
          <h1 className="font-display font-bold text-3xl text-foreground">My Certificates</h1>
          <p className="text-muted-foreground mt-2">Your achievements, beautifully captured</p>
        </div>

        {completedCourses.length === 0 ? (
          <div className="max-w-md mx-auto glass-card rounded-2xl p-8 text-center">
            <MascotBubble mascot="rat" message="No certificates yet! Complete a course to earn one. 📚" animation="bounce" />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {completedCourses.map(course => (
              <div key={course.id} className="glass-card rounded-2xl p-6 hover-lift" style={{ borderColor: course.pastelColor }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: course.pastelColor }}>
                    🏆
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground">{course.title}</h3>
                    <p className="text-xs text-muted-foreground">Prof. Cat 🐱</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Certificate of Completion</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Award className="w-4 h-4 text-amber" />
                  <span>ID: CERT-{course.id.padStart(4, '0')}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Download className="w-4 h-4 mr-2" /> Download Certificate
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
