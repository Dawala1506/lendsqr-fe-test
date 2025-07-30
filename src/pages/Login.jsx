import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/Login.scss";
import logo from "../assets/images/logo.png";
import illustration from "../assets/images/login-image.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    const formIsValid = Object.keys(newErrors).length === 0;
    setIsValid(formIsValid);
    return formIsValid;
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
    if (email && password) {
      validateForm();
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/users");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="logo-container">
          <img src={logo} alt="Lendsqr" className="login-logo" />
        </div>
        <div className="illustration">
          <img
            src={illustration}
            alt="Login Illustration"
            className="illustration-img"
          />
        </div>
      </div>

      <div className="login-right">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>

        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              onBlur={() => validateForm()}
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <span className="error-message">{errors.email}</span>
            )}
          </div>

          <div className="form-group password-field">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
              onBlur={() => validateForm()}
              className={errors.password ? "error" : ""}
            />
            <span className="show-btn" onClick={togglePasswordVisibility}>
              {showPassword ? "HIDE" : "SHOW"}
            </span>
            {errors.password && (
              <span className="error-message">{errors.password}</span>
            )}
          </div>

          <a className="forgot-password">FORGOT PASSWORD?</a>

          <button type="submit" className="login-btn" disabled={!isValid}>
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
