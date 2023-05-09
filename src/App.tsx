import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// page
const HomePage = lazy(() => import("./pages/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));
//components
import Loading from "./components/Loading";

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <div className="flex flex-col w-full h-full max-w-screen-sm mx-auto">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
