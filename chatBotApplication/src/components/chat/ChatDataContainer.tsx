import React, { useEffect } from "react";
import SenderComponent from "./SenderComponent";
import ReceiverComponent from "./ReceiverComponent";
import StreamLoader from "./StreamLoader";

const ChatDataContainer = ({
  chatData,
  apiLoader,
}: {
  chatData: any;
  apiLoader: boolean;
}) => {
  const scrollToBottom = () => {
    const chatContainer = document.getElementById("chat-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatData]);

  return (
    <div className="chat-data-container" id="chat-container">
      {chatData?.length
        ? chatData.map((item: any, index: any) => {
            return (
              <React.Fragment key={index}>
                {item?.question && (
                  <SenderComponent
                    key={`${index}-q`}
                    question={item.question}
                  />
                )}
                {item?.answer && (
                  <ReceiverComponent key={`${index}-a`} answer={item.answer} />
                )}
              </React.Fragment>
            );
          })
        : ""}
      {apiLoader ? <StreamLoader /> : ""}
    </div>
  );
};

export default ChatDataContainer;
