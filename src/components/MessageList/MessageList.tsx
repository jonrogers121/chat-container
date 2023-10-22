import React from "react";
import MessageCard from "../MessageCard";

export const MessageList = ({ messages }: any) => {
  return (
    <div>
      {messages?.map(
        (message: {
          id: React.Key | null | undefined;
          text: string;
          last_updated: string;
        }) => (
          <MessageCard
            data-testid="message-card"
            key={message.id}
            text={message.text}
            last_updated={message.last_updated}
          />
        )
      )}
    </div>
  );
};
