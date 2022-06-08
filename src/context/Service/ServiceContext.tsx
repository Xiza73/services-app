import { Service } from "../../utils/types/index";
import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface serviceState {
  service: Service | null;
  setService: Dispatch<SetStateAction<Service | null>>;
  services: Service[];
  addService: (service: Service) => void;
  deleteService: (id: string) => void;
  editService: (service: Service) => void;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
}

const initialServiceState: serviceState = {
  service: null,
  setService: () => {},
  services: [],
  addService: () => {},
  deleteService: () => {},
  editService: () => {},
  loading: true,
  setLoading: () => {},
};

export const ServiceContext = createContext(initialServiceState);

export const useService = (): serviceState => useContext(ServiceContext);
