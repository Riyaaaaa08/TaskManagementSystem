import React from "react";
import Sidebar from "../../components/tester/Sidebar";
import Header from "../../components/tester/Header";
import "../../App.css";

const LeaderProject: React.FC = () => (
  <div className="app">
    <Sidebar role="leader" userName="Gauri More" userInitials="GM" />
    <div className="main-content">
      <Header />
      <div className="dashboard-container">
        {/* Active Projects */}
        <section className="card">
          <div className="card-row">
            <div className="icon-badge">
              <span className="badge-dot" />
            </div>
            <div>
              <div className="section-title">Active Projects</div>
              <div className="big-number">2</div>
            </div>
          </div>
        </section>

        {/* All Projects Table */}
        <section className="card">
          <h2 className="section-title">All Projects</h2>
          <div className="table-head">
            <span>PROJECT</span>
            <span>LEADER</span>
            <span>TEAM</span>
            <span>PROGRESS</span>
            <span>DUE DATE</span>
            <span>STATUS</span>
            <span>ACTIONS</span>
          </div>
          <div className="table-body">
            <div className="table-row">
              <div className="cell project-cell">
                <div className="project-icon project-icon-orange">
                  <span className="emoji">🛒</span>
                </div>
                <div className="project-meta">
                  <div className="fw-bold">E-commerce Platform</div>
                  <div className="text-muted">#PRJ-001</div>
                </div>
              </div>
              <div className="cell leader-cell">
                <div>Gauri More</div>
                <div className="text-muted">gauri@gmail.com</div>
              </div>
              <div className="cell">
                <div className="team-avatars">
                  <img src="https://i.pravatar.cc/30?img=1" alt="member" />
                  <img src="https://i.pravatar.cc/30?img=2" alt="member" />
                  <img src="https://i.pravatar.cc/30?img=3" alt="member" />
                  <span className="team-more">+3</span>
                </div>
              </div>
              <div className="cell">
                <div className="progress-bar">
                  <div
                    className="progress-fill purple"
                    style={{ width: "75%" }}
                  />
                </div>
                <span className="progress-text">75%</span>
              </div>
              <div className="cell">Sept 13, 2025</div>
              <div className="cell">
                <span className="status active">Active</span>
              </div>
              <div className="cell actions">
                <button className="btn-icon" aria-label="Edit">
                  ✏️
                </button>
                <button className="btn-icon danger" aria-label="Delete">
                  🗑
                </button>
              </div>
            </div>
            <div className="table-row">
              <div className="cell project-cell">
                <div className="project-icon project-icon-peach">
                  <span className="emoji">📱</span>
                </div>
                <div className="project-meta">
                  <div className="fw-bold">Mobile App</div>
                  <div className="text-muted">Project Leader: User 2</div>
                </div>
              </div>
              <div className="cell leader-cell">
                <div>Riya Panchal</div>
                <div className="text-muted">riya@gmail.com</div>
              </div>
              <div className="cell">
                <div className="team-avatars">
                  <img src="https://i.pravatar.cc/30?img=4" alt="member" />
                  <img src="https://i.pravatar.cc/30?img=5" alt="member" />
                  <img src="https://i.pravatar.cc/30?img=6" alt="member" />
                  <span className="team-more">+3</span>
                </div>
              </div>
              <div className="cell">
                <div className="progress-bar">
                  <div
                    className="progress-fill orange"
                    style={{ width: "45%" }}
                  />
                </div>
                <span className="progress-text">45%</span>
              </div>
              <div className="cell">Sept 25, 2025</div>
              <div className="cell">
                <span className="status active">Active</span>
              </div>
              <div className="cell actions">
                <button className="btn-icon" aria-label="Edit">
                  ✏️
                </button>
                <button className="btn-icon danger" aria-label="Delete">
                  🗑
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Tasks summary + Pagination */}
        <section className="card">
          <h2 className="section-title">Tasks</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon lavender">
                <span className="badge-dot" />
              </div>
              <div>
                <div className="text-muted small">Total Tasks</div>
                <div className="stat-value">36</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon blue">
                <span className="badge-dot" />
              </div>
              <div>
                <div className="text-muted small">Pending Tasks</div>
                <div className="stat-value">12</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon green">
                <span className="badge-dot" />
              </div>
              <div>
                <div className="text-muted small">Completed</div>
                <div className="stat-value">20</div>
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-icon red">
                <span className="badge-dot" />
              </div>
              <div>
                <div className="text-muted small">Overdue</div>
                <div className="stat-value">4</div>
              </div>
            </div>
          </div>
          <div className="pagination right">
            <button className="btn-page ghost">Previous</button>
            <button className="btn-page primary">Next</button>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default LeaderProject;
