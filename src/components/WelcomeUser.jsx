import React from "react";
// import { TfiBell } from "react-icons/tfi";
import "./css/WelcomeUser.css";
// import userImage from "../images/userimagee.png";
// import { IoArrowRedoOutline } from "react-icons/io5";
// import Balance from "./Balance";
// import { RiExchangeFundsLine } from "react-icons/ri";
// import { CiImport } from "react-icons/ci";
// import { PiDownload } from "react-icons/pi";

function WelcomeUser() {
  return (
    <>
      <div className="page-container">
        <div className="main-container">
          <h2>Container</h2>
          <div className="inner-div first-div">
            <p>This is the first div inside the container.</p>
          </div>
          <div className="inner-div overlapping-div">
            <p>This div is half inside and half outside the container.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeUser;
