import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HomePage from "@/components/domain/page/HomePage";
import PrivacyPage from "@/components/domain/page/PrivacyPage";
import ResumePage from "@/components/domain/page/ResumePage";
import HomeBanner from "@/components/domain/HomeBanner";
import NavigationTray from "@/components/domain/NavigationTray/NavigationTray";

function App() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Resume", href: "/resume" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Games", href: "/games" },
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
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
