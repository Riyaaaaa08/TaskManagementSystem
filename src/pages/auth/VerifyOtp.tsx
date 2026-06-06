import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import loginIllustration from "../../assets/images/login.png";
import { useNavigate } from "react-router-dom";

type OtpFormData = {
  otp: string;
};

const VerifyOtp: React.FC = () => {
  const navigate = useNavigate();
  const [timer, setTimer] = useState<number>(60);
  const [canResend, setCanResend] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<OtpFormData>();

 
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

 
  const onSubmit = (data: OtpFormData) => {
   
    
    console.log("OTP entered:", data.otp);
    alert("OTP Verified ");
    navigate("/reset");
  };

 
  const handleResend = () => {
 
    setTimer(60);
    setCanResend(false);
    reset();
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="row login-card w-75">
        <div className="col-md-6 p-5">
          <h2 className="text-center login-title mb-4">Verify OTP</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Enter OTP</label>
              <input
                type="text"
                className={`form-control rounded-pill ${
                  errors.otp ? "is-invalid" : ""
                }`}
                placeholder="123456"
                {...register("otp", {
                  required: "OTP is required",
                  pattern: {
                    value: /^\d{6}$/,
                    message: "OTP must be 6 digits",
                  },
                })}
              />
              {errors.otp && (
                <div className="invalid-feedback">{errors.otp.message}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-login w-100"
              disabled={timer === 0 && !canResend}
            >
              Verify
            </button>
            <div className="mt-3 text-center">
              <span>
                {canResend ? (
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={handleResend}
                  >
                    Resend OTP
                  </button>
                ) : (
                  <span>
                    Resend OTP in {timer} second{timer !== 1 ? "s" : ""}
                  </span>
                )}
              </span>
            </div>
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
            alt="OTP Illustration"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
