import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../Components/Layout";
import Feed from "./feed";
import Favourites from "./favourites";
import Player from "./player";
import Trending from "./trending";
import Library from "./library";

export default function Home() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/player" element={<Player />} />
          <Route path="/trending" element={<Trending />} />
        </Routes>
      </Layout>
    </Router>
  );
}
