import { useParams, useNavigate, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { EmojiProgress } from "@/components/EmojiProgress";
import { useAuth } from "@/contexts/AuthContext";
import { getCourseBySlug, getTotalLessons, getTotalDuration, formatDuration } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Clock, BookOpen, Users, Star, ChevronDown, Zap } from "lucide-react";
import { useState } from "react";

export default function CourseDetail() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const { user, isEnrolled, enroll } = useAuth();
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<string[]>([]);

  if (!course) return <div className="min-h-screen flex items-center justify-center"><p>Course not found</p></div>;

  const enrolled = isEnrolled(course.id);

  const handleEnroll = () => {
    if (!user) { toast.error("Please login to enroll"); navigate("/login"); return; }
    enroll(course.id);
    toast.success("🎉 Successfully enrolled!");
    navigate(`/subjects/${course.slug}/learn`);
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <div className="relative py-16 overflow-hidden" style={{ backgroundColor: course.pastelColor }}>
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/subjects" className="hover:text-foreground">Courses</Link>
            <span>/</span>
            <span className="text-foreground">{course.title}</span>
          </div>

          <div className="max-w-2xl">
            <h1 className="font-display font-bold text-3xl md:text-4xl text-foreground">{course.title}</h1>
            <p className="mt-4 text-muted-foreground text-lg">{course.description}</p>
            <div className="flex flex-wrap items-center gap-4 mt-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-amber" /> {course.rating} ({course.reviewCount} reviews)</span>
              <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {course.enrolledCount.toLocaleString()} enrolled</span>
              <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> {getTotalLessons(course)} lessons</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> {formatDuration(getTotalDuration(course))}</span>
            </div>
            <div className="mt-6 flex items-center gap-4">
              {enrolled ? (
                <Button size="lg" className="gradient-primary border-0 text-primary-foreground font-display font-semibold" onClick={() => navigate(`/subjects/${course.slug}/learn`)}>
                  Continue Learning
                </Button>
              ) : (
                <Button size="lg" className="gradient-primary border-0 text-primary-foreground font-display font-semibold" onClick={handleEnroll}>
                  Enroll Now — ₹{course.price}
                </Button>
              )}
              <span className="text-muted-foreground line-through">₹{course.originalPrice}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* What you'll learn */}
            <div className="glass-card rounded-2xl p-6">
              <h2 className="font-display font-semibold text-xl text-foreground mb-4">What You'll Learn</h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {course.whatYouLearn.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-primary mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Curriculum */}
            <div>
              <h2 className="font-display font-semibold text-xl text-foreground mb-4">Course Curriculum</h2>
              <div className="space-y-3">
                {course.sections.map(section => (
                  <div key={section.id} className="glass-card rounded-xl overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between p-4 text-left"
                      onClick={() => toggleSection(section.id)}
                    >
                      <span className="font-display font-semibold text-foreground">{section.title}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-muted-foreground">{section.lessons.length} lessons</span>
                        <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openSections.includes(section.id) ? "rotate-180" : ""}`} />
                      </div>
                    </button>
                    {openSections.includes(section.id) && (
                      <div className="border-t px-4 pb-3">
                        {section.lessons.map(lesson => (
                          <div key={lesson.id} className="flex items-center justify-between py-2.5 text-sm">
                            <span className="text-foreground">{lesson.title}</span>
                            <span className="text-muted-foreground text-xs">{formatDuration(lesson.durationSeconds)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {enrolled && (
              <div className="glass-card-strong rounded-2xl p-5">
                <h3 className="font-display font-semibold text-foreground mb-3">Your Progress</h3>
                <EmojiProgress course={course} />
              </div>
            )}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-5 h-5 text-primary" />
                <h3 className="font-display font-semibold text-foreground">Why SkillForge?</h3>
              </div>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Lifetime access</li>
                <li>✓ Certificate of completion</li>
                <li>✓ Learn at your own pace</li>
                <li>✓ Curated video content</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
