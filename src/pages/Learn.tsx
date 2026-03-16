import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getCourseBySlug, getAllLessons, formatDuration, type Lesson } from "@/data/courses";
import { getStage } from "@/components/EmojiProgress";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState, useMemo, useCallback } from "react";
import { Check, Lock, ChevronLeft, ChevronRight, ChevronDown, Play } from "lucide-react";
import confetti from "canvas-confetti";

export default function LearnPage() {
  const { slug } = useParams<{ slug: string }>();
  const course = getCourseBySlug(slug || "");
  const { user, isEnrolled, getProgress, completeLesson } = useAuth();
  const navigate = useNavigate();

  const allLessons = useMemo(() => course ? getAllLessons(course) : [], [course]);
  const progress = course ? getProgress(course.id) : undefined;

  const [activeLessonId, setActiveLessonId] = useState<string>(() => {
    if (progress?.lastLessonId) return progress.lastLessonId;
    return allLessons[0]?.id || "";
  });
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [openSections, setOpenSections] = useState<string[]>(course?.sections.map(s => s.id) || []);

  if (!course || !user || !isEnrolled(course.id)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-4xl mb-4">🐭</p>
          <p className="text-muted-foreground mb-4">Please enroll in this course first!</p>
          <Button onClick={() => navigate(course ? `/subjects/${course.slug}` : "/subjects")}>
            Go to Course
          </Button>
        </div>
      </div>
    );
  }

  const completedLessons = progress?.completedLessons || [];
  const totalLessons = allLessons.length;
  const percent = Math.round((completedLessons.length / totalLessons) * 100);
  const stage = getStage(percent);

  const activeLesson = allLessons.find(l => l.id === activeLessonId) || allLessons[0];
  const activeLessonIndex = allLessons.findIndex(l => l.id === activeLessonId);

  const isLessonUnlocked = (lesson: Lesson, index: number): boolean => {
    if (index === 0) return true;
    const prevLesson = allLessons[index - 1];
    return completedLessons.includes(prevLesson.id);
  };

  const handleMarkComplete = () => {
    completeLesson(course.id, activeLesson.id);
    toast("🐭 Great job! Keep going! 🎉", { duration: 3000 });

    const newCompleted = completedLessons.length + 1;
    if (newCompleted === totalLessons) {
      confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 } });
      toast("🏆 Congratulations! You've completed the course!", { duration: 5000 });
    } else if (activeLessonIndex < allLessons.length - 1) {
      setActiveLessonId(allLessons[activeLessonIndex + 1].id);
    }
  };

  const goNext = () => {
    if (activeLessonIndex < allLessons.length - 1) {
      const nextIndex = activeLessonIndex + 1;
      if (isLessonUnlocked(allLessons[nextIndex], nextIndex)) {
        setActiveLessonId(allLessons[nextIndex].id);
      }
    }
  };

  const goPrev = () => {
    if (activeLessonIndex > 0) setActiveLessonId(allLessons[activeLessonIndex - 1].id);
  };

  const toggleSection = (id: string) => {
    setOpenSections(prev => prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div className="glass-card-strong border-b px-4 py-3 flex items-center justify-between gap-4 sticky top-0 z-50">
        <div className="flex items-center gap-3 min-w-0">
          <Button variant="ghost" size="icon" onClick={() => navigate(`/subjects/${course.slug}`)} className="shrink-0">
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <h1 className="font-display font-semibold text-sm md:text-base text-foreground truncate">{course.title}</h1>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-lg">{stage.emoji}</span>
          <div className="w-32 h-2.5 bg-muted rounded-full overflow-hidden hidden sm:block">
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${percent}%`, backgroundColor: stage.color }} />
          </div>
          <span className="text-xs font-medium text-muted-foreground">{percent}%</span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? "w-80" : "w-0"} transition-all duration-300 border-r bg-card overflow-y-auto shrink-0 hidden md:block`}>
          <div className="p-4 space-y-2">
            {course.sections.map(section => (
              <div key={section.id}>
                <button
                  className="w-full flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50 text-left"
                  onClick={() => toggleSection(section.id)}
                >
                  <span className="text-sm font-display font-semibold text-foreground">{section.title}</span>
                  <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openSections.includes(section.id) ? "rotate-180" : ""}`} />
                </button>
                {openSections.includes(section.id) && (
                  <div className="ml-2 space-y-0.5">
                    {section.lessons.map((lesson) => {
                      const globalIndex = allLessons.findIndex(l => l.id === lesson.id);
                      const unlocked = isLessonUnlocked(lesson, globalIndex);
                      const completed = completedLessons.includes(lesson.id);
                      const active = lesson.id === activeLessonId;

                      return (
                        <button
                          key={lesson.id}
                          className={`w-full flex items-center gap-2.5 py-2 px-3 rounded-lg text-left text-sm transition-colors ${
                            active ? "bg-primary/10 text-primary" : unlocked ? "hover:bg-muted/50 text-foreground" : "text-muted-foreground opacity-50 cursor-not-allowed"
                          }`}
                          onClick={() => unlocked && setActiveLessonId(lesson.id)}
                          disabled={!unlocked}
                          title={!unlocked ? "Complete previous lesson first" : ""}
                        >
                          {completed ? (
                            <Check className="w-4 h-4 text-primary shrink-0" />
                          ) : unlocked ? (
                            <Play className="w-4 h-4 shrink-0" />
                          ) : (
                            <Lock className="w-3.5 h-3.5 shrink-0" />
                          )}
                          <span className="truncate flex-1">{lesson.title}</span>
                          <span className="text-xs text-muted-foreground shrink-0">{formatDuration(lesson.durationSeconds)}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          {/* Breadcrumb */}
          <div className="px-6 pt-4 flex items-center gap-2 text-xs text-muted-foreground">
            <Link to="/" className="hover:text-foreground">Home</Link>
            <span>/</span>
            <Link to="/subjects" className="hover:text-foreground">Courses</Link>
            <span>/</span>
            <Link to={`/subjects/${course.slug}`} className="hover:text-foreground">{course.title}</Link>
            <span>/</span>
            <span className="text-foreground">{activeLesson.title}</span>
          </div>

          {/* Video player */}
          <div className="p-6">
            <div className="aspect-video rounded-2xl overflow-hidden bg-foreground/5 shadow-lg">
              <iframe
                key={activeLesson.youtubeId}
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${activeLesson.youtubeId}?rel=0`}
                title={activeLesson.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Lesson info */}
            <div className="mt-6 space-y-4">
              <h2 className="font-display font-bold text-xl text-foreground">{activeLesson.title}</h2>
              <p className="text-muted-foreground">{activeLesson.description}</p>

              <div className="flex flex-wrap items-center gap-3">
                {!completedLessons.includes(activeLesson.id) && (
                  <Button className="gradient-primary border-0 text-primary-foreground font-display font-semibold" onClick={handleMarkComplete}>
                    ✅ Mark as Complete
                  </Button>
                )}
                {completedLessons.includes(activeLesson.id) && (
                  <span className="text-sm font-medium text-primary flex items-center gap-1">
                    <Check className="w-4 h-4" /> Completed
                  </span>
                )}
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-4 border-t">
                <Button variant="outline" onClick={goPrev} disabled={activeLessonIndex === 0}>
                  <ChevronLeft className="w-4 h-4 mr-1" /> Previous
                </Button>
                <span className="text-sm text-muted-foreground">
                  Lesson {activeLessonIndex + 1} of {totalLessons}
                </span>
                <Button variant="outline" onClick={goNext} disabled={activeLessonIndex === allLessons.length - 1}>
                  Next <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
