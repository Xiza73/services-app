import React from "react";
import { NavLink } from "react-router-dom";
import { ServiceType } from "../../utils/enum/index";

export default function NavBar() {
  return (
    <nav className="w-full h-12 px-6 py-3 bg-primary-100">
      <ul className="w-full flex justify-start content-center transition-all duration-75">
        <li className="mr-6">
          <NavLink
            to={"/"}
            className={(e) => (e.isActive ? "text-black" : "text-primary-300")}
          >
            Inicio
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to={"/cars"}
            className={(e) => (e.isActive ? "text-black" : "text-primary-300")}
          >
            {ServiceType.CARS}
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to={"/health"}
            className={(e) => (e.isActive ? "text-black" : "text-primary-300")}
          >
            {ServiceType.HEALTH}
          </NavLink>
        </li>
        <li className="mr-6">
          <NavLink
            to={"/home"}
            className={(e) => (e.isActive ? "text-black" : "text-primary-300")}
          >
            {ServiceType.HOME}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
