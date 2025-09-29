import React from "react";
import BugList from "../../components/BugList";

const bugs = [
  {
    id: 1,
    title: "Login form validation error",
    desc: "Email validation not working properly on login form",
    project: "E-commerce Platform",
    due: "Jan 15,2025",
    status: "Active",
    priority: "High",
  },
  {
    id: 2,
    title: "Login form validation error",
    desc: "Email validation not working properly on login form",
    project: "E-commerce Platform",
    due: "Jan 15,2025",
    status: "Active",
    priority: "High",
  },
];

const BugTracking: React.FC = () => (
  <div className="p-4" style={{ background: "#F7F3FF", minHeight: "100vh" }}>
    <div className="container" style={{ maxWidth: 900 }}>
      <h3 className="mb-3">Bug Tracking</h3>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary">+ Add Bug</button>
      </div>
      <BugList bugs={bugs} />
    </div>
  </div>
);

export default BugTracking;
