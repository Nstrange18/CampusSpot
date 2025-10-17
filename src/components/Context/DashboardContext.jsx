import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <DashboardContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </DashboardContext.Provider>
  );
};
