import styled from "styled-components";
import { px2Rem } from "../../utils/px2Rem";

const StyledChatContainer = styled.div``;

const Container = styled.div`
  display: flex;
  height: 500px;
  border-radius: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const LeftColumn = styled.div`
  flex: 1;
  height: 100%;
  border-right: 1px solid #f4f4f4;
  padding: ${px2Rem(24)} ${px2Rem(10)} 0 ${px2Rem(24)};
`;

const RightColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
`;

const TopSection = styled.div`
  flex: 1;
  overflow-y: scroll;
  padding: ${px2Rem(10)};
`;

const BottomSection = styled.div`
  height: 80px;
  border-top: 1px solid #f4f4f4;
`;

export {
  StyledChatContainer,
  Container,
  LeftColumn,
  RightColumn,
  TopSection,
  BottomSection,
};
