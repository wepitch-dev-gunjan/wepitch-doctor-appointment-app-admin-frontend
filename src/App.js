import React from "react";
import "./App.scss";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default App;
