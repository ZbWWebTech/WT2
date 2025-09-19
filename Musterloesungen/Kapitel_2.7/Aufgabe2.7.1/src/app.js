import React from "react";
import { Routes, Route  } from 'react-router-dom';
import { Home, About } from "./components";

export default function App() {
  return (
    <div>
      <h1>Router Beispiel</h1>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}