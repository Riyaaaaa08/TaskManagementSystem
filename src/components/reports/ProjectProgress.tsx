import React from "react";

type Props = {
  name: string;
  leader: string;
  progress: number;
  completed: number;
  remaining: number;
};

const ProjectProgress: React.FC<Props> = ({ name, leader, progress, completed, remaining }) => {
  return (
    <div className="card shadow-sm border-0">
      <div className="card-body">
        <div className="d-flex align-items-center mb-2">
          <div className="rounded-circle bg-primary d-flex align-items-center justify-content-center me-2" style={{ width: 28, height: 28 }}>
            <i className="bi bi-briefcase text-white" />
          </div>
          <div className="flex-grow-1">
            <div className="fw-semibold">{name}</div>
            <div className="small text-muted">Project Leader: {leader}</div>
          </div>
          <div className="small text-muted">Progress: {progress}%</div>
        </div>
        <div className="progress" style={{ height: 8 }}>
          <div className="progress-bar bg-primary" role="progressbar" style={{ width: `${progress}%` }} />
        </div>
        <div className="d-flex justify-content-between small text-muted mt-2">
          <div>{completed} tasks completed</div>
          <div>{remaining} tasks remaining</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectProgress;
