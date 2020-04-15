import React, { useState, useLayoutEffect } from "react";

import './styles.scss';

function BannerMessage(props) {
  const [status, setStatus] = useState(false);
  
  let divBanner;

  useLayoutEffect(() => {
    divBanner = document.getElementsByClassName("div--banner")[0];
    divBanner.style.backgroundColor = props.color;
  });

  function bannerDown() {
    divBanner.style.top = "0px";
    setStatus(false);
  }

  function bannerUp() {
    console.log("up");
    divBanner.style.top = "-120px";
    setStatus(true);
    setTimeout(() => {
      bannerDown();
    }, 2000);
  }

  function DropDownMenu() {
    status ? bannerDown() : bannerUp();
  }

  return (
    <>
      <div className="div--banner">
        {props.children}
        <button className="hideBanner" onClick={DropDownMenu}>✖️</button>
      </div>
    </>
  );
}

export default BannerMessage;
