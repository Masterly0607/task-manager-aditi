import React from 'react';

interface SpinnerProps {
  size?: number;      // in pixels, default 40
  color?: string;     // e.g., '#3b82f6' for blue
  thickness?: number; // border thickness, default 4
}

const SpinnerLoading: React.FC<SpinnerProps> = ({ size = 40, color = '#3b82f6', thickness = 4 }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="inline-block animate-spin rounded-full border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
        aria-label="Loading"
        style={{
          height: `${size}px`,
          width: `${size}px`,
          borderWidth: `${thickness}px`,
          borderTopColor: color,
          borderLeftColor: color,
          borderBottomColor: color,
        }}
      >
        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default SpinnerLoading;