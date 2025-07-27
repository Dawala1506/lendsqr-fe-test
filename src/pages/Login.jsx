import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
// import logo from "../assets/images/lendsqr-logo.png"; // Add actual image

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // For now, just navigate to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <div className="login-left">
        {/* <img src={logo} alt="Lendsqr" className="login-logo" /> */}
        <div className="illustration">
          {/* Add your SVG/illustration here */}
        </div>
      </div>

      <div className="login-right">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="password-field">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="show-btn">SHOW</span>
          </div>

          <a href="#" className="forgot-password">
            FORGOT PASSWORD?
          </a>

          <button type="submit" className="login-btn">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
