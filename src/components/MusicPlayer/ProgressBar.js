import React from 'react';

const ProgressBar = ({
  currentProgressPercent,
  currentUrl,
  updateProgress,
}) => {
  return (
    <div className="progress-background">
      <div style={{ width: currentProgressPercent }} className="progress">
        <div
          onClick={e => {
            currentUrl && updateProgress(e);
          }}
          className="progress-hoverarea"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
