import React from "react";
import { useForm } from "react-hook-form";
import loginIllustration from "../../assets/images/login.png";
import { useNavigate } from "react-router-dom";

type ResetPasswordFormData = {
  password: string;
  confirmPassword: string;
};

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ResetPasswordFormData>();

  const onSubmit = (data: ResetPasswordFormData) => {
    // Password reset logic here, e.g., call backend API
    alert("Password reset successful!");
    navigate("/login"); // Redirect to login after reset
  };

  const password = watch("password", "");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row login-card w-75">
        <div className="col-md-6 p-5">
          <h2 className="text-center login-title mb-4">Reset Password</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                className={`form-control rounded-pill ${errors.password ? "is-invalid" : ""}`}
                placeholder="Enter new password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "At least 6 characters" },
                })}
              />
              {errors.password && (
                <div className="invalid-feedback">{errors.password.message}</div>
              )}
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <input
                type="password"
                className={`form-control rounded-pill ${errors.confirmPassword ? "is-invalid" : ""}`}
                placeholder="Confirm new password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: value =>
                    value === password || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <div className="invalid-feedback">{errors.confirmPassword.message}</div>
              )}
            </div>
            <button type="submit" className="btn btn-login w-100">
              Reset Password
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
            alt="Password Reset Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
