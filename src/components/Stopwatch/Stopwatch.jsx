import React, { useState, useEffect } from 'react';
import './Stopwatch.css';

// Question 3: Stopwatch Component
// Demonstrates useState and useEffect (with interval cleanup on unmount)
function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer = null;

    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    // Cleanup: clears interval on component unmount or when isRunning changes
    return () => {
      if (timer) {
        clearInterval(timer);
        console.log('Stopwatch timer cleared (cleanup)');
      }
    };
  }, [isRunning]);

  // Format total seconds into MM:SS
  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    const padMin = mins < 10 ? `0${mins}` : mins;
    const padSec = secs < 10 ? `0${secs}` : secs;
    return `${padMin} : ${padSec}`;
  };

  const handleStart = () => setIsRunning(true);
  const handlePause = () => setIsRunning(false);
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div className="stopwatch-box">
      <div className="stopwatch-display">
        <span className="stopwatch-time">{formatTime(seconds)}</span>
        <span className="stopwatch-labels">MINUTES &nbsp;&nbsp;&nbsp;&nbsp; SECONDS</span>
      </div>

      <div className="stopwatch-status">
        Status: <strong>{isRunning ? 'Running' : seconds > 0 ? 'Paused' : 'Stopped'}</strong>
      </div>

      <div className="stopwatch-controls">
        <button
          type="button"
          className="sw-btn sw-btn-start"
          onClick={handleStart}
          disabled={isRunning}
        >
          Start
        </button>
        <button
          type="button"
          className="sw-btn sw-btn-pause"
          onClick={handlePause}
          disabled={!isRunning}
        >
          Pause
        </button>
        <button
          type="button"
          className="sw-btn sw-btn-reset"
          onClick={handleReset}
          disabled={seconds === 0 && !isRunning}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
