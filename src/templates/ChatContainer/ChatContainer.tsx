import React from "react";
import {
  Container,
  StyledChatContainer,
  LeftColumn,
  RightColumn,
  TopSection,
  BottomSection,
} from "./ChatContainer.styles";
import { IChatContainer } from "./ChatContainer.types";

export const ChatContainer = ({ dataTestId }: IChatContainer) => {
  return (
    <StyledChatContainer data-testid={dataTestId}>
      <Container>
        <LeftColumn data-testid="left-column">ConversationList</LeftColumn>
        <RightColumn data-testid="right-column">
          <TopSection data-testid="top-section">Messages</TopSection>
          <BottomSection data-testid="bottom-section">NewMessage</BottomSection>
        </RightColumn>
      </Container>
    </StyledChatContainer>
  );
};
