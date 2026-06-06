import React from "react";


type Segment = { color: string; value: number; label?: string };

type Props = {
  title: string;
  segments: Segment[];
  legend?: { color: string; label: string }[];
};

const DonutContribution: React.FC<Props> = ({ title, segments, legend }) => {
  const gradientId = React.useId();
 
  let current = 0;
  const slices = segments.map((s) => {
    const start = current;
    const end = current + s.value;
    current = end;
    return `${s.color} ${start}% ${end}%`;
  });
  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white border-0">
        <h5 className="fw-bold m-0">{title}</h5>
      </div>
      <div className="card-body">
        {legend && (
          <div className="small mb-3">
            {legend.map((l, i) => (
              <span key={i} className="me-3">
                <span className="me-1 d-inline-block rounded-circle" style={{ width: 10, height: 10, background: l.color }} />
                {l.label}
              </span>
            ))}
          </div>
        )}
        <div className="d-flex justify-content-center">
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              background: `conic-gradient(${slices.join(", ")})`,
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 20,
                background: "#fff",
                borderRadius: "50%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonutContribution;
