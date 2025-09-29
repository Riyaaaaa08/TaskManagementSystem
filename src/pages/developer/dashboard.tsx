import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../App.css";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const go = (to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname !== to) navigate(to);
  };

  return (
    <div className="app">
      {/* Sidebar */}
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
                <span className="dot"></span>
                <span>Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="/projects"
                onClick={go("/projects")}
                className={pathname.startsWith("/projects") ? "active" : ""}
              >
                <span className="dot" style={{ opacity: 0.6 }}></span>
                <span>My Projects</span>
              </a>
            </li>
            <li>
              <a
                href="/team"
                onClick={go("/team")}
                className={pathname.startsWith("/team") ? "active" : ""}
              >
                <span className="dot" style={{ opacity: 0.6 }}></span>
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
              <div className="role">Developer</div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="main">
        <header className="header">
          <div className="title">Developer</div>
          <div className="right">
            <div className="badge" />
            <div className="avatar">RP</div>
            <button className="btn">Logout</button>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <main className="content">
          {/* Current Project */}
          <section className="card">
            <div
              className="card-head"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span>Current Project</span>
              <button
                className="btn-primary"
                onClick={() => navigate("/create-task")}
              >
                Create Task
              </button>
            </div>
            <div className="card-body">
              <div className="project">
                <div className="icon">
                  <div className="box"></div>
                </div>
                <div className="meta">
                  <div className="title">E-commerce Platform</div>
                  <div className="leader">Project Leader: User 1</div>
                  <div className="progress">
                    <div className="track">
                      <div className="bar"></div>
                    </div>
                    <div className="info">
                      <span>13 tasks completed</span>
                      <span>8 tasks remaining</span>
                    </div>
                  </div>
                </div>
                <div className="percent">Progress: 75%</div>
              </div>
            </div>
          </section>

          {/* My Task */}
          <section className="card">
            <div className="card-head">My Task</div>
            <div className="card-body">
              <div className="task-grid">
                <div className="task-left">
                  <input className="checkbox" type="checkbox" />
                  <div>
                    <div className="task-title">Implement Payment Gateway</div>
                    <div className="task-desc">
                      Integrate Stripe payment processing for the e-commerce
                      platform
                    </div>
                    <div className="task-meta">
                      <span>• E-commerce Platform</span>
                      <span>Due: Sep 5, 2025</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="pill">Active</span>
                </div>
                <div style={{ textAlign: "right" }}>
                  <button className="btn-primary">Submit</button>
                </div>
              </div>
            </div>
          </section>

          {/* Lower grid */}
          <section className="grid-12">
            <div className="col-7 card scrollable">
              <div className="card-head">My Contribution</div>
              <div
                className="card-body"
                style={{ display: "flex", gap: "32px" }}
              >
                <div className="legend">
                  <span>E-commerce Platform</span>
                  <span>Mobile app development</span>
                  <span>Security software</span>
                  <span>Database software</span>
                  <span>Informative website</span>
                </div>
                <div className="donut">
                  <div className="ring"></div>
                  <div className="hole"></div>
                </div>
              </div>
            </div>

            <div className="col-5 card scrollable">
              <div className="card-head">Comments</div>
              <div className="card-body">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="comment">
                    <div className="text">
                      → Change the ui and dropdown menu.
                    </div>
                    <div className="meta">
                      <span>Team Leader</span>
                      <span>6.00pm</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button
              className="btn-primary"
              onClick={() => navigate("/projects")}
            >
              Next
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
