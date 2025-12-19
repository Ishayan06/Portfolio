"use client";

import Home from "./page/home";
import FluidGlass from "./components/FluidGlass"; // <-- import your FluidGlass component

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white p-8 relative">
      {/* Fluid Glass effect */}
      <div className="absolute inset-0 z-0">
        <FluidGlass />
      </div>

      {/* Your Home content */}
      <div className="relative z-10">
        {/* <Home /> */}
      </div>
    </main>
  );
}
