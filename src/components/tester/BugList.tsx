import React from "react";

interface Bug {
  id: number;
  title: string;
  desc: string;
  project: string;
  due: string;
  status: "Active" | "Resolved" | "Pending";
  priority: string;
}

interface BugListProps {
  bugs: Bug[];
}

const statusClasses = {
  Active: "badge bg-primary",
  Resolved: "badge bg-success",
  Pending: "badge bg-warning",
};

const priorityClasses = {
  High: "badge bg-danger",
  Medium: "badge bg-warning",
  Low: "badge bg-info",
};

const BugList: React.FC<BugListProps> = ({ bugs }) => (
  <div>
    {bugs.map((bug) => (
      <div key={bug.id} className="d-flex align-items-start bug-item">
        <input type="checkbox" className="form-check-input me-3 mt-1" />
        <div className="bug-info">
          <div className="fw-bold">{bug.title}</div>
          <div className="small text-muted">{bug.desc}</div>
          <div className="small text-muted">{bug.project} | Due: {bug.due}</div>
        </div>
        <div className="bug-status text-end" style={{ minWidth: 100 }}>
          <span className={statusClasses[bug.status as keyof typeof statusClasses]}>{bug.status}</span>
          <br />
          <span className={`mt-1 ${priorityClasses[bug.priority as keyof typeof priorityClasses]}`}>{bug.priority}</span>
        </div>
      </div>
    ))}
  </div>
);

export default BugList;
