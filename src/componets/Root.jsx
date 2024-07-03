import { React, Suspense, useState } from "react";
import Rander from "./Rander";

const Root = () => {
  const [garage, changeGarage] = useState({
    garageScale: 1.0,
    garagePosition: null,
    garageRotation: [-Math.PI / 2.3, 0, -0.8],
  });

  const updateRotation = () => {
    changeGarage((previousState) => {
      return { ...previousState, garageRotation: [-Math.PI / 2.18, 0, 0.6] };
    });
  };

  return [garage.garagePosition, garage.garageScale, garage.garageRotation];
};

export default Root;
