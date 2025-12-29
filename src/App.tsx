import "./App.css";
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import HomeBanner from "@/components/domain/HomeBanner";
import NavigationTray from "@/components/domain/NavigationTray/NavigationTray";

const HomePage = lazy(() => import("@/components/page/HomePage"));
const PrivacyPage = lazy(() => import("@/components/page/PrivacyPage"));

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
        <Suspense fallback={<div className="flex justify-center items-center min-h-[clamp(10rem,50vh,25rem)]">Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
