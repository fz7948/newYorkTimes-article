import React from "react";
// components
import Header from "../components/Header";

export default function ScrapPage() {
  return (
    <main className={`flex flex-col mx-auto w-full h-[calc(100%-85px)]`}>
      <Header />
      <div>Scrap</div>
    </main>
  );
}
