import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Garage from "../model/Garage";

const About = () => {
  // // const { isRotating, setIsRotation } = useState(false);
  // const adjustGarage = () => {
  //   let garageScale = 1.0;
  //   let garagePosition = [0, 0, 1.8];
  //   let garageRotation = [-Math.PI / 2.18, 0, 0.6];
  //   return [garageScale, garagePosition, garageRotation];
  // };
  // const [garageScale, garagePosition, garageRotation] = adjustGarage();

  return (
    <div className="absolute top-20 left-20 right-20 z-10">
      <div
        href="#"
        class="max-w flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          class="m-2 object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="src\image\umiCute.jpg"
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order. Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Voluptatibus libero in, corrupti
            numquam dicta, esse, commodi natus nulla eveniet minima quia
            cupiditate laudantium? Sequi, sint nulla a sapiente temporibus
            quidem. Molestias atque est obcaecati, incidunt quasi quas deserunt
            consequuntur delectus quam architecto esse rem eum enim, tenetur
            dignissimos ad in magni nostrum corporis voluptas. Rerum reiciendis
            dolore voluptate sed autem?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
