export const sampleSongs = [
  {
    id: 1,
    title: "Blinding Lights",
    artist: "The Weeknd",
    album: "After Hours",
    duration: "3:20",
    imageUrl:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // placeholder
    genre: "Pop",
    year: 2020,
    isFavorite: false,
  },
  {
    id: 2,
    title: "Shape of You",
    artist: "Ed Sheeran",
    album: "÷ (Divide)",
    duration: "3:53",
    imageUrl:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=300&fit=crop",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // placeholder
    genre: "Pop",
    year: 2017,
    isFavorite: true,
  },
  {
    id: 3,
    title: "Someone Like You",
    artist: "Adele",
    album: "21",
    duration: "4:45",
    imageUrl:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // placeholder
    genre: "Soul",
    year: 2011,
    isFavorite: true,
  },
  {
    id: 4,
    title: "Bohemian Rhapsody",
    artist: "Queen",
    album: "A Night at the Opera",
    duration: "5:55",
    imageUrl:
      "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=300&h=300&fit=crop",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // placeholder
    genre: "Rock",
    year: 1975,
    isFavorite: false,
  },
  {
    id: 5,
    title: "Bad Guy",
    artist: "Billie Eilish",
    album: "When We All Fall Asleep, Where Do We Go?",
    duration: "3:14",
    imageUrl:
      "https://images.unsplash.com/photo-1445985543470-41fba5c3144a?w=300&h=300&fit=crop",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // placeholder
    genre: "Pop",
    year: 2019,
    isFavorite: false,
  },
];

export const trendingSongs = sampleSongs.slice(0, 3);
export const favoriteSongs = sampleSongs.filter((song) => song.isFavorite);
