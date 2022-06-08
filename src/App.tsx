import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { ServiceProvider } from "./context/Service/ServiceProvider";
import Cars from "./pages/Cars";
import Health from "./pages/Health";
import Home from "./pages/Home";
import Main from "./pages/Main";

export default function App() {
  return (
    <ServiceProvider>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/health" element={<Health />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </ServiceProvider>
  );
}
