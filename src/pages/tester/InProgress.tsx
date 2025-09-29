import React from "react";
import Sidebar from "../../components/Sidebar"; // 

const InProgress: React.FC = () => {
  const bugs = [
    {
      id: 1,
      title: "Login form validation error",
      description: "Email validation not working properly on login form",
      reporter: "mike.tester",
      date: "Jan 15, 2025",
      assignedTo: "mike.frontend",
      environment: "Production",
      priority: "High",
      progress: 75,
      comments: 1,
    },
    {
      id: 2,
      title: "Login form validation error",
      description: "Email validation not working properly on login form",
      reporter: "mike.tester",
      date: "Jan 15, 2025",
      assignedTo: "mike.frontend",
      environment: "Production",
      priority: "Medium",
      progress: 35,
      comments: 1,
    },
  ];

  const getPriorityBadge = (priority: string) => {
    if (priority === "High") return "danger";
    if (priority === "Medium") return "warning";
    return "secondary";
  };

  return (
    <div className="container" style={{ paddingTop: 30 }}>
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow-1 p-4">
       

        <div className="mb-4">
          <h5>In Testing</h5>
          <small className="text-muted">Bugs in testing</small>
        </div>

        {/* Bug Cards */}
        {bugs.map((bug) => (
          <div key={bug.id} className="card mb-4 shadow-sm">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{bug.title}</h5>
                <span className={`badge bg-${getPriorityBadge(bug.priority)}`}>
                  {bug.priority}
                </span>
              </div>
              <p className="text-muted">{bug.description}</p>

              <div className="d-flex flex-wrap mb-3">
                <small className="me-4">
                  <i className="bi bi-person"></i> Reported by: {bug.reporter}
                </small>
                <small className="me-4">
                  <i className="bi bi-calendar"></i> Reported: {bug.date}
                </small>
                <small className="me-4">
                  <i className="bi bi-person-check"></i> Assigned to:{" "}
                  {bug.assignedTo}
                </small>
                <small>
                  <i className="bi bi-gear"></i> Environment: {bug.environment}
                </small>
              </div>

              {/* Progress bar */}
              <div className="progress mb-3" style={{ height: "8px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${bug.progress}%` }}
                  aria-valuenow={bug.progress}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>

              {/* Actions */}
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <select className="form-select form-select-sm d-inline w-auto me-2">
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                  </select>
                  <button className="btn btn-sm btn-outline-secondary">
                    {bug.comments} comments
                  </button>
                </div>
                <div>
                  <button className="btn btn-sm btn-outline-primary me-2">
                    <i className="bi bi-pencil"></i>
                  </button>
                  <button className="btn btn-sm btn-outline-danger">
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="text-end">
          <button className="btn btn-primary">Next</button>
        </div>
      </div>
    </div>
    </div>

  );
};

export default InProgress;
