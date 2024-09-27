import { IconButton, SvgIcon } from "@mui/material";
import React from "react";

const SenderComponent = ({ question }: { question: string }) => {
  return (
    <div className="sender-message-container">
      <IconButton aria-label="delete" className="edit-icon" size="medium">
        <SvgIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="#5487d9"
              d="M5 18.08V19h.92l9.06-9.06l-.92-.92z"
              opacity="0.25"
            />
            <path
              fill="#5487d9"
              d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92zM20.71 5.63l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83a.996.996 0 0 0 0-1.41"
            />
          </svg>
        </SvgIcon>
      </IconButton>
      <div className="chat-card">
        <div className="chat-tag-question">Question</div>
        {question}
      </div>
    </div>
  );
};

export default SenderComponent;
