import React from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

// Chart data
const data = [
  { name: "E-commerce Platform", value: 40 },
  { name: "Mobile app development", value: 25 },
  { name: "Security Software", value: 15 },
  { name: "Informative website", value: 10 },
  { name: "Database Software", value: 10 },
];

// Match colors with your .dot classes (red, purple, blue, yellow, green)
const COLORS: string[] = [
  "#FF4C4C",
  "#9B59B6",
  "#3498DB",
  "#F1C40F",
  "#2ECC71",
];

const DeveloperDashboard: React.FC = () => {
  return (
    <div className="app">
      <Sidebar role="developer" userName="John Doe" userInitials="JD" />

      <div className="main-content">
        <Header />
        <div className="dashboard-container">
          {/* Current Project */}
          <section className="card">
            <h2 className="section-title">Current Project</h2>
            <div className="project-box">
              <div className="project-info">
                <div className="project-avatar">E</div>
                <div>
                  <h4 className="project-name">E-commerce Platform</h4>
                  <p className="project-leader">Project Leader: User 1</p>
                </div>
              </div>
              <div className="progress-section">
                <p>Progress: 75%</p>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: "75%" }}></div>
                </div>
                <span className="tasks-info">
                  13 tasks completed • 8 tasks remaining
                </span>
              </div>
            </div>
          </section>

          {/* My Task */}
          <section className="card">
            <h2 className="section-title">My Task</h2>
            <div className="task-box">
              <div>
                <h4>Implement Payment Gateway</h4>
                <p className="task-desc">
                  Integrate Stripe payment processing for the e-commerce
                  platform
                </p>
                <p className="task-meta">
                  <span> E-commerce Platform</span> •{" "}
                  <span> Due: Sep 5, 2025</span>
                </p>
              </div>
              <div className="task-actions">
                <span className="status active">Active</span>
                <button className="btn-submit">Submit</button>
              </div>
            </div>
          </section>

          <div className="grid-2">
            {/* My Contribution with Donut Chart */}
            <section className="card">
              <h2 className="section-title">My Contribution</h2>
              <div className="chart-container" style={{ height: "250px" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={data}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Keep your legend */}
              <ul className="legend">
                <li>
                  <span className="dot red"></span>E-commerce Platform
                </li>
                <li>
                  <span className="dot purple"></span>Mobile app development
                </li>
                <li>
                  <span className="dot blue"></span>Security Software
                </li>
                <li>
                  <span className="dot yellow"></span>Informative website
                </li>
                <li>
                  <span className="dot green"></span>Database Software
                </li>
              </ul>
            </section>

            {/* Comments */}
            <section className="card">
              <h2 className="section-title">Comments</h2>
              <div className="comment-list">
                <div className="comment-item">
                  <p>→ Change the UI and dropdown menu.</p>
                  <span className="comment-meta">Team Leader • 6:00pm</span>
                </div>
                <div className="comment-item">
                  <p>→ Change the UI and dropdown menu.</p>
                  <span className="comment-meta">Team Leader • 6:00pm</span>
                </div>
                <div className="comment-item">
                  <p>→ Change the UI and dropdown menu.</p>
                  <span className="comment-meta">Team Leader • 6:00pm</span>
                </div>
              </div>
            </section>
          </div>

          {/* Footer Button */}
          <div className="footer-btn">
            <button className="btn-next">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
