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

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const TesterLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <>
    {/* Full-width header */}
    <Header />

    <div className="d-flex vh-100">
      <Sidebar />
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

function App() {
  return (
    <Router>
      <div className="container-fluid vh-100 p-0">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/verify" element={<VerifyOtp />} />
          <Route path="/reset" element={<ResetPassword />} />

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

          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
