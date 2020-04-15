import React, { useState, useLayoutEffect, useRef } from "react";

import './styles.scss';

function Dropdown({ title, selected, items }) {
  let styleDinamicDiv;

  const [open, setOpen] = useState(false);

  const [chosen, setChosen] = useState(selected);

  const divEl = useRef(null);

  useLayoutEffect(() => {
    styleDinamicDiv = document.getElementsByClassName("style--dinamicDiv")[0];
  });

  function closeDropDown() {
    if (styleDinamicDiv) {
        styleDinamicDiv.style.height = "0px";
      }
    setOpen(false);
  }

  function openDropDown() {
    styleDinamicDiv.style.height = items.length * 32 + "px";
    setOpen(true);
  }

  function DropDownMenu() {
    open ? closeDropDown() : openDropDown();
  }

  function optionSelected(element) {
    setChosen(element);
    closeDropDown();
  }

  function onDivClick() {
    divEl.current.click();
  }

  function checkDropdown(event) {
    if (divEl.current && !divEl.current.contains(event.target)) closeDropDown();

    // !divEl.current.contains(event.target)
    //   ? closeDropDown()
    //   : console.log("detected click inside dropDown");
  }

  document.addEventListener("mousedown", checkDropdown);

  return (
    <>
    <h3>{title}</h3>
    <div
      ref={divEl}
      onClick={onDivClick}
      className={`dropdown ${open ? "up" : null}`}
    >
      <button className="button" onClick={DropDownMenu}>
        <div>{chosen}</div>
        <div className="chevron"> </div>
      </button>
      <ul className="style--dinamicDiv">
        {items.map(element => (
          <li
            onClick={() => {
              optionSelected(element);
            }}
            className="p--item"
          >
            {element}
          </li>
        ))}
      </ul>
    </div>
    </>
  );
}

export default Dropdown;
