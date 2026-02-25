import { useState } from "react";
import { dataTextColor } from "./data";

export function ButtonsColorsText() {
  const [isVisibleColorsText, setIsVisibleColorsText] =
    useState<boolean>(false);
  const mapDataText = dataTextColor;

  function toggleControlsText(): void {
    setIsVisibleColorsText((prev) => !prev);
  }

  function handleColorChangeText(color: string): void {
    const textColor = document.querySelectorAll("span");
    textColor.forEach((element) => {
      element.style.color = color;
    });
  }

  const buttonElementsText = mapDataText.map((item) => {
    return (
      <button
        key={item.id}
        className="colorpicker bord"
        style={{ backgroundColor: item.color }}
        onClick={() => handleColorChangeText(item.color)}
      ></button>
    );
  });

  return (
    <>
      <div className="container_buttons_colors ">
        {isVisibleColorsText && (
          <div className="container_buttons txt_pos_cont">
            {buttonElementsText}
          </div>
        )}
        <div>
          <button
            onClick={toggleControlsText}
            className="control_btn bg_pos_btn"
          >
            <p className="material-icons">abcde</p>
          </button>
        </div>
      </div>
    </>
  );
}
