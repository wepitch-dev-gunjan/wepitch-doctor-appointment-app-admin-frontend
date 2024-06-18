import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../setup/states";
import { login } from "./apis";

const Login = () => {
  const { isAuthenticated, setIsAuthenticated, email, setEmail, password, setPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  if (isAuthenticated) navigate("/dashboard")

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = async () => {
    try {
      const { token } = await login(email, password);
      console.log(token)
      localStorage.setItem("doctor-app-admin-token", token);

      setIsAuthenticated(true)
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error (e.g., show a message to the user)
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
