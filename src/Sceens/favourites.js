import React, { useState, useEffect } from "react";
import { sampleSongs } from "../Shared/musicData";
import SongCard from "../Components/SongCard";

export default function Favourites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(sampleSongs.filter((song) => song.isFavorite));
  }, []);

  const handlePlay = (song) => {
    console.log("Playing:", song.title);
    // TODO: Implement audio playback
  };

  const handleFavorite = (songId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((song) => song.id !== songId)
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">Your Favourites</h1>
        <div className="text-gray-400">
          {favorites.length} song{favorites.length !== 1 ? "s" : ""}
        </div>
      </div>

      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 gap-4">
          {favorites.map((song) => (
            <SongCard
              key={song.id}
              song={song}
              onPlay={handlePlay}
              onFavorite={handleFavorite}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-400 py-12">
          <div className="text-6xl mb-4">❤️</div>
          <p className="text-xl mb-2">No favourite songs yet</p>
          <p>Start adding songs to your favourites from your library!</p>
        </div>
      )}
    </div>
  );
}
