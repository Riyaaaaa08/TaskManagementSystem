import React from "react";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  role: "tester" | "developer" | "leader";
  userName?: string;
  userInitials?: string;
}

// Tester menu
const testerNav = [
  { to: "/tester/dashboard", label: "Dashboard", icon: "fa-home" },
  { to: "/tester/tasks", label: "Tasks", icon: "fa-tasks" },
  { to: "/tester/inprogress", label: "In Progress", icon: "fa-spinner" },
  { to: "/tester/resolved", label: "Resolved", icon: "fa-check" },
  { to: "/tester/pending", label: "Pending", icon: "fa-clock" },
  { to: "/tester/reports", label: "Reports", icon: "fa-file-alt" },
];

// Developer menu
const developerNav = [
  { to: "/developer/dashboard", label: "Dashboard", icon: "fa-home" },
  { to: "/developer/my-projects", label: "My Projects", icon: "fa-folder" },
  { to: "/developer/my-team", label: "My Team", icon: "fa-users" },
  { to: "/developer/reports", label: "Reports", icon: "fa-chart-bar" },
];

// Leader menu
const leaderNav = [
  { to: "/leader/leaderdashboard", label: "Dashboard", icon: "fa-home" },
  { to: "/leader/leaderproject", label: "My Projects", icon: "fa-folder" },
  { to: "/leader/leadermyteam", label: "Teams", icon: "fa-users" },
  { to: "/leader/leaderreport", label: "Reports", icon: "fa-chart-line" },
];

const Sidebar: React.FC<SidebarProps> = ({
  role,
  userName = "User",
  userInitials = "U",
}) => {
  const navItems =
    role === "tester"
      ? testerNav
      : role === "developer"
      ? developerNav
      : leaderNav;

  return (
    <div
      className="sidebar bg-primary text-white d-flex flex-column app-sidebar-offset"
      style={{ width: 220, minHeight: "100vh" }}
    >
      <nav className="nav flex-column px-2">
        {navItems.map(({ to, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              "nav-link d-flex align-items-center mb-1 rounded px-3 " +
              (isActive ? "bg-purple text-white" : "text-white")
            }
            style={{ textDecoration: "none" }}
            end
          >
            <i className={`fa ${icon} me-2`} />
            {label}
          </NavLink>
        ))}
      </nav>

      {/* User Info at bottom */}
      <div className="mt-auto p-3 d-flex align-items-center">
        <div
          className="rounded-circle bg-secondary d-flex justify-content-center align-items-center me-2"
          style={{ width: 40, height: 40, color: "white" }}
        >
          {userInitials}
        </div>
        <div>
          <div className="fw-bold">{userName}</div>
          <div className="small">
            {role === "tester"
              ? "Tester"
              : role === "developer"
              ? "Developer"
              : "Leader"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
