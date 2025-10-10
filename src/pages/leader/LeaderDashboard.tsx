// src/pages/dashboard/LeaderDashboard.tsx
import React, { useState } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from "recharts";
import CreateTask from "../../pages/leader/CreateTask";

const data = [
  { name: "Mobile app", value: 20, color: "#60a5fa" },
  { name: "Database software", value: 15, color: "#34d399" },
  { name: "Informative website", value: 10, color: "#facc15" },
  { name: "E-commerce platform", value: 30, color: "#ec4899" },
  { name: "Security software", value: 25, color: "#3b82f6" },
];

const LeaderDashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="dashboard-main">
      <Sidebar role="leader" userName="Gauri More" userInitials="GM" />

      <div className="dashboard-content">
        <Header />

        <div className="dashboard-body">
          {/* Project Section */}
          <div className="card mb-6">
            <h2 className="text-lg font-semibold mb-3">Current Project</h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-base">E-commerce Platform</p>
                <p className="text-sm text-gray-500">Project Leader: User 1</p>
                <p className="text-sm text-gray-400 mt-1">13 tasks completed</p>
              </div>
              <div className="text-right w-64">
                <p className="text-sm text-gray-600 mb-1">Progress: 75%</p>
                <div className="progress-bar">
                  <div
                    className="progress-fill bg-purple-600"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1">8 tasks remaining</p>
              </div>
            </div>
          </div>

          {/* Task List Section */}
          <div className="card mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Task List</h2>
              <button
                className="btn-primary px-4 py-2"
                onClick={() => setShowModal(true)}
              >
                + Create Task
              </button>
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="p-2">Task</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Progress</th>
                  <th className="p-2">Due Date</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">Task 1</td>
                  <td className="p-2">
                    <span className="status active">Active</span>
                  </td>
                  <td className="p-2 w-48">
                    <div className="progress-bar">
                      <div
                        className="progress-fill bg-green-500"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm">75%</span>
                  </td>
                  <td className="p-2">12 October, 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Task 2</td>
                  <td className="p-2">
                    <span className="status in-progress">In Progress</span>
                  </td>
                  <td className="p-2 w-48">
                    <div className="progress-bar">
                      <div
                        className="progress-fill bg-blue-500"
                        style={{ width: "40%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm">40%</span>
                  </td>
                  <td className="p-2">14 October, 2025</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Task 3</td>
                  <td className="p-2">
                    <span className="status review">In Review</span>
                  </td>
                  <td className="p-2 w-48">
                    <div className="progress-bar">
                      <div
                        className="progress-fill bg-purple-500"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm">50%</span>
                  </td>
                  <td className="p-2">20 October, 2025</td>
                </tr>
                <tr>
                  <td className="p-2">Task 4</td>
                  <td className="p-2">
                    <span className="status pending">Pending</span>
                  </td>
                  <td className="p-2 w-48">
                    <div className="progress-bar">
                      <div
                        className="progress-fill bg-red-500"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                    <span className="ml-2 text-sm">60%</span>
                  </td>
                  <td className="p-2">16 October, 2025</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Chart Section */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Project Breakdown</h2>
            <div className="flex justify-center">
              <ResponsiveContainer width={350} height={250}>
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={90}
                    label
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {showModal && <CreateTask onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default LeaderDashboard;
