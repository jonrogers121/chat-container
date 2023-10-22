import React from "react";
import MessageCard from "../MessageCard";
import { Spacer } from "./MessageList.styles";

export const MessageList = ({ messages }: any) => {
  return (
    <div>
      {messages?.map(
        (message: {
          id: React.Key | null | undefined;
          text: string;
          last_updated: string;
        }) => (
          <div key={message.id}>
            <MessageCard
              data-testid="message-card"
              text={message.text}
              last_updated={message.last_updated}
            />
            <Spacer />
          </div>
        )
      )}
    </div>
  );
};
