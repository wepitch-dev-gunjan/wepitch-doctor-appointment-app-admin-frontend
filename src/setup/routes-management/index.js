import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import AppointmentManagement from "../../pages/appointmentManagement";
import DashBoard from "../../pages/dashboard";
import DoctorManagement from "../../pages/doctorManagement";
import Settings from "../../pages/settings";
import Analytics from "../../pages/analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/analytics",
    element: <Analytics />
  },
  {
    path: "/appointment-management",
    element: <AppointmentManagement />
  },
  {
    path: "/dashboard",
    element: <DashBoard />
  },
  {
    path: "/doctor-management",
    element: <DoctorManagement />
  },
  {
    path: "/settings",
    element: <Settings />
  }
]);

export default router