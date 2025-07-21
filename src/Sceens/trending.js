import React, { useState } from "react";
import { trendingSongs, sampleSongs } from "../Shared/musicData";
import SongCard from "../Components/SongCard";

export default function Trending() {
  const [songs, setSongs] = useState([
    ...trendingSongs,
    ...sampleSongs.slice(3),
  ]);

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

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">🔥 Trending Now</h1>
        <div className="text-gray-400">Popular tracks this week</div>
      </div>

      <div className="bg-gradient-to-r from-purple-900 to-blue-900 rounded-lg p-6 mb-8">
        <h2 className="text-xl font-semibold text-white mb-2">
          Top Hit This Week
        </h2>
        <div className="flex items-center space-x-4">
          <img
            src={trendingSongs[0]?.imageUrl}
            alt={trendingSongs[0]?.title}
            className="w-20 h-20 rounded-lg object-cover"
          />
          <div>
            <h3 className="text-white font-bold text-lg">
              {trendingSongs[0]?.title}
            </h3>
            <p className="text-gray-300">{trendingSongs[0]?.artist}</p>
            <p className="text-gray-400 text-sm">{trendingSongs[0]?.album}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {songs.map((song, index) => (
          <div key={song.id} className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-gray-400 w-8">
              #{index + 1}
            </div>
            <div className="flex-1">
              <SongCard
                song={song}
                onPlay={handlePlay}
                onFavorite={handleFavorite}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
