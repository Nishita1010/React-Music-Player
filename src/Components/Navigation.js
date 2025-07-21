import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Library", icon: "📚" },
    { path: "/feed", label: "Feed", icon: "🏠" },
    { path: "/trending", label: "Trending", icon: "🔥" },
    { path: "/favourites", label: "Favourites", icon: "❤️" },
    { path: "/player", label: "Player", icon: "🎵" },
  ];

  return (
    <nav className="bg-gray-900 w-64 min-h-screen p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-purple-400">🎵 Music Player</h1>
      </div>

      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                location.pathname === item.path
                  ? "bg-purple-600 text-white"
                  : "text-gray-300 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <div className="text-sm text-gray-400">
          <p>Now Playing</p>
          <p className="text-white font-medium">No song selected</p>
        </div>
      </div>
    </nav>
  );
}
