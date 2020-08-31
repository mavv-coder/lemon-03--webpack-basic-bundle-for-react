import React from "react";
import * as classes from "./home.component.style";
import { switchRoutes } from "router/index"; // Using alias for router
const image = require("images/godzilla.jpg"); // Using alias for image

export const HomeComponent: React.FC = () => {
  const { mytitle, images, mainContainer, content } = classes;
  return (
    <>
      <main className={mainContainer}>
        <div className={content}>
          <h1 className={mytitle}>Hello from {switchRoutes.home} component</h1>
          <img className={images} src={image} alt="godzilla" />
        </div>
      </main>
    </>
  );
};
