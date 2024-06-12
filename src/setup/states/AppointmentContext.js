import { createContext, useState } from "react";

export const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointment, setAppointment] = useState({})
  return <AppointmentContext.Provider value={{
    appointment, setAppointment
  }}>
    {children}
  </AppointmentContext.Provider>
}