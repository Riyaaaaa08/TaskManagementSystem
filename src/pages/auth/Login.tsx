import React from "react";
import { useForm } from "react-hook-form";
import loginIllustration from "../../assets/image 13.svg";
import { useNavigate } from "react-router-dom";
import "../../App.css";

type LoginFormData = {
  username: string;
  password: string;
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    alert("Login successful");
    navigate("/tester/dashboard");
  };

  return (
    <div className="login-background">
      <div className="login-card" role="region" aria-label="Login form">
        <div className="login-left">
          <h2 className="login-title">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-group">
              <label className="form-label">Username:</label>
              <input
                type="text"
                placeholder="Your Name"
                className={`custom-input ${
                  errors.username ? "is-invalid" : ""
                }`}
                {...register("username", {
                  required: "Username is required",
                })}
              />
              {errors.username && (
                <div className="invalid-feedback">
                  {errors.username.message}
                </div>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Password:</label>
              <input
                type="password"
                placeholder="Password"
                className={`custom-input ${
                  errors.password ? "is-invalid" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback">
                  {errors.password.message}
                </div>
              )}
            </div>

            <div className="forgot-password">
              <button
                type="button"
                className="forgot-link"
                onClick={() => navigate("/forgot")}
              >
                Forgot Password?
              </button>
            </div>

            <button type="submit" className="btn-login">
              Login
            </button>
          </form>
        </div>
      </div>

      <div className="login-illustration" aria-hidden="true">
        <img src={loginIllustration} alt="Illustration" />
      </div>
    </div>
  );
};

export default Login;
