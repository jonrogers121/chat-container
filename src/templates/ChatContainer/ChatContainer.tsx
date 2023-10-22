import React from "react";
import {
  Container,
  StyledChatContainer,
  LeftColumn,
  RightColumn,
  TopSection,
  BottomSection,
  LeftColumnContainer,
  TopSectionContainer,
} from "./ChatContainer.styles";
import { IChatContainer } from "./ChatContainer.types";
import ConversationList from "../../components/ConversationList";
import { useAppContext } from "../../hooks/useAppContext";
import MessageList from "../../components/MessageList";

export const ChatContainer = ({ dataTestId }: IChatContainer) => {
  const { conversations, onSelect, selectedMessageThread } = useAppContext();
  return (
    <StyledChatContainer data-testid={dataTestId}>
      <Container>
        <LeftColumn data-testid="left-column">
          <LeftColumnContainer>
            <ConversationList
              conversations={conversations}
              onSelect={onSelect}
            />
          </LeftColumnContainer>
        </LeftColumn>
        <RightColumn data-testid="right-column">
          <TopSection data-testid="top-section">
            <MessageList messages={selectedMessageThread} />
          </TopSection>
          <BottomSection data-testid="bottom-section">NewMessage</BottomSection>
        </RightColumn>
      </Container>
    </StyledChatContainer>
  );
};
