import { createContext } from "react";
import { data } from "../data";
export const TourismContext = createContext();

export const TourismProvider = ({ children }) => {
  return (
    <TourismContext.Provider value={{ data }}>
      {children}
    </TourismContext.Provider>
  );
};
