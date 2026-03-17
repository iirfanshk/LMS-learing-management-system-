import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { toast.error("Please enter your email"); return; }
    setSent(true);
    toast.success("Password reset link sent! Check your inbox 📧");
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
          {sent ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl">📧</span>
              </div>
              <h1 className="font-display font-bold text-2xl text-foreground">Check Your Email</h1>
              <p className="text-sm text-muted-foreground">We've sent a password reset link to <strong>{email}</strong></p>
              <Link to="/login">
                <Button className="w-full gradient-primary border-0 text-primary-foreground font-display font-semibold h-11 rounded-xl mt-4">
                  Back to Login
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <div>
                <h1 className="font-display font-bold text-2xl text-foreground">Forgot Password</h1>
                <p className="text-sm text-muted-foreground mt-1">Enter your email and we'll send you a reset link</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@gmail.com" value={email} onChange={e => setEmail(e.target.value)} className="rounded-xl" />
                </div>
                <Button type="submit" className="w-full gradient-primary border-0 text-primary-foreground font-display font-semibold h-11 rounded-xl">
                  Send Reset Link
                </Button>
              </form>
              <p className="text-center text-sm text-muted-foreground">
                Remember your password?{" "}
                <Link to="/login" className="text-primary font-medium hover:underline">Log in</Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
