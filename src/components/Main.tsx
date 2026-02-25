import { useState, useEffect } from "react";
import { Timer } from "./Timer";

export function Main() {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(25);
  const [isBreak, setIsBreak] = useState<boolean>(true);

  function togglePauseResume(): void {
    setIsPaused((prev) => !prev);
  }

  useEffect(() => {
    if (isBreak) {
      setMinutes(25);
      setSeconds(0);
    } else {
      setMinutes(5);
      setSeconds(0);
    }
  }, [isBreak]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (!isPaused && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((s) => s - 1);
        } else if (minutes > 0) {
          setMinutes((m) => m - 1);
          setSeconds(59);
        }
      }, 1000);
    } else if (minutes === 0 && seconds === 0) {
      setIsBreak((prev) => !prev);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isPaused, minutes, seconds]);

  useEffect(() => {
    document.title = `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds} Pomify`;
  }, [minutes, seconds]);

  return (
    <>
      <Timer
        togglePauseResume={togglePauseResume}
        isPaused={isPaused}
        minutes={minutes}
        seconds={seconds}
      />
    </>
  );
}
