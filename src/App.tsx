import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// page
const HomePage = lazy(() => import("./pages/HomePage"));
const ScrapPage = lazy(() => import("./pages/ScrapPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
//components
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col w-full h-screen justify-between max-w-screen-sm mx-auto bg-[#F0F1F4]">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/scrap" element={<ScrapPage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Navigation />
      </div>
    </BrowserRouter>
  );
}

export default App;
