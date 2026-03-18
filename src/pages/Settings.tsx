import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Moon, Sun, Bell, Shield, User, Eye, EyeOff } from "lucide-react";

export default function SettingsPage() {
  const { user } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");
  const [notifications, setNotifications] = useState(true);
  const [pwDialogOpen, setPwDialogOpen] = useState(false);
  const [currentPw, setCurrentPw] = useState("");
  const [newPw, setNewPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  useEffect(() => {
    if (!user) navigate("/login");
  }, [user, navigate]);

  if (!user) return null;

  const handleSave = () => {
    toast.success("Settings saved successfully!");
  };

  const handleChangePassword = () => {
    if (!currentPw || !newPw || !confirmPw) {
      toast.error("Please fill in all fields");
      return;
    }
    if (newPw.length < 6) {
      toast.error("New password must be at least 6 characters");
      return;
    }
    if (newPw !== confirmPw) {
      toast.error("New passwords do not match");
      return;
    }
    const usersRaw = localStorage.getItem("skillforge_registered_users");
    const users: { name: string; email: string; password: string }[] = usersRaw ? JSON.parse(usersRaw) : [];
    const idx = users.findIndex(u => u.email === user.email && u.password === currentPw);
    if (idx === -1) {
      toast.error("Current password is incorrect");
      return;
    }
    users[idx].password = newPw;
    localStorage.setItem("skillforge_registered_users", JSON.stringify(users));
    toast.success("Password changed successfully!");
    setPwDialogOpen(false);
    setCurrentPw("");
    setNewPw("");
    setConfirmPw("");
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
          <Button variant="outline" className="rounded-xl" onClick={() => setPwDialogOpen(true)}>
            Change Password
          </Button>
        </div>

        <Button className="w-full gradient-primary border-0 text-primary-foreground font-display font-semibold h-12 rounded-xl" onClick={handleSave}>
          Save Changes
        </Button>
      </div>

      {/* Password Change Dialog */}
      <Dialog open={pwDialogOpen} onOpenChange={setPwDialogOpen}>
        <DialogContent className="glass-card-strong rounded-2xl border-white/10 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-lg">Change Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label>Current Password</Label>
              <div className="relative">
                <Input
                  type={showCurrent ? "text" : "password"}
                  value={currentPw}
                  onChange={(e) => setCurrentPw(e.target.value)}
                  className="rounded-xl pr-10"
                  placeholder="Enter current password"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" onClick={() => setShowCurrent(!showCurrent)}>
                  {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>New Password</Label>
              <div className="relative">
                <Input
                  type={showNew ? "text" : "password"}
                  value={newPw}
                  onChange={(e) => setNewPw(e.target.value)}
                  className="rounded-xl pr-10"
                  placeholder="At least 6 characters"
                />
                <button type="button" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" onClick={() => setShowNew(!showNew)}>
                  {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Confirm New Password</Label>
              <Input
                type="password"
                value={confirmPw}
                onChange={(e) => setConfirmPw(e.target.value)}
                className="rounded-xl"
                placeholder="Re-enter new password"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" className="rounded-xl" onClick={() => setPwDialogOpen(false)}>Cancel</Button>
            <Button className="gradient-primary border-0 text-primary-foreground rounded-xl" onClick={handleChangePassword}>Update Password</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
