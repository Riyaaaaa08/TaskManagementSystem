// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Developer area
import Dashboard from "./pages/developer/dashboard";
import Projects from "./pages/developer/project";
import Team from "./pages/developer/team";

// Leader area
import LeaderDashboard from "./pages/leader/dashboard";

import Profile from "./pages/profile";
import CreateProject from "./pages/createproject";
import AddEmployee from "./pages/addemployee";
import CreateTask from "./pages/createtask";

//auth
import Login from "../src/pages/auth/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default: Developer Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Developer pages */}
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />

        {/* Leader dashboard */}
        <Route path="/leader" element={<LeaderDashboard />} />

        {/* Other pages */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-project" element={<CreateProject />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
