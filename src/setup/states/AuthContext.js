import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Replace with your actual authentication logic
    const authStatus = localStorage.getItem("doctor-app-admin-token");
    setIsAuthenticated(!!authStatus);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, email, setEmail, password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};
