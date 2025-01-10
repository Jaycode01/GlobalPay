import React from "react";
import { TfiBell } from "react-icons/tfi";
import "./css/WelcomeUser.css";
import userImage from "../images/userimagee.png";
import { IoArrowRedoOutline } from "react-icons/io5";
import Balance from "./Balance";
import { RiExchangeFundsLine } from "react-icons/ri";
import { CiImport } from "react-icons/ci";
import { PiDownload } from "react-icons/pi";

function WelcomeUser() {
  return (
    <>
      <div className="wrapper">
        <article className="welcome_user">
          <div className="top_box">
            <div className="image_box">
              <img src={userImage} alt="" />
            </div>
            <div className="text_box">
              <p className="first_text">Welcome Back</p>
              <p>Thomas Temmy</p>
            </div>
            <div className="icon_box">
              <TfiBell className="icon" />
            </div>
          </div>

          <Balance />
        </article>
        <div className="action_box">
          <div>
            <span id="icon">
              <IoArrowRedoOutline />
            </span>
            <span>Send</span>
          </div>
          <div>
            <span id="icon">
              <RiExchangeFundsLine />
            </span>
            <span>Convert</span>
          </div>
          <div>
            <span id="icon">
              <CiImport />
            </span>
            <span>Receive</span>
          </div>
          <div>
            <span id="icon">
              <PiDownload />
            </span>
            <span>Withdraw</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomeUser;
