import React from "react";
import MainContent from "../components/MainContent";
import { ServiceType } from "../utils/enum";

export default function Health() {
  return <MainContent filter={ServiceType.HEALTH} />;
}
