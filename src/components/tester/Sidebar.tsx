import React from "react";

import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/tester/dashboard", label: "Dashboard", icon: "fa-home" },
  { to: "/tester/tasks", label: "Tasks", icon: "fa-tasks" },
  { to: "/tester/progress", label: "Progress", icon: "fa-spinner" },

  { to: "/tester/reports", label: "Reports", icon: "fa-file-alt" },
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

    <div className="mt-auto p-3 d-flex align-items-center">
      <div
        className="rounded-circle bg-secondary d-flex justify-content-center align-items-center me-2"
        style={{ width: 40, height: 40, color: "white" }}
      >
        RP
      </div>
      <div>
        <div className="fw-bold">Riya Panchal</div>
        <div className="small">Tester</div>
      </div>
    </div>
  </div>
);

export default Sidebar;
