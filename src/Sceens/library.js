import React, { useState } from "react";
import { sampleSongs } from "../Shared/musicData";
import SongCard from "../Components/SongCard";

export default function Library() {
  const [songs, setSongs] = useState(sampleSongs);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      song.album.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
        <h1 className="text-3xl font-bold text-white">Your Library</h1>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search songs, artists, albums..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 w-80"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              🔍
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredSongs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onPlay={handlePlay}
            onFavorite={handleFavorite}
          />
        ))}
      </div>

      {filteredSongs.length === 0 && (
        <div className="text-center text-gray-400 py-12">
          <p className="text-xl mb-2">No songs found</p>
          <p>Try adjusting your search terms</p>
        </div>
      )}
    </div>
  );
}
