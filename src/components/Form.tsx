import React, { useEffect, useState } from "react";
import { v4 as setId } from "uuid";
import { useService } from "../context/Service/ServiceContext";
import { ServiceType } from "../utils/enum";
import { Service } from "../utils/types";
import Alert from "./atoms/Alert";
import Button from "./atoms/Button";
import { Input, Select, TextArea } from "./atoms/FormData";
import { useLocation } from "react-router-dom";
import { currentType } from "../utils/constants";

export default function Form() {
  const location = useLocation();
  const { service, setService, addService, editService } = useService();
  const [form, setForm] = useState<Service>({
    id: "",
    name: "",
    description: "",
    type: currentType(location.pathname),
  });
  const [error, setError] = useState(false);

  const handleChange = (e: { target: { name: string; value: string } }) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.name || !form.description || !form.type) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    if (service) {
      editService(form);
      setService(null);
    } else {
      const newService = { ...form, id: setId() };
      addService(newService);
    }
    cleanForm();
  };

  const cleanForm = () => {
    setForm({
      id: "",
      name: "",
      description: "",
      type: currentType(location.pathname),
    });
  };

  useEffect(() => {
    if (service) return setForm(service);
    if (!service) return cleanForm();
  }, [service]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-72 sm:w-80 bg-primary-50 shadow-primary-150 shadow-md rounded-lg 
                  flex flex-col my-auto mx-5"
    >
      <div className="px-5 pt-8 pb-1">
        <div className="title flex justify-between items-center">
          Servicios
          {location.pathname === "/" && (
            <Select
              id="type"
              onChange={handleChange}
              value={form.type}
              options={[
                { value: `${ServiceType.CARS}`, name: `${ServiceType.CARS}` },
                {
                  value: `${ServiceType.HEALTH}`,
                  name: `${ServiceType.HEALTH}`,
                },
                { value: `${ServiceType.HOME}`, name: `${ServiceType.HOME}` },
              ]}
            />
          )}
        </div>
        <div className="mb-5">
          <Input
            id="name"
            value={form.name}
            onChange={handleChange}
            labelName="Nombre"
            placeholder="Servicio"
          />
        </div>
        <div className="mb-5">
          <TextArea
            id="description"
            value={form.description}
            onChange={handleChange}
            labelName="Descripción"
            placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
        </div>
      </div>

      <div className="w-full px-8 py-6 mt-auto rounded-b-sm bg-primary-100 flex justify-around content-center">
        <Button
          text={`${service ? "Editar" : "Agregar"}`}
          color="green"
          border
        />
        <Button text="Cancelar" color="red" onClick={cleanForm} border />
      </div>
      {error && (
        <Alert
          message="Debes completar todos los campos para poder agregar un producto."
          setStatus={setError}
          type="error"
        />
      )}
    </form>
  );
}
