import React from "react";
import ChatBubbleOutline from "@material-ui/icons/ChatBubbleOutline";
import "./Logo.css";

function Logo() {
  return (
    <div className="logocontainer">
      <ChatBubbleOutline className="logocontainer_logo"></ChatBubbleOutline>
      <div className="logocontainer_logolabel">Let's Chat</div>
    </div>
  );
}

export default Logo;
