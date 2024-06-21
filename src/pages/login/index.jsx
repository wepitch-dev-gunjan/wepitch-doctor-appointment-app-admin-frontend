import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../setup/states";
import { login } from "./apis";
import "./style.scss";

const Login = () => {
  const {
    isAuthenticated,
    setIsAuthenticated,
    email,
    setEmail,
    password,
    setPassword,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated) navigate("/dashboard");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    try {
      const { token } = await login(email, password);
      console.log(token);
      localStorage.setItem("doctor-app-admin-token", token);

      setIsAuthenticated(true);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., show a message to the user)
    }
  };

  return (
    <div className="Login-container">
      <div className="main-container">
        <div className="login-left">
          <div className="left-container">
            <h1>Doctor App Admin</h1>
            <p>Log in to access the dashboard</p>
            <form>
              <label>Email</label>
              <input type="email" value={email} onChange={handleEmailChange} />
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </form>
            <div className="login-button" onClick={handleLogin}>
              Log in
            </div>
          </div>
        </div>
        <div className="right">
          <img src="" alt="login-image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
