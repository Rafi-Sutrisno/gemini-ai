import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    recentPrompt,
    input,
    setInput,
    showResult,
    loading,
    resultData,
    onSent,
  } = useContext(Context);

  const [isFocused, setIsFocused] = useState(false);

  const searchBox_style = {
    backgroundColor: isFocused ? "#ededed" : "",
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
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
          </>
        ) : (
          <>
            <div className="result">
              <div className="result_title">
                <img src={assets.user_icon} alt="" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result_data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          </>
        )}

        <div className="main-bottom">
          <div className="search-box" style={searchBox_style}>
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              type="text"
              placeholder="enter a prompt here"
              value={input}
            />
            <div>
              <img
                src={assets.gallery_icon}
                alt=""
                className="cursor-not-allowed"
              />
              <img
                src={assets.mic_icon}
                alt=""
                className="cursor-not-allowed"
              />
              {input ? (
                <img
                  onClick={() => onSent()}
                  src={assets.send_icon}
                  alt=""
                  className="cursor-pointer"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">Gemini may provide inaccurate info</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
