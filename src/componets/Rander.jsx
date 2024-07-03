import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Garage from "../model/Garage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Root from "Root";

import { OrbitControls } from "@react-three/drei";
import Root from "./Root";

const Rander = () => {
  // const { isRotating, setIsRotation } = useState(false);

  <Root />;

  const [garage, changeGarage] = useState({
    garageScale: 1.0,
    garagePosition: null,
    garageRotation: [-Math.PI / 2.3, 0, -0.8],
  });

  // return [garageScale, garagePosition, garageRotation];

  // const [garageScale, garagePosition, garageRotation] = adjustGarage();

  return (
    // <div>
    //   <h1 className="text-3xl font-bold underline text-red-400">Hallo World</h1>
    // </div>

    <section className="w-full h-screen relative">
      <Canvas
        className={
          "w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'} "
        }
        camera={{ near: 0.1, far: 1000 }}
      >
        <OrbitControls />

        <Suspense>
          <directionalLight position={[0, 3, 0]} intensity={10} />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
        </Suspense>
        <Garage
          position={garage.garagePosition}
          scale={garage.garageScale}
          rotation={garage.garageRotation}
          // isRotating={isRotating}
          // setIsRotating={setIsRotation}
        />
      </Canvas>
    </section>
  );
};

export default Rander;
