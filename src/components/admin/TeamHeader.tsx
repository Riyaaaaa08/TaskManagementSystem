import React from "react";

type Props = { title: string; subtitle?: string };

const TeamHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <header className="tm-section-head">
      <h3 className="tm-section-title">{title}</h3>
      {subtitle ? <p className="tm-section-subtitle">{subtitle}</p> : null}
    </header>
  );
};

export default TeamHeader;
