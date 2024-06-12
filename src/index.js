import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  RouterProvider
} from "react-router-dom";
import router from './routes/index'
import { AdminProvider } from './setup/states/AdminContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AdminProvider>
      <RouterProvider router={router} />
    </AdminProvider>
  </React.StrictMode>
);