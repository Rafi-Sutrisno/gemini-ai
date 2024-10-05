import React, { useContext, useState } from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { Context } from "../../ContextProv/ContextProv";

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
        {/* Ganti elemen <img> dengan <button> untuk interaktivitas */}
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="menu"
          aria-label="Toggle Sidebar"
        >
          <img src={assets.menu_icon} alt="Menu Icon" />
        </button>

        <button
          className="new-chat"
          onClick={() => newChat()}
          aria-label="Start new chat"
        >
          <img src={assets.plus_icon} alt="New Chat Icon" />
          {open ? <p>new chat</p> : null}
        </button>

        {open ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {previousPrompt.map((item, index) => (
              <button
                key={index}
                onClick={() => loadPrompt(item)}
                className="recent-entry"
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                <img src={assets.message_icon} alt="" />
                <p>{item.slice(0, 15)} ...</p>
              </button>
            ))}
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
