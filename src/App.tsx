import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import VerifyOtp from "./pages/auth/VerifyOtp";
import ResetPassword from "./pages/auth/ResetPassword";

import TesterDashboard from "./pages/tester/Dashboard";
import TesterTasks from "./pages/tester/TesterTasks";
import InProgress from "./pages/tester/InProgress";
import Resolved from "./pages/tester/Resolved";
import Pending from "./pages/tester/Pending";
import Reports from "./pages/tester/TesterReports";

import DeveloperDashboard from "./pages/developer/Dashboard";
import MyProjects from "./pages/developer/Myproject";
import MyTeam from "./pages/developer/Myteam";
import DeveloperReport from "./pages/developer/DeveloperReport";

import LeaderDashboard from "./pages/leader/LeaderDashboard";
import LeaderMyteam from "./pages/leader/LeaderMyteam";
import LeaderProject from "./pages/leader/LeaderProject";
import LeaderReport from "./pages/leader/LeaderReport";
import CreateTask from "./pages/leader/CreateTask";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

/* Tester Layout */
const TesterLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <Header />
    <div className="d-flex vh-100">
      <Sidebar role="tester" userName="Riya Panchal" userInitials="RP" />
      <div className="flex-grow-1 d-flex flex-column app-main-offset">
        <main
          className="flex-grow-1 overflow-auto p-0"
          style={{ background: "#F7F3FF" }}
        >
          {children}
        </main>
      </div>
    </div>
  </>
);

/* Developer Layout */
const DeveloperLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <Header />
    <div className="d-flex vh-100">
      <Sidebar role="developer" userName="John Doe" userInitials="JD" />
      <div className="flex-grow-1 d-flex flex-column app-main-offset">
        <main
          className="flex-grow-1 overflow-auto p-0"
          style={{ background: "#F7F3FF" }}
        >
          {children}
        </main>
      </div>
    </div>
  </>
);

/* Leader Layout */
const LeaderLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    <Header />
    <div className="d-flex vh-100">
      <Sidebar role="leader" userName="Gauri More" userInitials="GM" />
      <div className="flex-grow-1 d-flex flex-column app-main-offset">
        <main className="flex-grow-1 p-3" style={{ background: "#F7F3FF" }}>
          {children}
        </main>
      </div>
    </div>
  </>
);

function App() {
  return (
    <Router>
      <div className="container-fluid vh-100 p-0">
        <Routes>
          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/verify" element={<VerifyOtp />} />
          <Route path="/reset" element={<ResetPassword />} />

          {/* Tester Routes */}
          <Route
            path="/tester/dashboard"
            element={
              <TesterLayout>
                <TesterDashboard />
              </TesterLayout>
            }
          />
          <Route
            path="/tester/tasks"
            element={
              <TesterLayout>
                <TesterTasks />
              </TesterLayout>
            }
          />
          <Route
            path="/tester/inprogress"
            element={
              <TesterLayout>
                <InProgress />
              </TesterLayout>
            }
          />
          <Route
            path="/tester/resolved"
            element={
              <TesterLayout>
                <Resolved />
              </TesterLayout>
            }
          />
          <Route
            path="/tester/pending"
            element={
              <TesterLayout>
                <Pending />
              </TesterLayout>
            }
          />
          <Route
            path="/tester/reports"
            element={
              <TesterLayout>
                <Reports />
              </TesterLayout>
            }
          />

          {/* Developer Routes */}
          <Route
            path="/developer/dashboard"
            element={
              <DeveloperLayout>
                <DeveloperDashboard />
              </DeveloperLayout>
            }
          />
          <Route
            path="/developer/my-projects"
            element={
              <DeveloperLayout>
                <MyProjects />
              </DeveloperLayout>
            }
          />
          <Route
            path="/developer/my-team"
            element={
              <DeveloperLayout>
                <MyTeam />
              </DeveloperLayout>
            }
          />
          <Route
            path="/developer/reports"
            element={
              <DeveloperLayout>
                <DeveloperReport />
              </DeveloperLayout>
            }
          />

          {/* Leader Routes */}
          <Route
            path="/leader/leaderdashboard"
            element={
              <LeaderLayout>
                <LeaderDashboard />
              </LeaderLayout>
            }
          />
          <Route
            path="/leader/leadermyteam"
            element={
              <LeaderLayout>
                <LeaderMyteam />
              </LeaderLayout>
            }
          />
          <Route
            path="/leader/leaderproject"
            element={
              <LeaderLayout>
                <LeaderProject />
              </LeaderLayout>
            }
          />
          <Route
            path="/leader/leaderreport"
            element={
              <LeaderLayout>
                <LeaderReport />
              </LeaderLayout>
            }
          />
          <Route
            path="/leader/create-task"
            element={
              <LeaderLayout>
                <CreateTask onClose={() => {}} />
              </LeaderLayout>
            }
          />

          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
