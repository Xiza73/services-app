import React from "react";
import { useService } from "../context/Service/ServiceContext";
import { Service } from "../utils/types";
import Button from "./atoms/Button";

type Props = {
  service: Service;
};

export default function Card({ service }: Props) {
  const { name, description } = service;
  const { setService, deleteService } = useService();
  return (
    <div
      className="w-72 sm:w-80 h-max shadow-primary-150 shadow-md rounded-md bg-primary-50 
                  flex flex-col justify-start content-center border-solid border-2 border-primary-100"
    >
      <div className="w-full px-8 py-6">
        <h2 className="title">{name}</h2>
        <p className="content">{description}</p>
      </div>
      <div className="w-full px-8 py-6 mt-auto rounded-b-sm bg-primary-100 flex justify-around content-center">
        <Button
          text="Editar"
          color="blue"
          onClick={() => setService(service)}
        />
        <Button
          text="Eliminar"
          color="red"
          onClick={() => deleteService(service.id)}
        />
      </div>
    </div>
  );
}
