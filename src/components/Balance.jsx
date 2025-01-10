import React from "react";
import "./css/Balance.css";
import { LuEye } from "react-icons/lu";

function Balance() {
  return (
    <div className="balance">
      <p className="balance_text">Your balance</p>
      <div className="balance_box">
        <span className="balance_digit">$264,642</span>
        <span className="eye_show">
          <LuEye />
        </span>
      </div>
    </div>
  );
}

export default Balance;
