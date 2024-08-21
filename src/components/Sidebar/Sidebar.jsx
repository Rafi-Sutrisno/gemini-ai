import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const { onSent, previousPrompt, setRecentPromt, newChat } =
    useContext(Context);
  const loadPrompt = async (prompt) => {
    setRecentPromt(prompt);
    await onSent(prompt);
  };

  return (
    <div className={`sidebar ${open ? "sidebar-open" : "sidebar-closed"}`}>
      <div className="top">
        <img
          onClick={() => setOpen((prev) => !prev)}
          className="menu"
          src={assets.menu_icon}
          alt=""
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" />
          {open ? <p>new chat</p> : null}
        </div>
        {open ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} className="recent-entry">
                  <img src={assets.message_icon} alt="" />
                  <p>{item.slice(0, 15)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="bot">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {open ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {open ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {open ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
