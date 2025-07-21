import React from "react";

export default function SongCard({ song, onPlay, onFavorite }) {
  return (
    <div className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors cursor-pointer group">
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={song.imageUrl}
            alt={song.title}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div
            className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => onPlay && onPlay(song)}
          >
            <span className="text-white text-xl">▶️</span>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium truncate">{song.title}</h3>
          <p className="text-gray-400 text-sm truncate">{song.artist}</p>
          <p className="text-gray-500 text-xs">
            {song.album} • {song.year}
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <span className="text-gray-400 text-sm">{song.duration}</span>
          <button
            onClick={() => onFavorite && onFavorite(song.id)}
            className={`text-xl transition-colors ${
              song.isFavorite
                ? "text-red-500"
                : "text-gray-400 hover:text-red-500"
            }`}
          >
            {song.isFavorite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
    </div>
  );
}
