import { useState, Suspense } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import Planet from "../public/Planet.jsx";

function App() {
  return (
    <>
      <Canvas>
        <ambientLight intensity={3} />
        <OrbitControls
          enableZoom={false}
          autoRotate
          maxPolarAngle={Math.PI / 2}
          nminPolarAngle={Math.PI / 2}
        />
        <Suspense fallback={null}>
          <Planet />
        </Suspense>
        <Environment preset="sunset" />
        <ContactShadows
          position={[0, -2, 0]}
          opacity={1}
          scale={50}
          blur={1}
          far={10}
          resolution={256}
          color="#000"
        />
      </Canvas>
      <div className="text">
        <h1>Planeta</h1>
        <p>
        Planeta (do grego πλανήτης [planεːtεːs] viajante) é um corpo celeste
          que orbita uma estrela ou um remanescente de estrela, com massa
          suficiente para se tornar esférico pela sua própria gravidade, mas não
          ao ponto de causar fusão termonuclear, e que tenha limpado de
          planetesimais a sua região vizinha (dominância orbital).[1][2] O termo
          planeta é antigo, com ligações com a história, astrologia, ciência,
          mitologia e religião.
        </p>
        <p>
          Os planetas eram vistos por muitas culturas
          antigas como divinos ou emissários de deuses. À medida que o
          conhecimento científico evoluiu, a percepção humana sobre os planetas
          mudou, incorporando diversos tipos de objetos. Em 2006, a União
          Astronômica Internacional (UAI) adotou oficialmente uma resolução
          definindo planetas dentro do Sistema Solar, a qual tem sido elogiada e
          criticada, permanecendo em discussão entre alguns cientistas.
        </p>
      </div>
      <footer>
        <p>Copyright 2024. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
