import React, { useRef, useEffect, useReducer } from "react";

import TabTrans from "../../components/TabTrans";

const items = ["firstOption", "secondOption", "thirdOption"];

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, option: action.value };
    case "reset":
      return { count: 0};
  }
}

function Tab() {
  let showMessage;

  const tabRef = useRef(null);

  const [state, dispatch] = useReducer(reducer, { count: 0, option: 0 });

  useEffect(() => {
    document.addEventListener("mousedown", event => 
    tabRef.current && tabRef.current.contains(event.target) ? null : dispatch({ type: "reset" })
    );
  });

  switch (state.option) {
    case 0:
      showMessage = items[0];
      break;
    case 1:
      showMessage = items[1];
      break;
    case 2:
      showMessage = items[2];
      break;
    default:
      showMessage = "Click in options";
  }

  return (
    <>
      <TabTrans
        callback={key => dispatch({ type: "increment", value: key })}
        items={items}
        selectedOption={items[0]}
        forwardRef={tabRef}
      />

      <h1>{showMessage}</h1>

      <h2>Number of clicks: {state.count}</h2>
    </>
  );
}

export default Tab;
