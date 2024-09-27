import React, { useEffect, useState } from "react";
import "./chat.css";
import ChatInputContainer from "./ChatInputContainer";
import ChatDataContainer from "./ChatDataContainer";
import { chatService } from "../../services/chatServices/chatService";
import { Typography } from "@mui/material";

const ChatWrapper = () => {
  const [chatData, setChatData] = useState([] as any);
  const [apiLoader, setAPILoader] = useState(false as boolean);
  const handleSearch = async (searchText: string) => {
    try {
      setChatData((prev: any) => [...prev, { question: searchText }]);
      setAPILoader(true);
      const payload = {
        prompt: searchText,
      };
      const { data }: any = await chatService.llmService(payload);
      if (data && data.output) {
        setChatData((prev: any) => [...prev, { answer: data.output }]);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setAPILoader(false);
    }
  };

  return (
    <div className="chat-wrapper">
      <Typography
        variant="h6"
        sx={{
          paddingLeft: "10px",
        }}
      >
        Gemini model - (gemini-1.5-flash)
      </Typography>
      <ChatDataContainer chatData={chatData} apiLoader={apiLoader} />
      <ChatInputContainer handleSearch={handleSearch} />
    </div>
  );
};

export default ChatWrapper;
