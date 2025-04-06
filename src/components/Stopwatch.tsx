import { useTimer } from "../hooks/useTimer";

const Stopwatch = () => {
  const { seconds, start, stop, reset } = useTimer(0, false);

  return (
    <div>
      <h2 className="digit">{seconds}</h2>
      <button className="btn" onClick={start}>
        Start
      </button>
      <button className="btn" onClick={stop}>
        Stop
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
