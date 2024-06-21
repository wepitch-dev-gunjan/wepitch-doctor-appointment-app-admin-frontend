import React, { createContext, useEffect, useState } from "react";
import { fetchProfile } from "../../pages/profile/apis/apiServices";
import ScreenLoader from "../../common/components/loaders/ScreenLoader";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProfile()
      .then((response) => {
        if (response) {
          setAdmin(response);
        } else {
          setError(new Error("No profile data found"));
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ScreenLoader />;
  }

  if (error) {
    throw error;
  }

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
