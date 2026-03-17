import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import { Moon, Sun, Bell, Shield, User } from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [notifications, setNotifications] = useState(true);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-2xl space-y-8">
        <h1 className="font-display font-bold text-2xl text-foreground">Account Settings</h1>

        {/* Profile Info */}
        <div className="glass-card-strong rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <User className="w-5 h-5 text-primary" />
            <h2 className="font-display font-semibold text-lg text-foreground">Profile Information</h2>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="rounded-xl" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-xl" />
            </div>
          </div>
        </div>

        {/* Appearance */}
        <div className="glass-card-strong rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            {theme === "dark" ? <Moon className="w-5 h-5 text-primary" /> : <Sun className="w-5 h-5 text-primary" />}
            <h2 className="font-display font-semibold text-lg text-foreground">Appearance</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Dark Mode</p>
              <p className="text-xs text-muted-foreground">Switch between light and dark themes</p>
            </div>
            <Switch checked={theme === "dark"} onCheckedChange={toggleTheme} />
          </div>
        </div>

        {/* Notifications */}
        <div className="glass-card-strong rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <Bell className="w-5 h-5 text-primary" />
            <h2 className="font-display font-semibold text-lg text-foreground">Notifications</h2>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Email Notifications</p>
              <p className="text-xs text-muted-foreground">Receive course updates and reminders</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
        </div>

        {/* Security */}
        <div className="glass-card-strong rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-5 h-5 text-primary" />
            <h2 className="font-display font-semibold text-lg text-foreground">Security</h2>
          </div>
          <Button variant="outline" className="rounded-xl" onClick={() => toast.info("Password change coming soon!")}>
            Change Password
          </Button>
        </div>

        <Button className="w-full gradient-primary border-0 text-primary-foreground font-display font-semibold h-12 rounded-xl" onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>
  );
}
