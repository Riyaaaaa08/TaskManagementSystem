import React from "react";

export type Employee = {
  name: string;
  project: string;
  email: string;
  role: "Developer" | "Tester";
  statusColor: "green" | "red";
};

const EmployeeRow: React.FC<Employee> = ({
  name,
  project,
  email,
  role,
  statusColor,
}) => {
  return (
    <div className="tm-tr">
      <div className="tm-td tm-col-name">
        <div className="tm-initial-avatar" aria-hidden="true">
          {name.slice(0, 2).toUpperCase()}
        </div>
        <span className="tm-name-text">{name}</span>
      </div>
      <div className="tm-td tm-col-project">{project}</div>
      <div className="tm-td tm-col-email">{email}</div>
      <div className="tm-td tm-col-role">
        <span
          className={`tm-role-pill ${statusColor === "green" ? "ok" : "warn"}`}
        >
          {role}
        </span>
      </div>
    </div>
  );
};

export default EmployeeRow;
