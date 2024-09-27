import React from "react";
import "./chat.css";

const ChatHistory = () => {
  const chatsLHistoryist = [
    {
      id: 1,
      text: "What is LLM",
    },
    {
      id: 2,
      text: "What is javascript",
    },
    {
      id: 3,
      text: "What is react",
    },
  ];
  return (
    <div className="chat-history">
      <label className="text-white">Chat History</label>
      <div className="chat-history-container mt-3 pointer">
        {chatsLHistoryist ? (
          chatsLHistoryist.map((item) => (
            <div className="chat-history-list" key={item.id}>
              {item.text}
            </div>
          ))
        ) : (
          <div className="chat-history-list">New chat</div>
        )}
      </div>
    </div>
  );
};

export default ChatHistory;
