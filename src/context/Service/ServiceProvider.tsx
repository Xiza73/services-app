import React, { useEffect, useState } from "react";
import { ServiceContext } from "./ServiceContext";
import { IProps, Service } from "../../utils/types";

export function ServiceProvider({ children }: IProps) {
  const [service, setService] = useState<Service | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const addService = (service: Service) => {
    setServices([...services, service]);
  };

  const deleteService = (id: string) => {
    const newServices = services.filter((s) => s.id !== id);
    setServices(newServices);
  };

  const editService = (service: Service) => {
    const newServices = services.map((s) =>
      s.id === service.id ? service : s
    );
    setServices(newServices);
  };

  useEffect(() => {
    const servicesLS = JSON.parse(localStorage.getItem("services")!);
    if (servicesLS && servicesLS.length > 0) {
      setServices(servicesLS);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("services", JSON.stringify(services));
  }, [services]);

  return (
    <ServiceContext.Provider
      value={{
        service,
        setService,
        services,
        addService,
        deleteService,
        editService,
        loading,
        setLoading,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
