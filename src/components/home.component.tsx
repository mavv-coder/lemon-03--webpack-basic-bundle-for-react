import React from "react";
import * as classes from "./home.component.style";
import { switchRoutes } from "router/index"; //Using alias

export const HomeComponent: React.FC = () => {
  const { mytitle } = classes;
  return <h1 className={mytitle}>Hello from {switchRoutes.home} component</h1>;
};
