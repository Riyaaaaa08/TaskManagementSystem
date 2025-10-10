import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/admin/dashboard", label: "Dashboard", icon: "fa-home" },
  { to: "/admin/projects", label: "Projects", icon: "fa-tasks" },
  { to: "/teams", label: "Teams", icon: "fa-users" }, // fixed path + valid icon
];

const Sidebar: React.FC = () => (
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
  </div>
);

export default Sidebar;
