import { useState, useMemo } from "react";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { courses } from "@/data/courses";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, BookOpen } from "lucide-react";

const categories = ["All", ...Array.from(new Set(courses.map(c => c.category)))];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() =>
    courses.filter(c => {
      const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) ||
        c.description.toLowerCase().includes(search.toLowerCase()) ||
        c.category.toLowerCase().includes(search.toLowerCase());
      const matchCategory = activeCategory === "All" || c.category === activeCategory;
      return matchSearch && matchCategory;
    }),
    [search, activeCategory]
  );

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center">
          <h1 className="font-display font-bold text-3xl text-foreground">Browse Courses</h1>
          <p className="text-muted-foreground mt-2">Explore our curated library of expert-led courses</p>
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

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map(cat => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "default" : "outline"}
              size="sm"
              className={`rounded-full ${activeCategory === cat ? "gradient-primary border-0 text-primary-foreground" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <p className="text-muted-foreground">No courses found. Try a different search!</p>
          </div>
        )}
      </div>
    </div>
  );
}
