import { getAllLessons, type Course } from "@/data/courses";
import { useAuth } from "@/contexts/AuthContext";

const stages = [
  { min: 0, max: 0, emoji: "😴", label: "Not started", color: "hsl(var(--muted))" },
  { min: 1, max: 15, emoji: "😐", label: "Just started", color: "hsl(var(--amber))" },
  { min: 16, max: 40, emoji: "🙂", label: "Learning", color: "hsl(38, 92%, 50%)" },
  { min: 41, max: 70, emoji: "😃", label: "Good progress", color: "hsl(var(--primary))" },
  { min: 71, max: 99, emoji: "🤩", label: "Almost done", color: "hsl(var(--coral))" },
  { min: 100, max: 100, emoji: "🏆", label: "Completed", color: "hsl(150, 70%, 45%)" },
];

export function getStage(percent: number) {
  return stages.find(s => percent >= s.min && percent <= s.max) || stages[0];
}

interface EmojiProgressProps {
  course: Course;
  compact?: boolean;
}

export function EmojiProgress({ course, compact = false }: EmojiProgressProps) {
  const { getProgress } = useAuth();
  const progress = getProgress(course.id);
  const total = getAllLessons(course).length;
  const completed = progress?.completedLessons.length || 0;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  const stage = getStage(percent);

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-lg">{stage.emoji}</span>
        <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{ width: `${percent}%`, backgroundColor: stage.color, ["--progress" as string]: `${percent}%` }}
          />
        </div>
        <span className="text-xs font-medium text-muted-foreground">{percent}%</span>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{stage.emoji}</span>
          <span className="text-sm font-medium">{stage.label}</span>
        </div>
        <span className="text-sm font-semibold text-primary">{percent}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${percent}%`, backgroundColor: stage.color }}
        />
      </div>
      <p className="text-xs text-muted-foreground">{completed} of {total} lessons completed</p>
    </div>
  );
}
