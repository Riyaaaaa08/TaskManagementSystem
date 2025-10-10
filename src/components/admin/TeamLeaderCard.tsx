import React from "react";

type Props = {
  name: string;
  email: string;
  initials: string;
  color?: "purple" | "blue" | "teal";
};

const colorMap = {
  purple: "#7C4DFF",
  blue: "#3B82F6",
  teal: "#14B8A6",
};

const TeamLeaderCard: React.FC<Props> = ({
  name,
  email,
  initials,
  color = "purple",
}) => {
  return (
    <div className="tm-leader-card">
      <div
        className="tm-leader-avatar"
        style={{ backgroundColor: colorMap[color] }}
        aria-hidden="true"
      >
        {initials}
      </div>
      <div className="tm-leader-info">
        <div className="tm-leader-name">{name}</div>
        <span className="tm-badge">Project Leader</span>
        <div className="tm-leader-email">{email}</div>
      </div>
    </div>
  );
};

export default TeamLeaderCard;
