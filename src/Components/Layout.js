import React from "react";
import Navigation from "./Navigation";

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Navigation />
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
}
