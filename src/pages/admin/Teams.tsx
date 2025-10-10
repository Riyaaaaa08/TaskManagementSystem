import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminHeader from "../../components/admin/AdminHeader";
import AdminSidebar from "../../components/admin/AdminSidebar";
import TeamHeader from "../../components/admin/TeamHeader";
import TeamLeaderCard from "../../components/admin/TeamLeaderCard";
import EmployeeRow from "../../components/admin/EmployeeRow";
import Pagination from "../../components/admin/Pagination";
import CreateTeamCard from "../../components/admin/CreateTeamCard";
import "./Teams.css";

const Teams: React.FC = () => {
  const navigate = useNavigate();

  const [showCreate, setShowCreate] = useState(false);

  const [leaders, setLeaders] = useState([
    {
      name: "Riya Panchal",
      email: "riya@gmail.com",
      initials: "RP",
      color: undefined,
    },
    {
      name: "Riya Panchal",
      email: "riya@gmail.com",
      initials: "RP",
      color: "blue",
    },
    {
      name: "Riya Panchal",
      email: "riya@gmail.com",
      initials: "RP",
      color: "teal",
    },
  ]);

  const [employees, setEmployees] = useState<Employee[]>([
    {
      name: "User1",
      project: "Project1",
      email: "user1@gmail.com",
      role: "Developer",
      statusColor: "green",
    },
    {
      name: "User2",
      project: "Project2",
      email: "user2@gmail.com",
      role: "Tester",
      statusColor: "red",
    },
    {
      name: "User3",
      project: "Project3",
      email: "user3@gmail.com",
      role: "Developer",
      statusColor: "green",
    },
    {
      name: "User4",
      project: "Project4",
      email: "user4@gmail.com",
      role: "Tester",
      statusColor: "red",
    },
  ]);

  const handleCreate = (data: {
    teamName: string;
    members: NewMember[];
    leaderEmail: string;
  }) => {
    const mapped: Employee[] = data.members.map((m) => ({
      name: m.name,
      project: data.teamName || "—",
      email: m.email,
      role: m.role,
      statusColor: m.role === "Developer" ? "green" : "red",
    }));
    setEmployees((prev) => [...mapped, ...prev]);

    const leaderMember =
      data.members.find((m) => m.email === data.leaderEmail) || data.members[0];
    if (leaderMember) {
      const initials = leaderMember.name
        .split(" ")
        .map((p) => p[0])
        .join("")
        .slice(0, 2)
        .toUpperCase();

      setLeaders((prev) => [
        {
          name: leaderMember.name,
          email: leaderMember.email,
          initials,
          color: "purple",
        },
        ...prev.slice(0, 2),
      ]);
    }

    setShowCreate(false);
  };

  return (
    <div className="tm-teams-page">
      <div className="tm-teams-container">
        <AdminSidebar />
        <div className="tm-teams-main">
          <AdminHeader />
          <div className="tm-teams-content">
            <div className="tm-teams-topbar">
              <h2 className="tm-teams-title">Teams</h2>
              <div className="tm-teams-actions">
                <button
                  className="tm-btn tm-btn-secondary"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/projects");
                  }}
                  aria-label="Go to Projects"
                >
                  Projects
                </button>
                <button
                  className="tm-btn tm-btn-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate("/admin/teams/create");
                    setShowCreate((s) => !s);
                  }}
                  aria-label="Create New Team"
                >
                  + New Team
                </button>
              </div>
            </div>

            {showCreate ? (
              <CreateTeamCard
                onCancel={() => setShowCreate(false)}
                onCreate={handleCreate}
              />
            ) : null}

            <section className="tm-card tm-block">
              <TeamHeader title="Team Members" subtitle="" />
              <div className="tm-leaders-row">
                {leaders.map((l, idx) => (
                  <TeamLeaderCard key={idx} {...l} />
                ))}
              </div>
            </section>

            <section className="tm-card tm-block">
              <TeamHeader
                title="Employees"
                subtitle="All team members in the organization"
              />
              <div className="tm-table">
                <div className="tm-thead">
                  <div className="tm-th tm-col-name">Name</div>
                  <div className="tm-th tm-col-project">Project</div>
                  <div className="tm-th tm-col-email">Email</div>
                  <div className="tm-th tm-col-role">Role</div>
                </div>
                <div className="tm-tbody">
                  {employees.map((e, idx) => (
                    <EmployeeRow key={idx} {...e} />
                  ))}
                </div>
              </div>

              <div className="tm-pagination-wrap">
                <Pagination
                  page={1}
                  totalPages={2}
                  onPrev={() => {}}
                  onNext={() => {}}
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
