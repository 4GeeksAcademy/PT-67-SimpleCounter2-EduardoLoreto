import React, { useState, useEffect } from "react";

const SecondsCounter = () => {
  const [time, setTime] = useState(0);
  const [run, setRun] = useState(true);

  useEffect(() => {
    let interval;
    if (run) {
      interval = setInterval(() =>
        setTime(time + 1), 10);
    }
    else if (!run) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [run, time]);

  const seconds = Math.floor((time % 6000) / 100);

  let display = seconds.toString().padStart(7, "0");

  return (
    <div>
      <div className="container-fluid d-flex justify-content-center mt-5">
        <div className="bg-secondary p-2 text-black bg-opacity-1">{display[0]}</div>
        <div className="bg-secondary p-2 text-black bg-opacity-1">{display[1]}</div>
        <div className="bg-secondary p-2 text-black bg-opacity-1">{display[2]}</div>
        <div className="bg-secondary p-2 text-black bg-opacity-1">{display[3]}</div>
        <div className="bg-secondary p-2 text-black bg-opacity-1">{display[4]}</div>
        <div className="bg-secondary p-2 text-black bg-opacity-1">{display[5]}</div>
        <div className="bg-secondary p-2 text-black bg-opacity-1">{display[6]}</div>
      </div>
      <div className="container-fluid d-flex justify-content-center mt-2 gap-2">
        <button className="bg-primary text-black rounded" onClick={() => setRun(true)}>Start</button>
        <button className="bg-danger text-black rounded" onClick={() => setRun(false)}>Stop</button>
        <button className="bg-secundary text-black rounded" onClick={() => setTime(0)}>Reset</button>
      </div>
    </div>
  );
};

export default SecondsCounter;