import styled from "styled-components";
import { px2Rem } from "../../utils/px2Rem";

const StyledConversationList = styled.div``;

const ConversationsContainer = styled.div``;

const ConversationItem = styled.div`
  margin-bottom: ${px2Rem(12)};
  span {
    font-family: "Gill-Sans", sans-serif;
    font-size: ${px2Rem(14)};
    color: #03390f;
    cursor: pointer;
  }
`;

export { StyledConversationList, ConversationsContainer, ConversationItem };
