import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/data/courses";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Star, Zap, Shield, TrendingUp } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute top-10 left-0 w-96 h-96 rounded-full opacity-15 dark:opacity-10" style={{ background: "hsl(262, 83%, 70%)", filter: "blur(100px)" }} />
        <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full opacity-15 dark:opacity-10" style={{ background: "hsl(24, 95%, 70%)", filter: "blur(100px)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-8 dark:opacity-5" style={{ background: "hsl(290, 70%, 70%)", filter: "blur(120px)" }} />

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> New courses added weekly
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-6xl text-foreground leading-tight">
              Forge Your Skills with{" "}
              <span className="text-gradient-primary">SkillForge</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
              Master programming, data science, and system design through curated video courses. Track progress, earn certificates — all at your own pace.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/register">
                <Button size="lg" className="gradient-primary border-0 text-primary-foreground font-display font-semibold px-8 h-12 text-base">
                  Start Learning Free <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/subjects">
                <Button size="lg" variant="outline" className="font-display font-semibold px-8 h-12 text-base">
                  Browse Courses
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 border-y bg-card/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {[
              { icon: <Users className="w-5 h-5 text-primary" />, value: "25,000+", label: "Students" },
              { icon: <BookOpen className="w-5 h-5 text-coral" />, value: "80+", label: "Courses" },
              { icon: <Star className="w-5 h-5 text-amber" />, value: "4.8★", label: "Avg Rating" },
              { icon: <TrendingUp className="w-5 h-5 text-primary" />, value: "95%", label: "Completion" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-3">
                {stat.icon}
                <div>
                  <p className="font-display font-bold text-xl text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display font-bold text-3xl text-foreground">Featured Courses</h2>
            <p className="text-muted-foreground mt-2">Handpicked by our expert instructors</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 6).map((course, i) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/subjects">
              <Button variant="outline" size="lg" className="font-display font-semibold">
                View All Courses <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-foreground text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: <Compass className="w-8 h-8 text-primary" />, title: "Browse & Enroll", desc: "Explore our curated library and enroll in courses that match your goals." },
              { icon: <BookOpen className="w-8 h-8 text-accent" />, title: "Watch & Learn", desc: "Learn through high-quality video lessons at your own pace." },
              { icon: <Shield className="w-8 h-8 text-primary" />, title: "Get Certified", desc: "Complete all lessons and earn a certificate of completion." },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 text-center hover-lift"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display font-bold text-3xl text-foreground text-center mb-12">What Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Aisha K.", text: "Best learning platform I've used! The structured courses kept me on track.", rating: 5 },
              { name: "Rahul M.", text: "Java course was incredible. Got my first dev job after completing it!", rating: 5 },
              { name: "Priya S.", text: "Love the course quality! The curriculum is well organized and comprehensive.", rating: 5 },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-6 hover-lift"
              >
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <span key={j} className="text-amber">⭐</span>
                  ))}
                </div>
                <p className="text-sm text-foreground mb-4">"{review.text}"</p>
                <p className="text-sm font-semibold text-muted-foreground">— {review.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-lg mx-auto glass-card-strong rounded-3xl p-10">
            <h2 className="font-display font-bold text-2xl text-foreground">Ready to Level Up?</h2>
            <p className="text-muted-foreground mt-3">Join 25,000+ students learning on SkillForge. Start for free today.</p>
            <Link to="/register">
              <Button size="lg" className="gradient-primary border-0 text-primary-foreground font-display font-semibold mt-6">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-base">S</span>
              </div>
              <span className="font-display font-bold text-gradient-primary">SkillForge</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <Link to="/subjects" className="hover:text-foreground transition-colors">Courses</Link>
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
            <p className="text-xs text-muted-foreground">© 2026 SkillForge. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
