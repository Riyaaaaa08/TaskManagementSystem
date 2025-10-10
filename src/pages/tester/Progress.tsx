import React, { useMemo, useState } from "react";
import Sidebar from "../../components/tester/Sidebar";
import { Badge, Button, ProgressBar } from "react-bootstrap";

// Types matching originals
type ResolvedBug = {
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

type PendingBug = {
  id: number;
  title: string;
  description: string;
  reporter: string;
  date: string;
  assignee: string;
  environment: string;
  status: "Pending";
  priority: "High" | "Medium" | "Low";
  progress: number;
};

type InProgressBug = {
  id: number;
  title: string;
  description: string;
  reporter: string;
  date: string;
  assignedTo: string;
  environment: string;
  priority: "High" | "Medium" | "Low";
  progress: number;
  comments: number;
  // derive a unified status label for filtering
  status?: "In Progress";
};

type Unified =
  | (ResolvedBug & { source: "resolved" })
  | (PendingBug & { source: "pending" })
  | (InProgressBug & { source: "inprogress"; status: "In Progress" });

const priorityToVariant: Record<"High" | "Medium" | "Low", string> = {
  High: "danger",
  Medium: "warning",
  Low: "info",
};

const ProgressPage: React.FC = () => {
  // original data copied as-is from each page
  // Resolved
  const resolved: ResolvedBug[] = [
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
  ];

  // Pending
  const pending: PendingBug[] = [
    {
      id: 21,
      title: "Login form validation error",
      description: "Email validation not working properly on login form",
      reporter: "mike.tester",
      date: "Jan 15,2025",
      assignee: "mike.frontend",
      environment: "Production",
      status: "Pending",
      priority: "Medium",
      progress: 25,
    },
    {
      id: 22,
      title: "Login form validation error",
      description: "Email validation not working properly on login form",
      reporter: "mike.tester",
      date: "Jan 15,2025",
      assignee: "mike.frontend",
      environment: "Production",
      status: "Pending",
      priority: "High",
      progress: 60,
    },
  ];

  // In Progress (from “In Testing” page)
  const inprogress: InProgressBug[] = [
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
      status: "In Progress",
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
      status: "In Progress",
    },
  ];

  // search + filter state
  const [query, setQuery] = useState("");
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState<{
    resolved: boolean;
    pending: boolean;
    inprogress: boolean;
  }>({ resolved: true, pending: true, inprogress: true });

  // combine without altering each card’s UI
  const all: Unified[] = useMemo(() => {
    const r = resolved.map((b) => ({ ...b, source: "resolved" as const }));
    const p = pending.map((b) => ({ ...b, source: "pending" as const }));
    const i = inprogress.map((b) => ({ ...b, source: "inprogress" as const }));
    // simple concat; could sort if needed
    return [...i, ...p, ...r];
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return all.filter((b) => {
      // status filter switches
      if (b.source === "resolved" && !statusFilter.resolved) return false;
      if (b.source === "pending" && !statusFilter.pending) return false;
      if (b.source === "inprogress" && !statusFilter.inprogress) return false;

      if (!q) return true;

      // build searchable text across common fields
      const str = [
        b.title,
        b.description,
        "reporter" in b ? b.reporter : "",
        "assignee" in b ? (b as any).assignee : "",
        "assignedTo" in b ? (b as any).assignedTo : "",
        b.environment,
        b.date,
        "status" in b ? (b as any).status : "",
        b.priority,
      ]
        .join(" ")
        .toLowerCase();

      return str.includes(q);
    });
  }, [all, query, statusFilter]);

  return (
    <div className="container" style={{ paddingTop: 30 }}>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 p-4">
          {/* Header + search + filter */}
          <div className="d-flex align-items-center justify-content-between mb-3">
            <div>
              <h5 className="m-0">In Progress</h5>
              <small className="text-muted">Combined view of all bugs</small>
            </div>
            <div className="d-flex gap-2">
              <div className="input-group" style={{ minWidth: 360 }}>
                <span className="input-group-text">
                  <i className="bi bi-search" />
                </span>
                <input
                  className="form-control"
                  placeholder="Search bugs, tasks, projects..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button
                className="btn btn-outline-secondary"
                onClick={() => setFilterOpen((s) => !s)}
              >
                <i className="bi bi-funnel" /> Filter
              </button>
            </div>
          </div>

          {filterOpen ? (
            <div className="border rounded p-2 mb-3 d-flex align-items-center gap-3">
              <div className="form-check">
                <input
                  id="f-inprogress"
                  className="form-check-input"
                  type="checkbox"
                  checked={statusFilter.inprogress}
                  onChange={(e) =>
                    setStatusFilter((s) => ({
                      ...s,
                      inprogress: e.target.checked,
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="f-inprogress">
                  In Progress
                </label>
              </div>
              <div className="form-check">
                <input
                  id="f-pending"
                  className="form-check-input"
                  type="checkbox"
                  checked={statusFilter.pending}
                  onChange={(e) =>
                    setStatusFilter((s) => ({
                      ...s,
                      pending: e.target.checked,
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="f-pending">
                  Pending
                </label>
              </div>
              <div className="form-check">
                <input
                  id="f-resolved"
                  className="form-check-input"
                  type="checkbox"
                  checked={statusFilter.resolved}
                  onChange={(e) =>
                    setStatusFilter((s) => ({
                      ...s,
                      resolved: e.target.checked,
                    }))
                  }
                />
                <label className="form-check-label" htmlFor="f-resolved">
                  Resolved
                </label>
              </div>
              <button
                className="btn btn-sm btn-outline-secondary ms-auto"
                onClick={() =>
                  setStatusFilter({
                    resolved: true,
                    pending: true,
                    inprogress: true,
                  })
                }
              >
                Reset
              </button>
            </div>
          ) : null}

          {/* Render each item using its original card UI */}
          {filtered.map((bug, idx) => {
            if (bug.source === "inprogress") {
              // original InProgress card
              const b = bug as Extract<Unified, { source: "inprogress" }>;
              const getPriorityBadge = (p: "High" | "Medium" | "Low") =>
                p === "High"
                  ? "danger"
                  : p === "Medium"
                  ? "warning"
                  : "secondary";

              return (
                <div key={`ip-${b.id}-${idx}`} className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="d-flex justify-content-between">
                      <h5 className="card-title">{b.title}</h5>
                      <span
                        className={`badge bg-${getPriorityBadge(b.priority)}`}
                      >
                        {b.priority}
                      </span>
                    </div>
                    <p className="text-muted">{b.description}</p>

                    <div className="d-flex flex-wrap mb-3">
                      <small className="me-4">
                        <i className="bi bi-person"></i> Reported by:{" "}
                        {b.reporter}
                      </small>
                      <small className="me-4">
                        <i className="bi bi-calendar"></i> Reported: {b.date}
                      </small>
                      <small className="me-4">
                        <i className="bi bi-person-check"></i> Assigned to:{" "}
                        {b.assignedTo}
                      </small>
                      <small>
                        <i className="bi bi-gear"></i> Environment:{" "}
                        {b.environment}
                      </small>
                    </div>

                    <div className="progress mb-3" style={{ height: "8px" }}>
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: `${b.progress}%` }}
                        aria-valuenow={b.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <select className="form-select form-select-sm d-inline w-auto me-2">
                          <option>Open</option>
                          <option>In Progress</option>
                          <option>Resolved</option>
                        </select>
                        <button className="btn btn-sm btn-outline-secondary">
                          {b.comments} comments
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
              );
            }

            if (bug.source === "pending") {
              // original Pending card
              const b = bug as Extract<Unified, { source: "pending" }>;
              return (
                <div
                  key={`p-${b.id}-${idx}`}
                  className="bg-white rounded shadow-sm p-3 mb-3"
                >
                  <div className="d-flex align-items-center mb-2">
                    <i className="bi bi-bug-fill me-2" />
                    <span className="fw-semibold">{b.title}</span>
                    <Badge
                      bg={priorityToVariant[b.priority]}
                      className="ms-auto me-2"
                    >
                      {b.priority}
                    </Badge>
                    <div style={{ width: 90 }}>
                      <ProgressBar now={b.progress} />
                    </div>
                  </div>

                  <div className="text-muted" style={{ fontSize: 14 }}>
                    {b.description}
                  </div>

                  <div className="row row-cols-1 row-cols-md-3 g-2 mt-2 small">
                    <div>
                      <div className="text-muted">
                        <i className="bi bi-person-badge me-2" />
                        Reported by:{" "}
                        <span className="fw-semibold">{b.reporter}</span>
                      </div>
                      <div className="text-muted">
                        <i className="bi bi-calendar-event me-2" />
                        Reported: {b.date}
                      </div>
                    </div>
                    <div>
                      <div className="text-muted">
                        <i className="bi bi-person-workspace me-2" />
                        Assigned to:{" "}
                        <span className="fw-semibold">{b.assignee}</span>
                      </div>
                      <div className="text-muted">
                        <i className="bi bi-cpu me-2" />
                        Environment: {b.environment}
                      </div>
                    </div>
                    <div className="d-flex align-items-start justify-content-md-end">
                      <Badge bg="secondary" className="me-2">
                        {b.status}
                      </Badge>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mt-3 gap-2">
                    <button className="btn btn-sm btn-outline-secondary">
                      1 comments
                    </button>
                    <div className="ms-auto d-flex align-items-center gap-3 text-muted">
                      <i className="bi bi-pencil" role="button" />
                      <i className="bi bi-three-dots-vertical" role="button" />
                    </div>
                  </div>
                </div>
              );
            }

            // resolved card
            const b = bug as Extract<Unified, { source: "resolved" }>;
            return (
              <div
                key={`r-${b.id}-${idx}`}
                className="bg-white rounded shadow-sm p-3 mb-3"
              >
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
                      Reported by:{" "}
                      <span className="fw-semibold">{b.reporter}</span>
                    </div>
                    <div className="text-muted">
                      <i className="bi bi-calendar-event me-2" />
                      Reported: {b.date}
                    </div>
                  </div>
                  <div>
                    <div className="text-muted">
                      <i className="bi bi-person-workspace me-2" />
                      Assigned to:{" "}
                      <span className="fw-semibold">{b.assignee}</span>
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
                  <button className="btn btn-sm btn-outline-secondary">
                    1 comments
                  </button>
                  <div className="ms-auto d-flex align-items-center gap-3 text-muted">
                    <i className="bi bi-pencil" role="button" />
                    <i className="bi bi-three-dots-vertical" role="button" />
                  </div>
                </div>
              </div>
            );
          })}

          <div className="text-end">
            <button className="btn btn-primary">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;
