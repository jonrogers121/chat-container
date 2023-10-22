import React from "react";
import {
  ConversationItem,
  ConversationsContainer,
} from "./ConversationList.styles";
import { IConversationList } from "./ConversationList.types";
import { useAppContext } from "../../hooks/useAppContext";

export const ConversationList = ({
  conversations,
  onSelect,
}: IConversationList) => {
  const { selectedConversation } = useAppContext();
  const sortedConversations = conversations.sort(
    (
      a: { last_updated: string | number | Date },
      b: { last_updated: string | number | Date }
    ) => new Date(b.last_updated).getTime() - new Date(a.last_updated).getTime()
  );

  return (
    <ConversationsContainer data-testid="conversation-list">
      {sortedConversations &&
        sortedConversations.map((conversation, index) => (
          <ConversationItem
            key={conversation.id}
            onClick={() => onSelect(index.toString())}
            data-testid="conversation-item"
            active={selectedConversation === index.toString()}
          >
            <span>Conversation {index + 1}</span>
          </ConversationItem>
        ))}
    </ConversationsContainer>
  );
};
