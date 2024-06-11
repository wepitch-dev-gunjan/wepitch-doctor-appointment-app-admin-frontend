import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { UserProvider } from "./contexts/UserContext";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import "./App.scss";
import CostPerUnitCard from "./components/Dashboard/Dashboard";
import Analytics from "./pages/analytics";
import AppointmentManagement from "./pages/appointmentManagement";
import DashBoard from "./pages/dashBoard";
import DoctorManagement from "./pages/doctorManagement";
import Settings from "./pages/settings";
import UserManagement from "./pages/userManagement";

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<CostPerUnitCard />} />
              <Route path="/Analytics" element={<Analytics />} />
              <Route
                path="/AppointmentManagement"
                element={<AppointmentManagement />}
              />
              <Route path="/DashBoard" element={<DashBoard />} />
              <Route path="/DoctorManagement" element={<DoctorManagement />} />
              <Route path="/Settings" element={<Settings />} />
              <Route path="/UserManagement" element={<UserManagement />} />

              <Route path="/dashboard" element={DashboardPage} />
              <Route path="/users" element={UsersPage} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
