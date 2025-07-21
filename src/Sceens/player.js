import React, { useState } from "react";
import { sampleSongs } from "../Shared/musicData";
import AudioPlayer from "../Components/AudioPlayer";
import SongCard from "../Components/SongCard";

export default function Player() {
  const [currentSong, setCurrentSong] = useState(sampleSongs[0]);
  const [queue, setQueue] = useState(sampleSongs);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShuffled, setIsShuffled] = useState(false);
  const [repeatMode, setRepeatMode] = useState("off"); // 'off', 'all', 'one'

  const handleNext = () => {
    if (repeatMode === "one") {
      // Replay current song
      return;
    }

    let nextIndex;
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * queue.length);
    } else {
      nextIndex = currentIndex + 1;
      if (nextIndex >= queue.length) {
        nextIndex = repeatMode === "all" ? 0 : currentIndex;
      }
    }

    setCurrentIndex(nextIndex);
    setCurrentSong(queue[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
      setCurrentSong(queue[prevIndex]);
    } else if (repeatMode === "all") {
      setCurrentIndex(queue.length - 1);
      setCurrentSong(queue[queue.length - 1]);
    }
  };

  const handleSongSelect = (song, index) => {
    setCurrentSong(song);
    setCurrentIndex(index);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleRepeat = () => {
    const modes = ["off", "all", "one"];
    const currentModeIndex = modes.indexOf(repeatMode);
    const nextMode = modes[(currentModeIndex + 1) % modes.length];
    setRepeatMode(nextMode);
  };

  const getRepeatIcon = () => {
    switch (repeatMode) {
      case "all":
        return "🔁";
      case "one":
        return "🔂";
      default:
        return "↗️";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Player */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-bold text-white mb-6">🎵 Now Playing</h1>

        <AudioPlayer
          currentSong={currentSong}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />

        {/* Playback Options */}
        <div className="flex items-center justify-center space-x-8 mt-6">
          <button
            onClick={toggleShuffle}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              isShuffled
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            <span>🔀</span>
            <span>Shuffle</span>
          </button>

          <button
            onClick={toggleRepeat}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
              repeatMode !== "off"
                ? "bg-purple-600 text-white"
                : "bg-gray-800 text-gray-400 hover:text-white"
            }`}
          >
            <span>{getRepeatIcon()}</span>
            <span>Repeat</span>
          </button>
        </div>
      </div>

      {/* Queue */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">Queue</h2>
          <span className="text-gray-400 text-sm">{queue.length} songs</span>
        </div>

        <div className="max-h-96 overflow-y-auto space-y-2">
          {queue.map((song, index) => (
            <div
              key={song.id}
              onClick={() => handleSongSelect(song, index)}
              className={`cursor-pointer rounded-lg transition-colors ${
                currentIndex === index
                  ? "bg-purple-900 bg-opacity-50"
                  : "hover:bg-gray-800"
              }`}
            >
              <div className="flex items-center space-x-3 p-3">
                <div className="text-gray-400 text-sm w-6">
                  {currentIndex === index ? "🎵" : index + 1}
                </div>
                <img
                  src={song.imageUrl}
                  alt={song.title}
                  className="w-10 h-10 rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-medium truncate">
                    {song.title}
                  </p>
                  <p className="text-gray-400 text-xs truncate">
                    {song.artist}
                  </p>
                </div>
                <span className="text-gray-400 text-xs">{song.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
