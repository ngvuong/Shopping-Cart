import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Shop from "./Shop";

export default function Router() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </HashRouter>
  );
}
