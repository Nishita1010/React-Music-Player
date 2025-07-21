import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./feed";
import Favourites from "./favourites";
import Player from "./player";
import Trending from "./trending";
import Library from "./library";

export default function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Library />}>
          {" "}
        </Route>
        <Route path="/feed" element={<Feed />}>
          {" "}
        </Route>
        <Route path="/favourites" element={<Favourites />}>
          {" "}
        </Route>
        <Route path="/player" element={<Player />}>
          {" "}
        </Route>
        <Route path="/trending" element={<Trending />}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}
