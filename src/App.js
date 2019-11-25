import React from "react";
import { Thing } from "./components/thing";
import { Canvas } from "react-three-fiber";
import "./App.css";

const App = () => (
  <Canvas>
    <Thing position={[0, 0, 0]} color={"peachpuff"} />
  </Canvas>
);

export default App;
