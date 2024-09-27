import React, { useEffect, useState } from "react";

const EventSourceComponent = () => {
  const [text, setText] = useState("" as any);

  useEffect(() => {
    const eventSource: EventSource = new EventSource(
      "http://localhost:3000/events"
    );
    console.log(eventSource)
    eventSource.onmessage = (e: any) => {
      console.log(e)
      setText((prevText: any) => prevText + " " + e.data);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return <p className="stream-text">{text}</p>;
};

export default EventSourceComponent;
