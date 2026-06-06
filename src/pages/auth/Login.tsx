import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoginCard from "../../components/LoginCard";

type LoginFormData = {
  email: string;
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
    console.log("Login Data:", data);

    alert("Login successful");
    navigate("LeaderDashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <LoginCard title="Login">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className={`form-control rounded-pill ${
                errors.email ? "is-invalid" : ""
              }`}
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email.message}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className={`form-control rounded-pill ${
                errors.password ? "is-invalid" : ""
              }`}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "At least 6 characters" },
              })}
            />
            {errors.password && (
              <div className="invalid-feedback">{errors.password.message}</div>
            )}
          </div>

          <div className="mb-3 text-end">
            <button
              type="button"
              className="btn btn-link forgot-link"
              onClick={() => navigate("/forgot")}
            >
              Forgot Password?
            </button>
          </div>

          <button type="submit" className="btn btn-login w-100 rounded-pill">
            Login
          </button>
        </form>
      </LoginCard>
    </div>
  );
};

export default Login;
