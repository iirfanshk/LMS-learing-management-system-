import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) { toast.error("Please fill all fields"); return; }
    setLoading(true);
    const ok = await login(email, password);
    setLoading(false);
    if (ok) {
      toast.success("Welcome back! 🎉");
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 dark:opacity-10" style={{ background: "hsl(262, 83%, 70%)", filter: "blur(80px)" }} />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full opacity-20 dark:opacity-10" style={{ background: "hsl(24, 95%, 70%)", filter: "blur(80px)" }} />

      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <Link to="/" className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-xl">S</span>
            </div>
            <span className="font-display font-bold text-2xl text-gradient-primary">SkillForge</span>
          </Link>
        </div>

        <div className="glass-card-strong rounded-3xl p-8 space-y-6">
          <div>
            <h1 className="font-display font-bold text-2xl text-foreground">Welcome Back</h1>
            <p className="text-sm text-muted-foreground mt-1">Continue your learning journey</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@gmail.com" value={email} onChange={e => setEmail(e.target.value)} className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} className="rounded-xl" />
            </div>
            <Button type="submit" className="w-full gradient-primary border-0 text-primary-foreground font-display font-semibold h-11 rounded-xl" disabled={loading}>
              {loading ? "Logging in..." : "Log In"}
            </Button>
          </form>

          <div className="text-center space-y-3">
            <Link to="/forgot-password" className="text-sm text-primary font-medium hover:underline">
              Forgot your password?
            </Link>
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link to="/register" className="text-primary font-medium hover:underline">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
