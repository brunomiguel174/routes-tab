import React, { useState, useLayoutEffect } from "react";

import "./styles.scss";

export default function TabTrans({
  callback,
  items,
  selectedOption,
  forwardRef
}) {
    let b;
  const [option, setOption] = useState(selectedOption);
  useLayoutEffect(() => {
    const a = document.querySelector(".styleOption");
    b = document.querySelector(".div--animationTab");
    b.style.left = `${a.offsetLeft}px`;
    b.style.width = `${a.offsetWidth}px`;
  });

  return (
    <div className="div-main">
      <div className="div-container"></div>

      <div className="div--animationTab"> </div>

      <div ref={forwardRef} className="div--trans">
        {items.map((value, index) => {
          return (
            <div
              key={index}
              className={value === option ? "styleOption" : null}
              onClick={() => {
                setOption(value);
                callback(index);
              }}
            >
              {value}
            </div>
          );
        })}
      </div>
    </div>
  );
}
