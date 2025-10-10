// src/components/ProgressBar.tsx
import React from "react";

type Props = {
  value: number; // 0-100
  barColor?: string;
  trackColor?: string;
  height?: number;
  rounded?: boolean;
  ariaLabel?: string;
};

const ProgressBar: React.FC<Props> = ({
  value,
  barColor = "#5A67F2",
  trackColor = "#E9E9EE",
  height = 8,
  rounded = true,
  ariaLabel
}) => {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div
      className="pb-track"
      style={{
        background: trackColor,
        height,
        borderRadius: rounded ? height : 0
      }}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={v}
      aria-label={ariaLabel}
    >
      <div
        className="pb-bar"
        style={{
          width: `${v}%`,
          background: barColor,
          borderRadius: rounded ? height : 0,
          height: "100%"
        }}
      />
    </div>
  );
};

export default ProgressBar;
