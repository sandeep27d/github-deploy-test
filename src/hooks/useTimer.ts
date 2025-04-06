import { useEffect, useRef, useState } from "react";

export const useTimer = (
  initialSec: number = 0,
  isCountdown: boolean = false
) => {
  const [seconds, setSeconds] = useState(initialSec);
  const [isActive, setIsActive] = useState(false);
  const timerRef = useRef<number | undefined>(undefined);

  const start = () => setIsActive(true);
  const stop = () => setIsActive(false);
  const reset = () => {
    setSeconds(initialSec);
    setIsActive(false);
  };

  const startTimer = () => {
    timerRef.current = setInterval(() => {
      if (isActive) {
        if (isCountdown) {
          if (seconds <= 0) {
            clearInterval(timerRef.current);
            return;
          }
          setSeconds((prev) => prev - 1);
        } else {
          setSeconds((prev) => prev + 1);
        }
      }
    }, 1000);
    return () => clearInterval(timerRef.current);
  };

  useEffect(() => startTimer(), [isActive, seconds]);

  return { start, stop, reset, seconds, isActive };
};
