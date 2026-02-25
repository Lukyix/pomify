interface TimerProps {
  minutes: number;
  seconds: number;
  isPaused: boolean;
  togglePauseResume: () => void;
}

export function Timer(props: TimerProps) {
  return (
    <>
      <div className="container_timer">
        <div className="numbers">
          <span className="text">
            {props.minutes < 10 ? `0${props.minutes}` : props.minutes}{" "}
          </span>
          <span className="text">
            {props.seconds < 10 ? `0${props.seconds}` : props.seconds}
          </span>
        </div>
        <div className="container_function">
          <button onClick={props.togglePauseResume}>
            <span className="material-icons">
              {props.isPaused ? "play_arrow" : "pause"}
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
