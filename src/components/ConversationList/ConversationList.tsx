import React from "react";
import {
  ConversationItem,
  ConversationsContainer,
} from "./ConversationList.styles";

export const ConversationList = ({ conversations, onSelect }) => {
  // Sort conversations by lastUpdated in descending order
  const sortedConversations = conversations.sort(
    (
      a: { last_updated: string | number | Date },
      b: { last_updated: string | number | Date }
    ) => new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime()
  );

  return (
    <ConversationsContainer data-testid="conversation-list">
      {sortedConversations.map((conversation, index) => (
        <ConversationItem
          key={conversation.id}
          onClick={() => onSelect(index)}
          data-testid="conversation-item"
        >
          <span>Conversation {index + 1}</span>
        </ConversationItem>
      ))}
    </ConversationsContainer>
  );
};
