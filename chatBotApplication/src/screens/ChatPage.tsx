import React from "react";
import ChatHistory from "../components/chat/ChatHistory";
import ChatWrapper from "../components/chat/ChatWrapper";

const ChatPage = () => {
  return (
    <div className="chat-page-wrapper">
      <ChatHistory />
      <ChatWrapper />
    </div>
  );
};

export default ChatPage;
