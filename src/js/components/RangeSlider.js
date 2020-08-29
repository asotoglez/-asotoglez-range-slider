import React, { useRef, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../../styles.scss";

const controlThumbWidth = 20;

const RangeSlider = ({ min = 0, max = 50, defaultValue = 25, step = 1, color }) => {
  const refInput = useRef();
  const refOutput = useRef();
  const [value, setValue] = useState(defaultValue);
  const inputChange = (control) => {
    const controlMin = control.attributes.min.value;
    const controlMax = control.attributes.max.value;
    const controlVal = control.value;
    const range = controlMax - controlMin;
    const position = ((controlVal - controlMin) / range) * 100;
    const positionOffset =
      Math.round((controlThumbWidth * position) / 100) - controlThumbWidth / 2;
    refOutput.current.style.left =
      "calc(" + position + "% - " + positionOffset + "px)";
    setValue(controlVal);
  };

  useEffect(() => {
    const position = ((refInput.current.value - min) / max - min) * 100;
    const positionOffset =
      Math.round((controlThumbWidth * position) / 100) - controlThumbWidth / 2;
    refOutput.current.style.left =
      "calc(" + position + "% - " + positionOffset + "px)";
    if (color) {
      window.document
        .querySelector("body")
        .style.setProperty("--base-color", color);
    }
  }, []);

  return (
    <div className="range-container">
      <input
        ref={refInput}
        id="range1"
        type="range"
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onInput={(e) => inputChange(e.currentTarget)}
      />
      <output ref={refOutput} name="rangeVal">
        {value}
      </output>
    </div>
  );
};

export default RangeSlider;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<RangeSlider />, wrapper) : false;
