// src/pages/Projects.tsx
import React, { useState } from "react";
import Sidebar from "../../components/admin/AdminSidebar";
import Header from "../../components/admin/AdminHeader";
import ProgressBar from "../../components/admin/ProgressBar";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import ModalCard from "../../components/admin/ModalCard";
import CreateProjectForm from "../admin/CreateProjectForm";

type TeamMember = { id: number; name: string; avatarColor: string };
type Project = {
  id: string;
  name: string;
  code: string;
  iconBg: string;
  iconEmoji: string;
  leaderName: string;
  leaderEmail: string;
  team: TeamMember[];
  progress: number;
  dueDate: string;
  status: "Active" | "Paused" | "Completed";
};

const initialProjects: Project[] = [
  {
    id: "1",
    name: "E-commerce Platform",
    code: "#PRJ-001",
    iconBg: "#ECEBFF",
    iconEmoji: "🛒",
    leaderName: "User 1",
    leaderEmail: "user1@gmail.com",
    team: [
      { id: 1, name: "A", avatarColor: "#6D83F2" },
      { id: 2, name: "B", avatarColor: "#F29D38" },
      { id: 3, name: "C", avatarColor: "#5ECBA1" }
    ],
    progress: 75,
    dueDate: "Sept 13, 2025",
    status: "Active"
  },
  {
    id: "2",
    name: "Mobile App",
    code: "",
    iconBg: "#FFE7D6",
    iconEmoji: "📱",
    leaderName: "User 2",
    leaderEmail: "user2@gmail.com",
    team: [
      { id: 4, name: "D", avatarColor: "#6D83F2" },
      { id: 5, name: "E", avatarColor: "#F29D38" },
      { id: 6, name: "F", avatarColor: "#5ECBA1" }
    ],
    progress: 45,
    dueDate: "Sept 25, 2025",
    status: "Active"
  }
];

const Projects: React.FC = () => {
  // Source of truth for the table
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [openCreate, setOpenCreate] = useState(false);

  const activeCount = projects.filter(p => p.status === "Active").length;

  // Data shape expected from CreateProjectForm
  type FormPayload = {
    name: string;
    code: string;
    leader: string;
    status: string;
    start: string;
    due: string;
    description: string;
    members: number[];
  };

  const toPrettyDate = (iso: string) => {
    if (!iso) return "";
    const d = new Date(iso);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  };

  const handleCreate = (data: FormPayload) => {
    const newProject: Project = {
      id: crypto.randomUUID(),
      name: data.name,
      code: data.code || "",
      iconBg: "#ECEBFF",
      iconEmoji: "🗂️",
      leaderName: data.leader || "Unassigned",
      leaderEmail:
        (data.leader
          ? data.leader.toLowerCase().replace(/\s+/g, "")
          : "user") + "@gmail.com",
      team: (data.members || []).map((id, i) => ({
        id,
        name: String.fromCharCode(65 + (i % 26)), // A, B, C...
        avatarColor: ["#6D83F2", "#F29D38", "#5ECBA1"][i % 3]
      })),
      progress: 0,
      dueDate: toPrettyDate(data.due),
      status:
        (["Active", "Paused", "Completed"].includes(data.status)
          ? (data.status as Project["status"])
          : "Active")
    };

    // Immutable append -> triggers re-render
    setProjects(prev => [...prev, newProject]); // updating arrays in state [web:36]

    setOpenCreate(false);
  };

  return (
    <div className="app-shell">
      <Sidebar />
      <div className="admin-app-main">
        <Header />
        <div className="header-spacer" />

        <div className="page projects-page">
          <div className="projects-canvas">
            {/* Page header */}
            <div className="page-header-row">
              <h1 className="page-title">Projects</h1>
              <div className="page-header-actions">
                <button className="btn-primary" onClick={() => setOpenCreate(true)}>
                  + New Project
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="stats-row">
              <div className="stat-card">
                <div className="stat-icon" aria-hidden>🟠</div>
                <div className="stat-content">
                  <div className="stat-title">Active Projects</div>
                  <div className="stat-value">{activeCount}</div>
                </div>
              </div>
            </div>

            {/* Projects table */}
            <div className="card block">
              <div className="block-title">All Projects</div>

              <div className="table">
                <div className="table-header">
                  <div className="th th-project">Project</div>
                  <div className="th th-leader">Project Leader</div>
                  <div className="th th-team">Team</div>
                  <div className="th th-progress">Progress</div>
                  <div className="th th-date">Due Date</div>
                  <div className="th th-status">Status</div>
                  <div className="th th-actions">Actions</div>
                </div>

                <div className="table-body">
                  {projects.map(p => (
                    <div className="tr" key={p.id}>
                      <div className="td th-project" data-label="Project">
                        <div className="project-cell">
                          <div className="project-icon" style={{ background: p.iconBg }} aria-hidden>
                            {p.iconEmoji}
                          </div>
                          <div className="project-meta">
                            <div className="project-name">{p.name}</div>
                            <div className="project-subtle">
                              {p.code ? p.code : "Project Leader: " + p.leaderName}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="td th-leader" data-label="Project Leader">
                        <div className="leader-cell">
                          <div className="leader-name">{p.leaderName}</div>
                          <div className="leader-email">{p.leaderEmail}</div>
                        </div>
                      </div>

                      <div className="td th-team" data-label="Team">
                        <div className="team-avatars">
                          {p.team.slice(0, 3).map((m, idx) => (
                            <div
                              className="avatar"
                              key={m.id}
                              title={m.name}
                              style={{ background: m.avatarColor, zIndex: 5 - idx }}
                            >
                              {m.name}
                            </div>
                          ))}
                          {p.team.length > 3 && <div className="avatar more">+{p.team.length - 3}</div>}
                        </div>
                      </div>

                      <div className="td th-progress" data-label="Progress">
                        <div className="progress-cell">
                          <span className="progress-value">{p.progress}%</span>
                          <ProgressBar
                            value={p.progress}
                            barColor={p.progress >= 60 ? "#5A67F2" : "#F29D38"}
                            trackColor="#E9E9EE"
                            height={8}
                            rounded
                            ariaLabel={`Progress ${p.progress}%`}
                          />
                        </div>
                      </div>

                      <div className="td th-date" data-label="Due Date">{p.dueDate}</div>

                      <div className="td th-status" data-label="Status">
                        <span className={`badge badge-${p.status.toLowerCase()}`}>{p.status}</span>
                      </div>

                      <div className="td th-actions" data-label="Actions">
                        <button className="icon-btn" aria-label="Edit project"><FiEdit2 /></button>
                        <button className="icon-btn danger" aria-label="Delete project"><FiTrash2 /></button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="table-footer">
                  <div className="table-foot-note">Showing {projects.length} working projects</div>
                  <div className="pager">
                    <button className="btn-outline small">Previous</button>
                    <button className="btn-primary small">Next</button>
                  </div>
                </div>
              </div>
            </div>
          </div>{/* projects-canvas */}
        </div>{/* page */}

        {/* Create Project Modal */}
        <ModalCard open={openCreate} onClose={() => setOpenCreate(false)} title="Create Project" width={1100}>
          <CreateProjectForm onCancel={() => setOpenCreate(false)} onCreate={handleCreate} />
        </ModalCard>
      </div>
    </div>
  );
};

export default Projects;
