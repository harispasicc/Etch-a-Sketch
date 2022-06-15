import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Game from "./components/Game";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="table">
          <h1>Etch A Sketch</h1>
          <Game />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}
