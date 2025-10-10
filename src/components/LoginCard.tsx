import React from "react";
import type { ReactNode } from "react";

import loginIllustration from "../assets/images/login.png";
interface CardProps {
  children: ReactNode;
  title?: string;
}

const LoginCard: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className="card shadow-lg rounded overflow-hidden w-75">
      <div className="row g-0">
        <div className="col-md-6 p-5 bg-white d-flex flex-column justify-content-center">
          {title && <h2 className="text-center login-title mb-4">{title}</h2>}
          {children}
        </div>
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

export default LoginCard;
