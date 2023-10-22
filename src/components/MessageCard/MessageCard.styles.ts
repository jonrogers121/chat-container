import styled from "styled-components";
import { px2Rem } from "../../utils/px2Rem";

const StyledMessageCard = styled.div``;

const CardContainer = styled.div``;

const DateTime = styled.div`
  font-family: "Gill-Sans", sans-serif;
  font-size: ${px2Rem(14)};
  color: #777;
`;

const Message = styled.div`
  font-family: "Gill-Sans", sans-serif;
  font-size: ${px2Rem(16)};
  margin-top: ${px2Rem(10)};
`;

export { StyledMessageCard, CardContainer, DateTime, Message };
