import React from "react";
import "../components/css/Home.css";
import WelcomeUser from "../components/WelcomeUser";
import MoreAction from "../components/MoreAction";

const Home = () => {
  return (
    <div className="home">
      <WelcomeUser />
      <MoreAction />
    </div>
  );
};

export default Home;
