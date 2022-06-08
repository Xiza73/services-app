import React from "react";
import MainContent from "../components/MainContent";
import { ServiceType } from "../utils/enum";

export default function Cars() {
  return <MainContent filter={ServiceType.CARS} />;
}
