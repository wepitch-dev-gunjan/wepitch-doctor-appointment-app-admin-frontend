import { createContext, useState } from "react";

export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [admin, setAdmin] = useState({})
  return <DoctorContext.Provider value={{
    admin, setAdmin
  }}>
    {children}
  </DoctorContext.Provider>
}