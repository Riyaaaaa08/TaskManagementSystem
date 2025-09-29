import React from "react";
import { useForm } from "react-hook-form";
import loginIllustration from "../../assets/images/login.png";
import { useNavigate } from "react-router-dom";

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

    // Temporary: assume all logins go to tester dashboard
    alert("Login successful");
    navigate("/tester/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row login-card w-75 shadow-lg rounded overflow-hidden">
        {/* Left Side - Form */}
        <div className="col-md-6 p-5 bg-white">
          <h2 className="text-center login-title mb-4">Login</h2>
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
        </div>

        {/* Right Side - Illustration */}
        <div className="col-md-6 illustration-side d-flex align-items-center justify-content-center p-4">
          <img
            src={loginIllustration}
            alt="Login Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
