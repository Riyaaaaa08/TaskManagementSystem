import React from "react";
import {
  FaTachometerAlt,
  FaFolder,
  FaUsers,
  FaTasks,
  FaChartBar,
} from "react-icons/fa";

interface SidebarProps {
  navigate: (path: string) => void;
  userName: string;
  userRole: string;
  userInitials: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  navigate,
  userName,
  userRole,
  userInitials,
}) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="logo">
          <span className="logo-icon">T</span>
          <span className="logo-text">ASK MANAGER</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li onClick={() => navigate("/")}>
            <FaTachometerAlt /> <span>Dashboard</span>
          </li>
          <li onClick={() => navigate("/create-project")}>
            <FaFolder /> <span>Projects</span>
          </li>
          <li onClick={() => navigate("/teams")}>
            <FaUsers /> <span>Teams</span>
          </li>
          <li onClick={() => navigate("/tasks")}>
            <FaTasks /> <span>Tasks</span>
          </li>
          <li onClick={() => navigate("/reports")}>
            <FaChartBar /> <span>Reports</span>
          </li>
        </ul>
      </nav>
      <div className="management-section">
        <h3>Management Section</h3>
        <ul>
          <li onClick={() => navigate("/create-project")}>+ Create Project</li>
          <li onClick={() => navigate("/create-task")}>+ Create Task</li>
          <li onClick={() => navigate("/add-employee")}>+ Add Employee</li>
        </ul>
      </div>
      <div className="profile-footer">
        <div className="avatar">{userInitials}</div>
        <div>
          <div className="profile-name">{userName}</div>
          <small className="profile-role">{userRole}</small>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
