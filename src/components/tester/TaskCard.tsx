import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";

type TaskCardProps = {
  title: string;
  description: string;
  priority: "High" | "Medium" | "Low";
  percent: number;
  reporter: string;
  date: string;
  assignee: string;
  environment: string;
  comments: number;
};

const priorityClass = (priority: string) => ({
  High: "high",
  Medium: "medium",
  Low: "low"
}[priority]);

const TaskCard: React.FC<TaskCardProps> = ({
  title, description, priority, percent, reporter, date, assignee, environment, comments
}) => (
  <div className="task-card">
    <div className="task-main">
      <div>
        <div className="task-title"><b>Login form validation error</b></div>
        <div className="task-desc">{description}</div>
      </div>
      <div className="progress-section">
        <span className={`priority ${priorityClass(priority)}`}>{priority}</span>
        <span className="progress-bar">
          <span className="progress-text">{percent}%</span>
          <div className={`bar ${priorityClass(priority)}`}>
            <div className="fill" style={{ width: `${percent}%` }}></div>
          </div>
        </span>
      </div>
    </div>
    <div className="task-details">
      <span>Reported by: {reporter}</span>
      <span>Assigned to: {assignee}</span>
      <span>Environment: {environment}</span>
      <span>Date: {date}</span>
    </div>
    <div className="task-actions">
      <select>
        <option>Open</option>
      </select>
      <button className="comments-btn">{comments} comments</button>
      <span className="edit-icon"><FaEdit /></span>
      <span className="delete-icon"><FaTrash /></span>
    </div>
  </div>
);

export default TaskCard;
