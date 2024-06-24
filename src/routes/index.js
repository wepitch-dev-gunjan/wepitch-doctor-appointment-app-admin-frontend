import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Doctors from "../pages/dostors";
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
import Patients from "../pages/patients";
import Admins from "../pages/admins";
import AppointmentManagement from "../pages/appointments";

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
        path: "login",
        element: <AppointmentManagement />,
      },
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
        path: "patients",
        element: (
          <ProtectedRoute>
            <Patients />
          </ProtectedRoute>
        ),
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
        path: "doctors",
        element: (
          <ProtectedRoute>
            <Doctors />
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
