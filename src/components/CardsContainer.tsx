import React from "react";
import { useService } from "../context/Service/ServiceContext";
import Card from "./Card";

type Props = {
  filter?: string;
};

export default function CardsContainer({ filter }: Props) {
  const { services } = useService();

  return (
    <div className="h-full flex justify-around content-center flex-wrap md:gap-8 gap-5 p-9">
      {filter
        ? services
            .filter((service) => service.type === filter)
            .map((service) => <Card key={service.id} service={service} />)
        : services.map((service) => (
            <Card key={service.id} service={service} />
          ))}
    </div>
  );
}
