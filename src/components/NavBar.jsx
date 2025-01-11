import React from "react";
import "./css/NavBar.css";
import { GrHomeRounded } from "react-icons/gr";
import { IoBarChartSharp } from "react-icons/io5";
import { BsCurrencyExchange } from "react-icons/bs";
import { IoCardOutline } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" className="nav-icons active">
              <GrHomeRounded />
              Home
            </Link>
          </li>
          <li>
            <Link to="/transactions" className="nav-icons">
              <IoBarChartSharp />
              Transaction
            </Link>
          </li>
          <li>
            <Link to="/currency" className="nav-icons" id="currency">
              <BsCurrencyExchange />
              Convert
            </Link>
          </li>
          <li>
            <Link to="/card" className="nav-icons" id="card">
              <IoCardOutline />
              Card
            </Link>
          </li>
          <li>
            <Link to="/settings" className="nav-icons" id="settings">
              <CiSettings />
              Settings?
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
