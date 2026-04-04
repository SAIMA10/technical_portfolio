import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Text from "./components/typography";
import DotGrid from "./components/dot-grid";
import { colors } from "./constants";
import Dashboard from "./screens/dashboard";

function App() {
  return (
    <>
      <div className="parent-container">
        <div className="dot-grid-background">
          <DotGrid
            dotSize={5}
            gap={15}
            baseColor="#271E37"
            activeColor="#5227ff"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
        <div className="content-container">
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
