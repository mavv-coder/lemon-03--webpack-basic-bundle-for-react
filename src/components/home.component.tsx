import React from "react";
import * as classes from "./home.component.style";

export const HomeComponent: React.FC = () => {
  const { mytitle } = classes;
  return <h1 className={mytitle}>Hello from home component</h1>;
};
