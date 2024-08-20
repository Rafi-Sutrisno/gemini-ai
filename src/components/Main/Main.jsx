import React from "react";
import "./Main.css";
import { assets } from "../../assets/assets";

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        <div className="greet">
          <p>
            <span>Welcome back!</span>
          </p>
          <p>How can i help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Find the best restaurants for your next dining experience</p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>Summarize complex information into key points</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Connect and engage on social media platform</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve and debug your code efficiently</p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="enter a prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">Gemini may provide inaccurate info</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
