import React, { useState } from "react";
import { sampleSongs } from "../Shared/musicData";
import SongCard from "../Components/SongCard";

export default function Feed() {
  const [songs, setSongs] = useState(sampleSongs);
  const [activeTab, setActiveTab] = useState("recent");

  const recentlyPlayed = songs.slice(0, 3);
  const recommendations = songs.slice(2, 5);

  const handlePlay = (song) => {
    console.log("Playing:", song.title);
    // TODO: Implement audio playback
  };

  const handleFavorite = (songId) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === songId ? { ...song, isFavorite: !song.isFavorite } : song
      )
    );
  };

  const tabs = [
    { id: "recent", label: "Recently Played", icon: "🕐" },
    { id: "recommended", label: "For You", icon: "✨" },
    { id: "new", label: "New Releases", icon: "🆕" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Your Feed</h1>
        <div className="text-gray-400">Discover new music</div>
      </div>

      {/* Tab Navigation */}
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            <span>{tab.icon}</span>
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Content based on active tab */}
      <div className="space-y-6">
        {activeTab === "recent" && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Recently Played
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {recentlyPlayed.map((song) => (
                <SongCard
                  key={song.id}
                  song={song}
                  onPlay={handlePlay}
                  onFavorite={handleFavorite}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "recommended" && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              Recommended for You
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {recommendations.map((song) => (
                <SongCard
                  key={song.id}
                  song={song}
                  onPlay={handlePlay}
                  onFavorite={handleFavorite}
                />
              ))}
            </div>
          </div>
        )}

        {activeTab === "new" && (
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">
              New Releases
            </h2>
            <div className="grid grid-cols-1 gap-4">
              {songs.slice(1, 4).map((song) => (
                <SongCard
                  key={song.id}
                  song={song}
                  onPlay={handlePlay}
                  onFavorite={handleFavorite}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
