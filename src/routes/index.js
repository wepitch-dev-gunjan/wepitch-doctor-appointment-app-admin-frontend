import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AppointmentManagement from "../pages/appointmentManagement";
// import DashBoard from "../pages/dashboard";
import DashBoard from "../pages/dashBoard"
import DoctorManagement from "../pages/doctorManagement";
import Settings from "../pages/settings";
import Analytics from "../pages/analytics";
import { AppointmentProvider } from "../setup/states"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "analytics",
        element: <Analytics />
      },
      {
        path: "appointment-management",
        element: <AppointmentProvider>
          <AppointmentManagement />
        </AppointmentProvider>
      },
      {
        path: "dashboard",
        element: <DashBoard />
      },
      {
        path: "doctor-management",
        element: <DoctorManagement />
      },
      {
        path: "settings",
        element: <Settings />
      }
    ]
  }

]);

export default router