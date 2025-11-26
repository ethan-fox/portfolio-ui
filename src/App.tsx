import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import PrivacyPage from "@/components/page/PrivacyPage";
import HomePage from "@/components/page/HomePage";
import HomeBanner from "@/components/domain/HomeBanner";
import NavigationTray from "@/components/domain/NavigationTray/NavigationTray";

function App() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/portfolio", disabled: true },
    { label: "Games", href: "/games", disabled: true },
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
