import React from "react";

interface ProjectCardProps {
  name: string;
  leader: string;
  progress: number;
  completed: number;
  remaining: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ name, leader, progress, completed, remaining }) => (
  <div>
    <div className="d-flex align-items-center mb-2">
      <div className="bg-primary rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: 32, height: 32 }}>
        <i className="fa fa-briefcase text-white"></i>
      </div>
      <div>
        <strong>{name}</strong>
        <div className="small">Project Leader: {leader}</div>
      </div>
      <div className="ms-auto small">
        Progress: {progress}%
      </div>
    </div>
    <div className="progress" style={{ height: 8, borderRadius: 8 }}>
      <div className="progress-bar bg-primary" style={{ width: `${progress}%` }} />
    </div>
    <div className="d-flex justify-content-between small mt-2">
      <div>{completed} tasks completed</div>
      <div>{remaining} tasks remaining</div>
    </div>
  </div>
);

export default ProjectCard;
