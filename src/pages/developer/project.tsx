import React from "react";
import "../../App.css";
import { useNavigate, useLocation } from "react-router-dom";

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== to) navigate(to);
  };

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="logo">
            <div className="sq"></div>
            <div className="c1"></div>
            <div className="c2"></div>
            <div className="title">TASK MANAGER</div>
          </div>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a
                href="/"
                onClick={go("/")}
                className={pathname === "/" ? "active" : ""}
              >
                <span className="dot" />
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/projects"
                onClick={go("/projects")}
                className={pathname.startsWith("/projects") ? "active" : ""}
              >
                <span className="dot" />
                <span>My Projects</span>
              </a>
            </li>
            <li>
              <a
                href="/team"
                onClick={go("/team")}
                className={pathname.startsWith("/team") ? "active" : ""}
              >
                <span className="dot" style={{ opacity: 0.6 }} />
                <span>My Team</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="profile">
            <div className="photo">GM</div>
            <div>
              <div className="name">Gauri More</div>
              <div className="role">Leader</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="main">
        <header className="header">
          <div className="title">My Projects</div>
          <div className="right">
            <div className="badge" />
            <div className="avatar">RP</div>
            <button className="btn" onClick={() => navigate("/")}>
              Logout
            </button>
          </div>
        </header>

        <main className="content">
          {/* Active Projects counter */}
          <section className="card">
            <div
              className="card-body"
              style={{ display: "flex", alignItems: "center", gap: 16 }}
            >
              <div className="icon">
                <div className="box" />
              </div>
              <div style={{ flex: 1 }}>
                <div className="title" style={{ fontSize: 16 }}>
                  Active Projects
                </div>
                <div style={{ fontSize: 20, fontWeight: 700 }}>1</div>
              </div>
            </div>
          </section>

          {/* Current project and task status */}
          <section className="card">
            <div className="card-body" style={{ padding: 0 }}>
              <div className="project-row">
                <div className="project-left">
                  <div className="proj-badge">
                    <div className="proj-dot" />
                  </div>
                  <div>
                    <div className="proj-title">E-commerce App</div>
                    <div className="proj-sub">Current Project</div>
                  </div>
                </div>
                <div className="project-right">
                  <span className="status-chip status-blue">Status</span>
                </div>
              </div>

              <div className="divider" />

              <div className="task-row">
                <div className="task-row-left">
                  <div className="task-head">My Task</div>
                </div>
                <div className="task-row-right">
                  <span className="status-chip status-progress">
                    In Progress
                  </span>
                </div>
              </div>

              <div className="inner-task-body">
                <div className="task-line-title">Implement UI</div>
                <div className="task-line-sub">
                  Design and integrate the app ui
                </div>
              </div>

              <div className="proj-actions">
                <button className="btn-chip" onClick={go("/projects") as any}>
                  View
                </button>
              </div>
            </div>
          </section>

          {/* All Projects table-like list */}
          <section className="card">
            <div className="card-head">All Projects</div>

            {/* Header strip */}
            <div className="list-head">
              <span>PROJECT</span>
              <span>LEADER</span>
              <span>TEAM</span>
              <span>PROGRESS</span>
              <span>DUE DATE</span>
              <span>STATUS</span>
              <span>ACTIONS</span>
            </div>

            {/* Rows container scrollable if many */}
            <div className="rows scroll-y">
              {/* Row 1 */}
              <div className="row">
                <div className="cell project-cell">
                  <div className="proj-icon">
                    <div className="small-box" />
                  </div>
                  <div className="proj-info">
                    <div className="proj-name">E-commerce Platform</div>
                    <div className="proj-id">#PRJ-001</div>
                  </div>
                </div>

                <div className="cell leader-cell">
                  <div>Gauri More</div>
                  <div className="muted">gauri@gmail.com</div>
                </div>

                <div className="cell team-cell">
                  <div className="team-avatars">
                    <span className="av">A</span>
                    <span className="av">B</span>
                    <span className="av">C</span>
                    <span className="av small">+3</span>
                  </div>
                </div>

                <div className="cell progress-cell">
                  <div className="bar-track small">
                    <div className="bar-fill done" style={{ width: "100%" }} />
                  </div>
                  <div className="pct">100%</div>
                </div>

                <div className="cell">Sept 13, 2025</div>

                <div className="cell">
                  <span className="status-chip status-finished">Finished</span>
                </div>

                <div className="cell actions-cell">
                  <button
                    className="icon-btn edit"
                    title="Edit"
                    onClick={go("/projects")}
                  />
                  <button
                    className="icon-btn delete"
                    title="Delete"
                    onClick={go("/projects")}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="row">
                <div className="cell project-cell">
                  <div className="proj-icon peach">
                    <div className="small-box" />
                  </div>
                  <div className="proj-info">
                    <div className="proj-name">Mobile App</div>
                    <div className="proj-id">Project Leader: User 2</div>
                  </div>
                </div>

                <div className="cell leader-cell">
                  <div>Riya Panchal</div>
                  <div className="muted">riya@gmail.com</div>
                </div>

                <div className="cell team-cell">
                  <div className="team-avatars">
                    <span className="av">A</span>
                    <span className="av">B</span>
                    <span className="av">C</span>
                    <span className="av small">+3</span>
                  </div>
                </div>

                <div className="cell progress-cell">
                  <div className="bar-track small">
                    <div className="bar-fill w45" style={{ width: "45%" }} />
                  </div>
                  <div className="pct">45%</div>
                </div>

                <div className="cell">Sept 25, 2025</div>

                <div className="cell">
                  <span className="status-chip status-active">Active</span>
                </div>

                <div className="cell actions-cell">
                  <button
                    className="icon-btn edit"
                    title="Edit"
                    onClick={go("/projects")}
                  />
                  <button
                    className="icon-btn delete"
                    title="Delete"
                    onClick={go("/projects")}
                  />
                </div>
              </div>
            </div>

            {/* Footer controls */}
            <div className="table-footer">
              <button className="btn-secondary" onClick={go("/")}>
                Previous
              </button>
              <button className="btn-primary" onClick={go("/projects")}>
                Next
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Projects;
