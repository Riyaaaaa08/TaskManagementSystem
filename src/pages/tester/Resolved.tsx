import React, { useState } from "react";
import { Badge, Button, Form } from "react-bootstrap";

type BugItem = {
  id: number;
  title: string;
  description: string;
  reporter: string;
  date: string;
  assignee: string;
  environment: string;
  status: "Resolved";
  priority: "High" | "Medium" | "Low";
};

const priorityToVariant: Record<BugItem["priority"], string> = {
  High: "danger",
  Medium: "warning",
  Low: "info",
};

const Resolved: React.FC = () => {
  const [bugs] = useState<BugItem[]>([
    {
      id: 1,
      title: "Login form validation error",
      description: "Email validation not working properly on login form",
      reporter: "mike.tester",
      date: "Jan 15,2025",
      assignee: "mike.frontend",
      environment: "Production",
      status: "Resolved",
      priority: "High",
    },
    {
      id: 2,
      title: "Login form validation error",
      description: "Email validation not working properly on login form",
      reporter: "mike.tester",
      date: "Jan 15,2025",
      assignee: "mike.frontend",
      environment: "Production",
      status: "Resolved",
      priority: "Medium",
    },
  ]);

  return (
    <div className="container" style={{ paddingTop: 30 }}>
    <div style={{ background: "#F7F3FF", minHeight: "100vh" }}>
      <div className="container py-4" style={{ maxWidth: 980 }}>
        <div className="d-flex align-items-center justify-content-between mb-3">
          <h4 className="fw-bold m-0">Resolved Bugs</h4>
          <div className="d-flex align-items-center gap-2">
            <Button size="sm" variant="outline-secondary">
              <i className="bi bi-bell" />
            </Button>
            <Button size="sm" variant="primary">
              Logout
            </Button>
          </div>
        </div>

        <div className="border-bottom pb-2 mb-3">
          <div className="fw-semibold">Bug Report</div>
          <div className="text-muted small">Resolved bugs</div>
        </div>

        {bugs.map((b, idx) => (
          <div key={b.id} className="bg-white rounded shadow-sm p-3 mb-3">
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-bug-fill me-2" />
              <span className="fw-semibold">{b.title}</span>
              <Badge bg="success" className="ms-auto me-2">
                {b.status}
              </Badge>
              <span className="text-muted small">#{b.id}</span>
            </div>

            <div className="text-muted" style={{ fontSize: 14 }}>
              {b.description}
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-2 mt-2 small">
              <div>
                <div className="text-muted">
                  <i className="bi bi-person-badge me-2" />
                  Reported by: <span className="fw-semibold">{b.reporter}</span>
                </div>
                <div className="text-muted">
                  <i className="bi bi-calendar-event me-2" />
                  Reported: {b.date}
                </div>
              </div>
              <div>
                <div className="text-muted">
                  <i className="bi bi-person-workspace me-2" />
                  Assigned to: <span className="fw-semibold">{b.assignee}</span>
                </div>
                <div className="text-muted">
                  <i className="bi bi-cpu me-2" />
                  Environment: {b.environment}
                </div>
              </div>
              <div className="d-flex align-items-start justify-content-md-end">
                <Badge bg={priorityToVariant[b.priority]} className="me-2">
                  {b.priority}
                </Badge>
              </div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <Button size="sm" variant="outline-secondary">
                1 comments
              </Button>
              <div className="ms-auto d-flex align-items-center gap-3 text-muted">
                <i className="bi bi-pencil" role="button" />
                <i className="bi bi-three-dots-vertical" role="button" />
              </div>
            </div>

            {idx === bugs.length - 1 ? (
              <div className="d-flex justify-content-end mt-3">
                <Button size="sm" style={{ borderRadius: 8 }} disabled>
                  Next
                </Button>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Resolved;
