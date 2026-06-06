import React from "react";
import "../../App.css";

const LeaderMyteam: React.FC = () => {
  const teamData = [
    {
      member: "Me",
      role: "Developer",
      email: "user1@gmail.com",
      progress: 75,
      status: "Active",
      task: "Task 1",
    },
    {
      member: "User2",
      role: "Tester",
      email: "user2@gmail.com",
      progress: 40,
      status: "Active",
      task: "Task 2",
    },
    {
      member: "User3",
      role: "Developer",
      email: "user3@gmail.com",
      progress: 50,
      status: "Active",
      task: "Task 3",
    },
    {
      member: "User4",
      role: "Tester",
      email: "user4@gmail.com",
      progress: 60,
      status: "Active",
      task: "Task 4",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Current Project Card */}
      <section className="card current-project-card mb-4">
        <h2 className="section-title">Current Project</h2>
        <p className="project-name">Mobile App</p>
      </section>

      {/* Team Table */}
      <section className="card">
        <h2 className="section-title mb-3">Team Members</h2>
        <div className="table-responsive">
          <table className="team-table">
            <thead>
              <tr>
                <th>MEMBERS</th>
                <th>ROLE</th>
                <th>EMAIL</th>
                <th>PROGRESS</th>
                <th>STATUS</th>
                <th>TASK</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((member, index) => (
                <tr key={index}>
                  <td>{member.member}</td>
                  <td>
                    <span
                      className={`role-badge ${
                        member.role === "Developer" ? "developer" : "tester"
                      }`}
                    >
                      {member.role}
                    </span>
                  </td>
                  <td>{member.email}</td>
                  <td>
                    <div className="progress-bar">
                      <div
                        className={`progress-fill ${
                          member.progress >= 70
                            ? "progress-high"
                            : member.progress >= 50
                            ? "progress-mid"
                            : "progress-low"
                        }`}
                        style={{ width: `${member.progress}%` }}
                      >
                        {member.progress}%
                      </div>
                    </div>
                  </td>
                  <td>
                    <span className="status-badge active">{member.status}</span>
                  </td>
                  <td>{member.task}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default LeaderMyteam;
