import React from "react";
import { CardContainer, DateTime, Message } from "./MessageCard.styles";
import { IMessageCard } from "./MessageCard.types";

export const MessageCard = ({ text, last_updated }: IMessageCard) => {
  const lastUpdatedDate = new Date(last_updated);

  const formattedDateTime = lastUpdatedDate.toLocaleString();

  return (
    <CardContainer data-testid="message-card">
      <DateTime>{formattedDateTime}</DateTime>
      <Message>{text}</Message>
    </CardContainer>
  );
};
