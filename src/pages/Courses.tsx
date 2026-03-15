import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() =>
    courses.filter(c =>
      c.title.toLowerCase().includes(search.toLowerCase()) ||
      c.description.toLowerCase().includes(search.toLowerCase()) ||
      c.category.toLowerCase().includes(search.toLowerCase())
    ),
    [search]
  );

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center">
          <h1 className="font-display font-bold text-3xl text-foreground">All Courses</h1>
          <p className="text-muted-foreground mt-2">Curated by 🐱 Prof. Cat for your success</p>
        </div>

        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            className="pl-12 h-12 rounded-2xl glass-card border-2 text-base"
            placeholder="Search courses..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-4xl mb-3">🐭</p>
            <p className="text-muted-foreground">No courses found. Try a different search!</p>
          </div>
        )}
      </div>
    </div>
  );
}
