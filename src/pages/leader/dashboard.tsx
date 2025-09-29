import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../App.css";

const LeaderDashboard: React.FC = () => {
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
                href="/leader"
                onClick={go("/leader")}
                className={pathname === "/leader" ? "active" : ""}
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
                <span>Teams</span>
              </a>
            </li>
            <li>
              <a
                href="/create-task"
                onClick={go("/create-task")}
                className={pathname.startsWith("/create-task") ? "active" : ""}
              >
                <span className="dot" />
                <span>Create Task</span>
              </a>
            </li>
            <li>
              <a
                href="/reports"
                onClick={go("/reports")}
                className={pathname.startsWith("/reports") ? "active" : ""}
              >
                <span className="dot" />
                <span>Reports</span>
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
          <div className="title">Leader</div>
          <div className="right">
            <div className="badge" />
            <div className="avatar">RP</div>
            <button className="btn">Logout</button>
          </div>
        </header>

        <main className="content">
          {/* Current Project */}
          <section className="card">
            <div className="card-head">Current Project</div>
            <div className="card-body">
              <div className="project">
                <div className="icon">
                  <div className="box" />
                </div>
                <div className="meta">
                  <div className="title">E-commerce Platform</div>
                  <div className="leader">Project Leader: User 1</div>
                  <div className="progress">
                    <div className="track">
                      <div className="bar" />
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

          <section className="grid-12">
            <div className="col-7 card">
              <div className="card-head">Task-List</div>

              {/* header tags */}
              <div className="tasklist-head">
                <span className="pill-ghost">Task</span>
                <span className="pill-ghost">Status</span>
                <span className="pill-ghost">Progress</span>
                <span className="pill-ghost">Due Date</span>
              </div>

              {/* rows */}
              <div className="tasklist-rows">
                <div className="trow">
                  <div>Task 1</div>
                  <div>
                    <span className="status-chip status-active">Active</span>
                  </div>
                  <div className="tprogress">
                    <div className="bar-track tiny">
                      <div className="bar-fill done" style={{ width: "75%" }} />
                    </div>
                    <span>75%</span>
                  </div>
                  <div>12 October, 2025</div>
                </div>

                <div className="trow">
                  <div>Task 2</div>
                  <div>
                    <span className="status-chip status-progress">
                      In Progress
                    </span>
                  </div>
                  <div className="tprogress">
                    <div className="bar-track tiny">
                      <div className="bar-fill warn" style={{ width: "40%" }} />
                    </div>
                    <span>40%</span>
                  </div>
                  <div>14 October, 2025</div>
                </div>

                <div className="trow">
                  <div>Task 3</div>
                  <div>
                    <span className="status-chip status-review">In Review</span>
                  </div>
                  <div className="tprogress">
                    <div className="bar-track tiny">
                      <div className="bar-fill" style={{ width: "50%" }} />
                    </div>
                    <span>50%</span>
                  </div>
                  <div>20 October, 2025</div>
                </div>

                <div className="trow">
                  <div>Task 4</div>
                  <div>
                    <span className="status-chip status-pending">Pending</span>
                  </div>
                  <div className="tprogress">
                    <div className="bar-track tiny">
                      <div
                        className="bar-fill danger"
                        style={{ width: "60%" }}
                      />
                    </div>
                    <span>60%</span>
                  </div>
                  <div>16 October, 2025</div>
                </div>
              </div>
            </div>

            {/* Donut placeholder */}
            <div className="col-5 card">
              <div className="card-head">Contribution</div>
              <div
                className="card-body"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: 360,
                }}
              >
                <div className="donut lg">
                  <div className="ring" />
                  <div className="hole" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default LeaderDashboard;
