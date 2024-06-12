import { createContext, useState } from "react";

export const AnalyticsContext = createContext();

export const AnalyticsProvider = ({ children }) => {
  const [analytics, setAnalytics] = useState({})
  return <AnalyticsContext.Provider value={{
    analytics, setAnalytics
  }}>
    {children}
  </AnalyticsContext.Provider>
}