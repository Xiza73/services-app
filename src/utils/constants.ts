import { ServiceType } from "./enum";

const routeToType: {
  [key: string]: ServiceType;
} = {
  "/cars": ServiceType.CARS,
  "/health": ServiceType.HEALTH,
  "/home": ServiceType.HOME,
};

export const currentType = (route: string) => {
  return routeToType[route] ? routeToType[route] : ServiceType.CARS;
};
