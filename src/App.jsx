import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Component/Loader";

const Home = lazy(() => import("./Pages/Home"));
const OurStory = lazy(() => import("./Pages/OurStory"));
const OurWork = lazy(()=> import("./Pages/OurWork"))
const EthicalImpact = lazy(()=> import("./Pages/EthicalImpact"))
const StrategicFramework = lazy(()=> import("./Pages/StrategicFramework"))
const TheTeam = lazy(()=> import("./Pages/TheTeam"))
const OurPartners = lazy(() => import("./Pages/OurPartners"))
const Press = lazy(() => import("./Pages/Press"))

const App = () => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen m-auto flex items-center justify-center">
          <Loader />
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/ethical-impact" element={<EthicalImpact />} />
        <Route path="/2022-2026-strategic-framework" element={<StrategicFramework/>} />
        <Route path="/the-team" element={<TheTeam/>} />
        <Route path="/our-partners" element={<OurPartners/>} />
        <Route path="/press" element={<Press/>} />
      </Routes>
    </Suspense>
  );
};

export default App;
