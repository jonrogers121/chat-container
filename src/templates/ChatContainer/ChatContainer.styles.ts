import styled from "styled-components";
import { px2Rem } from "../../utils/px2Rem";

const StyledChatContainer = styled.div``;

const Container = styled.div`
  @media (min-width: 600px) {
    display: flex;
    height: 500px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

const LeftColumn = styled.div`
  @media (min-width: 600px) {
    flex: 1;
    height: 100%;
    border-right: 2px solid #f4f4f4;
  }
`;

const LeftColumnContainer = styled.div`
  padding: ${px2Rem(24)};
`;

const RightColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: ${px2Rem(24)};
  @media (max-width: 600px) {
    order: 2;
  }
`;

const BottomSection = styled.div`
  padding: ${px2Rem(24)};
  @media (min-width: 600px) {
    height: 50px;
    border-top: 2px solid #f4f4f4;
  }
  @media (max-width: 600px) {
    order: 1;
    padding: ${px2Rem(24)};
    height: 70px;
  }
`;

export {
  StyledChatContainer,
  Container,
  LeftColumn,
  LeftColumnContainer,
  RightColumn,
  TopSection,
  BottomSection,
};
