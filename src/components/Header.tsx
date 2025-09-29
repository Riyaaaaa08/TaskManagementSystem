import React from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import logo from "../assets/images/reshot-icon-adverts-H429KN5RZD.svg";
import { FaSearch } from "react-icons/fa";

const Header: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <header
      className="app-header-fixed bg-white"
      style={{
        height: 64,
        borderBottom: "1px solid #ccc",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        gap: 16,
      }}
    >
     
      <div className="d-flex align-items-center" style={{ gap:9 }}>
        <img src={logo} alt="App logo" style={{ width: 25, height: 25}} />
        <div
          className="fs-5 fw-bold m-0 lh-1"
          style={{ letterSpacing: 1, whiteSpace: "nowrap" }}
        >
          <span style={{ color: "#ff9100ff" }}>TASK</span>{" "}
          <span style={{ color: "#f7cb19ff" }}>MANAGER</span>
        </div>
      </div>

      
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

      
      <div
        className="d-flex align-items-center justify-content-end"
        style={{ gap: 12 }}
      >
        <span className="text-muted d-none d-sm-inline">Tester</span>
        <button className="btn btn-light position-relative rounded-pill px-3">
          <IoIosNotifications />
          <span
            className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"
            style={{ fontSize: 8 }}
          />
        </button>
        <button className="btn btn-light rounded-pill px-3">
          <CgProfile />
        </button>
        <button
          className="btn btn-primary rounded-pill px-3"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
