import { useState } from "react";

export default function ButtonsColors() {
  const [isVisibleColors, setIsVisibleColors] = useState<boolean>(false);

  function toggleControls(): void {
    setIsVisibleColors((prev) => !prev);
  }

  return (
    <>
      <div className="container_buttons_colors">
        <div className="control_btn">
          <button onClick={toggleControls} className="control_btn">
            <p className="material-icons">color_lens</p>
          </button>
        </div>
        {isVisibleColors && <div className="container_buttons"></div>}
      </div>
    </>
  );
}
