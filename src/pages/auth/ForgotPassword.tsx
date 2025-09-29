import React from "react";
import loginIllustration from "../../assets/images/login.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type ForgotFormData = {
  email: string;
};

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotFormData>();

  const onSubmit = (data: ForgotFormData) => {
    console.log("Forgot Password", data.email);
    navigate("/verify");
    alert("OTP sent to your email ");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row login-card w-75 shadow-lg rounded overflow-hidden">
        <div className="col-md-6 p-5">
          <h2 className="text-center login-title mb-4">Forgot Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Enter Your Email</label>
              <input
                type="email"
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
            <button type="submit" className="btn btn-login w-100">
              Send OTP
            </button>
            <div className="mt-3 text-center">
              <button
                type="button"
                className="btn btn-link forgot-link"
                onClick={() => navigate("/login")}
              >
                Back to Login
              </button>
            </div>
          </form>
        </div>

        <div className="col-md-6 illustration-side">
          <img
            src={loginIllustration}
            alt="Forgot Password Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
