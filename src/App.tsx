import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/components/domain/page/HomePage";
import PrivacyPage from "@/components/domain/page/PrivacyPage";
import HomeBanner from "@/components/domain/HomeBanner";
import NavigationTray from "@/components/domain/NavigationTray/NavigationTray";

function App() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Games", href: "/games" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "About", href: "/about" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <>
      <Toaster position="bottom-right" />
      <div className="min-h-screen bg-background">
        <HomeBanner />
        <NavigationTray items={navItems} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
