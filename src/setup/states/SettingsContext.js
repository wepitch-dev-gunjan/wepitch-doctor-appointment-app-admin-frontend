import { createContext, useState } from "react";

export const SettingContext = createContext();

export const SettingProvider = ({ children }) => {
  const [admin, setAdmin] = useState({})
  return <SettingContext.Provider value={{
    admin, setAdmin
  }}>
    {children}
  </SettingContext.Provider>
}