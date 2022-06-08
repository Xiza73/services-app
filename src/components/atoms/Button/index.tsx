import React, { MouseEventHandler } from "react";
import "./index.scss";

type Props = {
  text: string;
  color: "blue" | "red" | "green";
  border?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  text,
  color,
  border = false,
  onClick,
}: Props) {
  const style = border
    ? `border-2 border-solid bgh-${color}`
    : "border-none hover:scale-125 duration-300";

  return (
    <button
      className={`text-${color} font-semibold px-4 py-1 rounded-md ${style} text-md`}
      onClick={onClick!}
      type={`${onClick ? "button" : "submit"}`}
    >
      {text}
    </button>
  );
}
