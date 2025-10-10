import React from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "../../App.css";
import { IoBugSharp } from "react-icons/io5";
import { TiTick } from "react-icons/ti";
import { RiProgress6Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";

// Pie chart data
const pieData = [
  { name: "User1", value: 400 },
  { name: "User2", value: 300 },
  { name: "User3", value: 200 },
  { name: "User4", value: 150 },
  { name: "User5", value: 100 },
];

const COLORS = ["#6C63FF", "#FF6384", "#36A2EB", "#FFCE56", "#9CCC65"];

// Line chart data
const lineData = [
  { name: "Week 1", progress: 60 },
  { name: "Week 2", progress: 90 },
  { name: "Week 3", progress: 70 },
  { name: "Week 4", progress: 30 },
  { name: "Week 5", progress: 65 },
  { name: "Week 6", progress: 70 },
  { name: "Week 7", progress: 60 },
];

const DeveloperReport: React.FC = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar role="developer" userName="Riya Panchal" userInitials="RP" />

      {/* Main Content */}
      <div className="flex-grow-1">
        <Header />

        <div className="p-4">
          {/* Top stats */}
          <div className="d-flex flex-wrap gap-3 mb-4">
            <div className="stat-card">
              <h6>Current Projects</h6>
              <p>1</p>
            </div>
            <div className="stat-card">
              <h6>Assigned Tasks</h6>
              <p>20</p>
            </div>
            <div className="stat-card">
              <h6>Pending Tasks</h6>
              <p>12</p>
            </div>
            <div className="stat-card">
              <h6>Members</h6>
              <p>5</p>
            </div>
          </div>

          {/* Charts */}
          <div className="d-flex flex-wrap gap-4 mb-4">
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="chart-container flex-grow-1">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="progress"
                    stroke="#6C63FF"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Debugging Section */}
          <h5 className="mb-3">Debugging</h5>
          <div className="d-flex flex-wrap gap-3">
            <div className="debug-card bugs">
              <h6>
                <h5>
                  <IoBugSharp />
                </h5>
                Bugs
              </h6>
              <p>20</p>
            </div>
            <div className="debug-card tested">
              <h5>
                <TiTick />
              </h5>
              <h6>Tested</h6>
              <p>6</p>
            </div>
            <div className="debug-card inprogress">
              <h5>
                <RiProgress6Line />
              </h5>
              <h6>In Progress</h6>
              <p>10</p>
            </div>
            <div className="debug-card overdue">
              <h5>
                <SlCalender />
              </h5>
              <h6>Overdue</h6>
              <p>4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperReport;
