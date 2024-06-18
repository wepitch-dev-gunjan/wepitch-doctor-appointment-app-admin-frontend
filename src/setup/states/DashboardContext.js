import { createContext, useState } from "react";

export const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState({})
  return <DashboardContext.Provider value={{
    dashboard, setDashboard
  }}>
    {children}
  </DashboardContext.Provider>
}