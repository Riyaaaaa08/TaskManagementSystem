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

// Pie chart data (Workload distribution by team/member)
const pieData = [
  { name: "Team Alpha", value: 420 },
  { name: "Team Beta", value: 310 },
  { name: "Team Gamma", value: 220 },
  { name: "Team Delta", value: 160 },
  { name: "Team Ops", value: 120 },
];

const COLORS = ["#6C63FF", "#FF6384", "#36A2EB", "#FFCE56", "#9CCC65"];

// Line chart data (Weekly delivery trend: completed items)
const lineData = [
  { name: "Week 1", completed: 28 },
  { name: "Week 2", completed: 34 },
  { name: "Week 3", completed: 30 },
  { name: "Week 4", completed: 25 },
  { name: "Week 5", completed: 36 },
  { name: "Week 6", completed: 40 },
  { name: "Week 7", completed: 38 },
];

const LeaderReport: React.FC = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <Sidebar role="leader" userName="Riya Panchal" userInitials="RP" />

      {/* Main Content */}
      <div className="flex-grow-1">
        <Header />

        <div className="p-4">
          {/* Top stats */}
          <div className="d-flex flex-wrap gap-3 mb-4">
            <div className="stat-card">
              <h6>Active Projects</h6>
              <p>4</p>
            </div>
            <div className="stat-card">
              <h6>Total Tasks</h6>
              <p>86</p>
            </div>
            <div className="stat-card">
              <h6>Completed This Week</h6>
              <p>40</p>
            </div>
            <div className="stat-card">
              <h6>Team Members</h6>
              <p>12</p>
            </div>
          </div>

          {/* Charts */}
          <div className="d-flex flex-wrap gap-4 mb-4">
            {/* Workload Distribution */}
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

            {/* Delivery Trend */}
            <div className="chart-container flex-grow-1">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={lineData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="completed"
                    stroke="#6C63FF"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Delivery Health */}
          <h5 className="mb-3">Delivery Health</h5>
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

export default LeaderReport;
