import React from "react";

type Props = {
  icon: React.ReactNode;
  label: string;
  value: number;
  variant?: "danger" | "success" | "warning" | "secondary";
};

const bgByVariant: Record<NonNullable<Props["variant"]>, string> = {
  danger: "#fde7ea",
  success: "#e8f6ee",
  warning: "#fff7e1",
  secondary: "#f2f2f7",
};

const StatCard: React.FC<Props> = ({ icon, label, value, variant = "secondary" }) => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body d-flex align-items-center" style={{ background: bgByVariant[variant], borderRadius: 8 }}>
        <div className="me-3 d-flex align-items-center justify-content-center rounded" style={{ width: 36, height: 36, background: "#fff" }}>
          {icon}
        </div>
        <div>
          <div className="small text-muted">{label}</div>
          <div className="fw-bold">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;
