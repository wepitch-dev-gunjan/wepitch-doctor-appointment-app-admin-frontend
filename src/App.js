import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { UserProvider } from './contexts/UserContext';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import UsersPage from './pages/UsersPage';
import './App.scss';

const App = () => {
  return (
    <AuthProvider>
      <UserProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/login" component={LoginPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/users" component={UsersPage} />
              <Route path="/" component={LoginPage} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </AuthProvider>
  );
};

export default App;
