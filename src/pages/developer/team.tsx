// src/pages/developer/Team.tsx
import React from "react";
import "../../App.css";
import { useNavigate, useLocation } from "react-router-dom";

const Team: React.FC = () => {
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
            <div className="sq" />
            <div className="c1" />
            <div className="c2" />
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
                <span className="dot" />
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
          <div className="title">My Team</div>
          <div className="right">
            <div className="badge" />
            <div className="avatar">RP</div>
            <button className="btn" onClick={() => navigate("/")}>
              Logout
            </button>
          </div>
        </header>

        <main className="content">
          {/* Current Project card */}
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
                  Current Project
                </div>
                <div className="muted">Mobile App</div>
              </div>
            </div>
          </section>

          {/* Team table */}
          <section className="card">
            <div className="card-head">Mobile App</div>

            <div className="list-head team-head">
              <span>MEMBERS</span>
              <span>ROLE</span>
              <span>EMAIL</span>
              <span>PROGRESS</span>
              <span>STATUS</span>
              <span>TASK</span>
            </div>

            <div className="rows">
              {/* Row 1 */}
              <div className="row team-row">
                <div className="cell">Me</div>
                <div className="cell">
                  <span className="chip role-dev">Developer</span>
                </div>
                <div className="cell">user1@gmail.com</div>
                <div className="cell">
                  <div className="bar-track tiny">
                    <div className="bar-fill done" style={{ width: "75%" }} />
                  </div>
                  <span className="pct-mini">75%</span>
                </div>
                <div className="cell">
                  <span className="status-chip status-active">Active</span>
                </div>
                <div className="cell">Task 1</div>
              </div>

              {/* Row 2 */}
              <div className="row team-row">
                <div className="cell">User2</div>
                <div className="cell">
                  <span className="chip role-test">Tester</span>
                </div>
                <div className="cell">user2@gmail.com</div>
                <div className="cell">
                  <div className="bar-track tiny">
                    <div className="bar-fill warn" style={{ width: "40%" }} />
                  </div>
                  <span className="pct-mini">40%</span>
                </div>
                <div className="cell">
                  <span className="status-chip status-active">Active</span>
                </div>
                <div className="cell">Task 2</div>
              </div>

              {/* Row 3 */}
              <div className="row team-row">
                <div className="cell">User3</div>
                <div className="cell">
                  <span className="chip role-dev">Developer</span>
                </div>
                <div className="cell">user3@gmail.com</div>
                <div className="cell">
                  <div className="bar-track tiny">
                    <div className="bar-fill" style={{ width: "50%" }} />
                  </div>
                  <span className="pct-mini">50%</span>
                </div>
                <div className="cell">
                  <span className="status-chip status-active">Active</span>
                </div>
                <div className="cell">Task 3</div>
              </div>

              {/* Row 4 */}
              <div className="row team-row">
                <div className="cell">User4</div>
                <div className="cell">
                  <span className="chip role-test">Tester</span>
                </div>
                <div className="cell">user4@gmail.com</div>
                <div className="cell">
                  <div className="bar-track tiny">
                    <div className="bar-fill danger" style={{ width: "60%" }} />
                  </div>
                  <span className="pct-mini">60%</span>
                </div>
                <div className="cell">
                  <span className="status-chip status-active">Active</span>
                </div>
                <div className="cell">Task 4</div>
              </div>
            </div>

            <div className="table-footer">
              <button className="btn-secondary" onClick={go("/projects")}>
                Previous
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Team;
