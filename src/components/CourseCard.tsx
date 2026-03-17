import { Link } from "react-router-dom";
import { type Course, getTotalLessons, getTotalDuration, formatDuration } from "@/data/courses";
import { EmojiProgress } from "./EmojiProgress";
import { useAuth } from "@/contexts/AuthContext";
import { Badge } from "@/components/ui/badge";

interface CourseCardProps {
  course: Course;
  showProgress?: boolean;
  completed?: boolean;
}

export function CourseCard({ course, showProgress = false, completed = false }: CourseCardProps) {
  const { isEnrolled } = useAuth();
  const enrolled = isEnrolled(course.id);

  return (
    <Link to={`/subjects/${course.slug}`} className="block">
      <div
        className="glass-card rounded-2xl overflow-hidden hover-lift group relative"
        style={{ borderColor: course.pastelColor }}
      >
        {completed && (
          <div className="absolute top-3 right-3 z-10 text-3xl">🏆</div>
        )}
        {course.isNew && (
          <Badge className="absolute top-3 left-3 z-10 gradient-primary border-0 text-primary-foreground text-xs">NEW</Badge>
        )}
        <div
          className="h-36 flex items-center justify-center text-5xl"
          style={{ backgroundColor: course.pastelColor }}
        >
          {course.category === "Programming" && "💻"}
          {course.category === "Data Science" && "📊"}
          {course.category === "Web Development" && "🌐"}
          {course.category === "Computer Science" && "🧮"}
          {course.category === "Software Engineering" && "⚙️"}
          {course.category === "Cloud & DevOps" && "☁️"}
          {course.category === "Cybersecurity" && "🔒"}
          {course.category === "Mobile Development" && "📱"}
        </div>
        <div className="p-4 space-y-3">
          <div>
            <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">{course.title}</h3>
            <p className="text-xs text-muted-foreground mt-0.5">{course.instructor}</p>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">{course.shortDescription}</p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{getTotalLessons(course)} lessons</span>
            <span>•</span>
            <span>{formatDuration(getTotalDuration(course))}</span>
            <span>•</span>
            <span>⭐ {course.rating}</span>
          </div>
          {showProgress && enrolled ? (
            <EmojiProgress course={course} compact />
          ) : (
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-primary">₹{course.price}</span>
              <span className="text-sm text-muted-foreground line-through">₹{course.originalPrice}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
