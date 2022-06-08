import React from "react";
import NavBar from "./NavBar";
import { IProps } from "../../utils/types";

export function Layout({ children }: IProps) {
  return (
    <section className="bg-light dark:bg-dark h-screen text-black flex flex-col">
      <NavBar />
      {children}
    </section>
  );
}
