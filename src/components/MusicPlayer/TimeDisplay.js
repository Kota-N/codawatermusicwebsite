import React from 'react';

const TimeDisplay = ({
  currentMinute,
  currentSecond,
  totalMinute,
  totalSecond,
}) => {
  return (
    <p className="time-display">
      {currentMinute}:
      {currentSecond <= 9 + 60 * currentMinute
        ? '0' + (currentSecond - 60 * currentMinute)
        : currentSecond - 60 * currentMinute}
      /{totalMinute}:{totalSecond <= 9 ? '0' + totalSecond : totalSecond}
    </p>
  );
};

export default TimeDisplay;
