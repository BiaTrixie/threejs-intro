import { useState, Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Planet from "../public/Planet.jsx";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={3} />
        <OrbitControls enableZoom={false} />
        <Suspense fallback={null}>
          <Planet />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
      <div className="text">
        <h1>Planet</h1>
        <p>
          Planet revolutionized the earth observation industry with the highest
          frequency satellite data commercially available.
        </p>
        <p>Planet’s data is transforming the way companies and governments use satellite imagery data, delivering insights at the daily pace of change on earth. This differentiated data set powers decision-making in a myriad of industries including agriculture, forestry, mapping, and government. Our fleet of over 200 earth imaging satellites, the largest in history, images the whole Earth land mass daily.</p>
      </div>
      <Footer/>
    </>
  );
}

export default App;
