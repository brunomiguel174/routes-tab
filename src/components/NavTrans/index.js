import React, { Fragment, useLayoutEffect } from "react";
import { Link } from "react-router-dom";

const NavTrans = props => {
  useLayoutEffect(() => {
    const a = document.querySelector(".choosenOne");
    const b = document.querySelector(".div--animation ");
    b.style.left = `${a.offsetLeft}px`;
    b.style.width = `${a.offsetWidth}px`;
  });

  return (
    <Fragment>
      <div className="App"></div>

      <div className="div--animation"></div>

      <div className="div--wrapper">
        <Link className={props.name === "/" ? "choosenOne" : null} to="/">
          Home
        </Link>

        <Link
          className={props.name === "/about" ? "choosenOne" : null}
          to="/about"
        >
          About me
        </Link>

        <Link
          className={props.name === "/dashboard" ? "choosenOne" : null}
          to="/dashboard"
        >
          O que ser vida?
        </Link>

        <Link
          className={props.name === "/exercises" ? "choosenOne" : null}
          to="/exercises"
        >
          Exercises
        </Link>

        <Link
          className={props.name === "/banner" ? "choosenOne" : null}
          to="/banner"
        >
          Banner
        </Link>

        <Link className={props.name === "/tab" ? "choosenOne" : null} to="/tab">
          Tab
        </Link>
      </div>
    </Fragment>
  );
};

export default NavTrans;
