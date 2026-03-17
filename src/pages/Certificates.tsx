import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { courses, getAllLessons } from "@/data/courses";
import { useMemo, useCallback } from "react";
import { Award, Download, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

function downloadCertificate(courseName: string, userName: string, certId: string) {
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 800;
  const ctx = canvas.getContext("2d")!;

  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, 1200, 800);

  ctx.strokeStyle = "#7c3aed";
  ctx.lineWidth = 8;
  ctx.strokeRect(30, 30, 1140, 740);
  ctx.strokeStyle = "#f97316";
  ctx.lineWidth = 3;
  ctx.strokeRect(45, 45, 1110, 710);

  ctx.fillStyle = "#7c3aed";
  ctx.fillRect(100, 80, 1000, 4);

  ctx.fillStyle = "#7c3aed";
  ctx.font = "bold 48px Georgia, serif";
  ctx.textAlign = "center";
  ctx.fillText("Certificate of Completion", 600, 160);

  ctx.fillStyle = "#f97316";
  ctx.fillRect(400, 180, 400, 3);

  ctx.fillStyle = "#6b7280";
  ctx.font = "20px Georgia, serif";
  ctx.fillText("This is to certify that", 600, 260);

  ctx.fillStyle = "#1f2937";
  ctx.font = "bold 40px Georgia, serif";
  ctx.fillText(userName, 600, 320);

  ctx.fillStyle = "#7c3aed";
  ctx.fillRect(300, 340, 600, 2);

  ctx.fillStyle = "#6b7280";
  ctx.font = "20px Georgia, serif";
  ctx.fillText("has successfully completed the course", 600, 400);

  ctx.fillStyle = "#1f2937";
  ctx.font = "bold 32px Georgia, serif";
  ctx.fillText(courseName, 600, 460);

  ctx.fillStyle = "#6b7280";
  ctx.font = "18px Georgia, serif";
  ctx.fillText(`Date: ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`, 600, 540);
  ctx.fillText(`Certificate ID: ${certId}`, 600, 580);

  ctx.fillStyle = "#7c3aed";
  ctx.font = "16px Georgia, serif";
  ctx.fillText("SkillForge", 600, 640);

  ctx.fillStyle = "#7c3aed";
  ctx.fillRect(100, 720, 1000, 4);

  const link = document.createElement("a");
  link.download = `skillforge-certificate-${courseName.replace(/\s+/g, "-").toLowerCase()}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
}

export default function CertificatesPage() {
  const { user, enrollments } = useAuth();

  const completedCourses = useMemo(() => {
    if (!user) return [];
    return courses.filter(c => {
      const e = enrollments.find(en => en.courseId === c.id);
      return e && e.completedLessons.length === getAllLessons(c).length;
    });
  }, [user, enrollments]);

  const handleDownload = useCallback((courseTitle: string, courseId: string) => {
    const name = user?.name || "Student";
    const certId = `CERT-${courseId.padStart(4, "0")}`;
    downloadCertificate(courseTitle, name, certId);
  }, [user]);

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
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground">No certificates yet! Complete a course to earn one. 📚</p>
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
                    <p className="text-xs text-muted-foreground">{course.instructor}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Certificate of Completion</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Award className="w-4 h-4 text-amber" />
                  <span>ID: CERT-{course.id.padStart(4, '0')}</span>
                </div>
                <Button variant="outline" size="sm" className="w-full rounded-xl" onClick={() => handleDownload(course.title, course.id)}>
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
