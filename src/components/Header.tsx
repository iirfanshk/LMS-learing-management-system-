import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useTheme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  LogOut,
  Home,
  Compass,
  BookOpen,
  MoreHorizontal,
  User,
  Settings,
  Moon,
  Sun,
  Award,
  LayoutDashboard,
  Menu,
  X,
  Trophy,
} from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", to: "/", icon: Home },
  { label: "Browse", to: "/subjects", icon: Compass },
  { label: "Courses", to: "/dashboard", icon: BookOpen, auth: true },
  { label: "Quizzes", to: "/programs", icon: Trophy, auth: true },
];

export function Header() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 glass-card-strong border-b">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-lg">S</span>
          </div>
          <span className="font-display font-bold text-xl text-gradient-primary hidden sm:block">SkillForge</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            if (item.auth && !user) return null;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  isActive(item.to)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}

          {/* More dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all">
                <MoreHorizontal className="w-4 h-4" />
                More
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 glass-card-strong">
              {user && (
                <>
                  <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
                    <User className="w-4 h-4 mr-2" /> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/settings")} className="cursor-pointer">
                    <Settings className="w-4 h-4 mr-2" /> Account Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate("/certificates")} className="cursor-pointer">
                    <Award className="w-4 h-4 mr-2" /> Certificates
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              <DropdownMenuItem onClick={toggleTheme} className="cursor-pointer">
                {theme === "light" ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
                {theme === "light" ? "Dark Mode" : "Light Mode"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle (always visible) */}
          <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-xl">
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </Button>

          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 focus:outline-none">
                  <div className="w-9 h-9 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-display text-sm font-bold ring-2 ring-primary/20">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 glass-card-strong">
                <div className="px-3 py-2">
                  <p className="text-sm font-display font-semibold text-foreground">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate("/profile")} className="cursor-pointer">
                  <User className="w-4 h-4 mr-2" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/dashboard")} className="cursor-pointer">
                  <LayoutDashboard className="w-4 h-4 mr-2" /> Dashboard
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate("/settings")} className="cursor-pointer">
                  <Settings className="w-4 h-4 mr-2" /> Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => { logout(); navigate("/"); }} className="cursor-pointer text-destructive">
                  <LogOut className="w-4 h-4 mr-2" /> Log Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={() => navigate("/login")}>Log in</Button>
              <Button size="sm" className="gradient-primary border-0 text-primary-foreground" onClick={() => navigate("/register")}>Sign up</Button>
            </div>
          )}

          {/* Mobile hamburger */}
          <Button variant="ghost" size="icon" className="md:hidden rounded-xl" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t glass-card-strong px-4 py-4 space-y-1">
          {navItems.map((item) => {
            if (item.auth && !user) return null;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive(item.to) ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
          {user && (
            <>
              <Link to="/profile" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/50">
                <User className="w-4 h-4" /> Profile
              </Link>
              <Link to="/settings" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/50">
                <Settings className="w-4 h-4" /> Settings
              </Link>
              <Link to="/certificates" onClick={() => setMobileOpen(false)} className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-muted/50">
                <Award className="w-4 h-4" /> Certificates
              </Link>
            </>
          )}
          {!user && (
            <div className="flex gap-2 pt-2">
              <Button variant="ghost" size="sm" className="flex-1" onClick={() => { setMobileOpen(false); navigate("/login"); }}>Log in</Button>
              <Button size="sm" className="flex-1 gradient-primary border-0 text-primary-foreground" onClick={() => { setMobileOpen(false); navigate("/register"); }}>Sign up</Button>
            </div>
          )}
        </div>
      )}
    </header>
  );
}
