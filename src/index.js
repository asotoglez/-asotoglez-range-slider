import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const controlThumbWidth = 20;

const RangeSlider = ({
  min = 0,
  max = 50,
  defaultValue = 25,
  step = 1,
  width,
  color,
}) => {
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
    <div className="range-container" style={{ width: width }}>
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

RangeSlider.defaultProps = {
  min: 0,
  max: 50,
  defaultValue: 25,
  step: 1
};

RangeSlider.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  defaultValue: PropTypes.number,
  step: PropTypes.number,
  width: PropTypes.string,
  color: PropTypes.string
};

export default RangeSlider;
