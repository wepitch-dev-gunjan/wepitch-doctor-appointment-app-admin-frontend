import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import AppointmentManagement from "../pages/appointmentManagement";
import DoctorManagement from "../pages/doctorManagement";
import Settings from "../pages/settings";
import Analytics from "../pages/analytics";
import {
  AdminProvider,
  AppointmentProvider,
  DashboardProvider,
  AuthProvider,
} from "../setup/states";
import Profile from "../pages/profile";
import ErrorBoundary from "../common/components/errorBoundary";
import Login from "../pages/login";
import ProtectedRoute from "../common/components/protectedRoutes";
import { LayoutProvider } from "../setup/states/LayoutContext";
import Dashboard from "../pages/dashboard";
import PatientForm from "../pages/patient";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <LayoutProvider>
          <Layout />
        </LayoutProvider>
      </AuthProvider>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "analytics",
        element: (
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        ),
      },
      {
        path: "appointment-management",
        element: (
          <ProtectedRoute>
            <AppointmentProvider>
              <AppointmentManagement />
            </AppointmentProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <DashboardProvider>
              <Dashboard />
            </DashboardProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "login",
        element: <PatientForm />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <AdminProvider>
              <Profile />
            </AdminProvider>
          </ProtectedRoute>
        ),
      },
      {
        path: "doctor-management",
        element: (
          <ProtectedRoute>
            <DoctorManagement />
          </ProtectedRoute>
        ),
      },
      {
        path: "settings",
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default router;
