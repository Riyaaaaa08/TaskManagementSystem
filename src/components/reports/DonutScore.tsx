import React from "react";


type Ring = { percent: number; color: string; label: string };

type Props = {
  title: string;
  rings: Ring[];
};

const DonutScore: React.FC<Props> = ({ title, rings }) => {
  
  const size = 220;
  const strokeWidths = [14, 14, 14];
  const radii = [90, 70, 50]; 
  const cx = size / 2;
  const cy = size / 2;
  const circumference = (r: number) => 2 * Math.PI * r;

  return (
    <div className="card shadow-sm border-0 h-100">
      <div className="card-header bg-white border-0">
        <h5 className="fw-bold m-0">{title}</h5>
      </div>
      <div className="card-body d-flex justify-content-center">
        <svg width={size} height={size}>
          {radii.map((r, idx) => {
            const ring = rings[idx];
            const dash = (circumference(r) * Math.min(Math.max(ring?.percent ?? 0, 0), 100)) / 100;
            const gap = circumference(r) - dash;
            return (
              <g key={idx} transform={`rotate(-90 ${cx} ${cy})`}>
                <circle cx={cx} cy={cy} r={r} stroke="#e9e9ef" strokeWidth={strokeWidths[idx]} fill="none" />
                {ring && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r={r}
                    stroke={ring.color}
                    strokeWidth={strokeWidths[idx]}
                    fill="none"
                    strokeDasharray={`${dash} ${gap}`}
                    strokeLinecap="round"
                  />
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default DonutScore;
