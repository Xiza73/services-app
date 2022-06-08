import React from "react";
import CardsContainer from "./CardsContainer";
import Form from "./Form";

type Props = {
  filter?: string;
};

export default function MainContent({ filter }: Props) {
  return (
    <div className="flex flex-col md:flex-row w-full grow">
      <div className="md:col-span-2 order-2 md:order-1">
        <CardsContainer filter={filter!} />
      </div>
      <div className="m-auto pt-7 md:p-0 md:w-1/3 order-1 md:order-2">
        <Form />
      </div>
    </div>
  );
}
