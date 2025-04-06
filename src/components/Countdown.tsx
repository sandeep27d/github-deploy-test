import { useTimer } from "../hooks/useTimer";

export const Countdown = () => {
  const { seconds, start, stop, reset } = useTimer(60, true);
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
