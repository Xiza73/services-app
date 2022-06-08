import React from "react";
import MainContent from "../components/MainContent";
import { ServiceType } from "../utils/enum/index";

export default function Home() {
  return <MainContent filter={ServiceType.HOME} />;
}
