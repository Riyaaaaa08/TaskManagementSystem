import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import logo from "../../assets/images/reshot-icon-adverts-H429KN5RZD.svg";
import ProfileMenu from "../tester/ProfileMenu";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const profileBtnRef = useRef<HTMLButtonElement>(null);

  const handleEditProfile = () => navigate("/profile/edit");
  const handleLogout = () => navigate("/login");

  return (
    <header className="app-header-fixed">
      {/* Brand */}
      <div className="d-flex align-items-center" style={{ gap: 9 }}>
        <img src={logo} alt="App logo" style={{ width: 25, height: 25 }} />
        <div
          className="fs-5 fw-bold m-0 lh-1"
          style={{ letterSpacing: 1, whiteSpace: "nowrap" }}
        >
          <span style={{ color: "#ff9100ff" }}>TASK</span>{" "}
          <span style={{ color: "#f7cb19ff" }}>MANAGER</span>
        </div>
      </div>

      {/* Search */}
      <div className="flex-grow-1 d-none d-md-flex justify-content-center">
        <div className="input-group" style={{ maxWidth: 560, width: "100%" }}>
          <span className="input-group-text bg-light border-end-0">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search bugs, tasks, projects..."
            style={{ borderRadius: "0 6px 6px 0" }}
          />
          <button className="btn btn-light border-0">Search</button>
        </div>
      </div>

      {/* Right rail */}
      <div
        className="d-flex align-items-center justify-content-end"
        style={{ gap: 12 }}
      >
        <span className="text-muted d-none d-sm-inline">Admin</span>

        {/* Notifications */}
        <button className="btn btn-light position-relative rounded-pill px-3">
          <IoIosNotifications />
          <span
            className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
            style={{ fontSize: 8 }}
          />
        </button>

        {/* Profile */}
        <button
          ref={profileBtnRef}
          className="btn btn-light rounded-pill px-3"
          onClick={() => setMenuOpen((s) => !s)}
          aria-haspopup="menu"
          aria-expanded={menuOpen}
        >
          <CgProfile />
        </button>
      </div>

      {/* Profile menu */}
      <ProfileMenu
        anchorRef={profileBtnRef}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onEditProfile={handleEditProfile}
        onLogout={handleLogout}
      />
    </header>
  );
};

export default Header;
