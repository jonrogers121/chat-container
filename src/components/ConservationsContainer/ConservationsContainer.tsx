import React from "react";
import { StyledConservationsContainer } from "./ConservationsContainer.styles";
import { IConservationsContainer } from "./ConservationsContainer.types";
import ConversationList from "../ConversationList";
import { useAppContext } from "../../hooks/useAppContext";

export const ConservationsContainer = ({
  dataTestId,
  onSelect,
}: IConservationsContainer) => {
  const { conversations } = useAppContext();
  return (
    <StyledConservationsContainer data-testid={dataTestId}>
      <ConversationList
        conversations={conversations}
        onSelect={onSelect}
        data-testid="conversation-list"
      />
    </StyledConservationsContainer>
  );
};
