import React from "react";
import Header from "../../components/tester/Header";
import Sidebar from "../../components/tester/Sidebar";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const MyProjects: React.FC = () => {
  return (
    <div className="app">
      <Sidebar role="developer" userName="John Doe" userInitials="JD" />
      {/* Main Content */}
      <div className="main-content">
        <Header />

        <div className="dashboard-container">
          {/* Active Projects */}
          <section className="card">
            <h2 className="section-title">Active Projects</h2>
            <div className="active-project-box">
              <div className="active-count">1</div>
            </div>
          </section>

          {/* Current Project */}
          <section className="card">
            <div className="project-header">
              <h3 className="project-title">E-commerce App</h3>
              <span className="project-status">Status</span>
            </div>

            <div className="task-box">
              <h4 className="task-title">My Task</h4>
              <p className="task-subtitle">Implement UI</p>
              <p className="task-desc">Design and integrate the app UI</p>
              <button className="btn-status">In Progress</button>
              <button className="btn-view">View</button>
            </div>
          </section>

          {/* All Projects Table */}
          <section className="card">
            <h2 className="section-title">All Projects</h2>
            <table className="project-table">
              <thead>
                <tr>
                  <th>PROJECT</th>
                  <th>LEADER</th>
                  <th>TEAM</th>
                  <th>PROGRESS</th>
                  <th>DUE DATE</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="project-info">
                      <span className="project-icon">
                        <FaCartShopping />
                      </span>
                      <div>
                        <div className="fw-bold">E-commerce Platform</div>
                        <div className="text-muted">#PRJ-001</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>Gauri More</div>
                    <div className="text-muted">gauri@gmail.com</div>
                  </td>
                  <td>
                    <div className="team-avatars">
                      <img src="https://i.pravatar.cc/30?img=1" alt="team" />
                      <img src="https://i.pravatar.cc/30?img=2" alt="team" />
                      <img src="https://i.pravatar.cc/30?img=3" alt="team" />
                      <span className="team-more">+3</span>
                    </div>
                  </td>
                  <td>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: "100%" }}
                      />
                    </div>
                    100%
                  </td>
                  <td>Sept 13, 2025</td>
                  <td>
                    <span className="status finished">Finished</span>
                  </td>
                  <td>
                    <FaEdit />
                    <button className="btn-delete">
                      <MdDelete />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="project-info">
                      <span className="project-icon">
                        <FaMobileAlt />
                      </span>
                      <div>
                        <div className="fw-bold">Mobile App</div>
                        <div className="text-muted">Leader: User 2</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div>Riya Panchal</div>
                    <div className="text-muted">riya@gmail.com</div>
                  </td>
                  <td>
                    <div className="team-avatars">
                      <img src="https://i.pravatar.cc/30?img=4" alt="team" />
                      <img src="https://i.pravatar.cc/30?img=5" alt="team" />
                      <span className="team-more">+2</span>
                    </div>
                  </td>
                  <td>
                    <div className="progress-bar">
                      <div
                        className="progress-fill active"
                        style={{ width: "45%" }}
                      />
                    </div>
                    45%
                  </td>
                  <td>Sept 25, 2025</td>
                  <td>
                    <span className="status active">Active</span>
                  </td>
                  <td>
                    <FaEdit />
                    <button className="btn-delete">
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className="pagination">
              <button className="btn-page">Previous</button>
              <button className="btn-page">Next</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
