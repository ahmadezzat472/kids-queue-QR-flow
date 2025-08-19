import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { QrCode, BarChart3, Home, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const Navigation = () => {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const navItems = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/generator", icon: QrCode, label: "Generator" },
    { to: "/analytics", icon: BarChart3, label: "Analytics" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="flex items-center space-x-2">
            <div>
              <img
                src="/logos/noBgColor.png"
                alt="Logo"
                className="w-[190px]"
              />
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-2">
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Button
                  key={item.to}
                  asChild
                  variant={isActive ? "default" : "ghost"}
                  size="sm"
                  className={
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }
                >
                  <Link to={item.to} className="flex items-center space-x-2">
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Link>
                </Button>
              );
            })}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="h-8 w-8 p-0"
          >
            {isDark ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
