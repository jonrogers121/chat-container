import styled from "styled-components";

const StyledTextForm = styled.div``;

const StyledTextFormInput = styled.input`
  height: 42px;
  width: 500px;
  padding: 0 10px;
  @media (max-width: 600px) {
    margin-right: 12px;
    height: 36px;
    width: 200px;
  }
`;

const StyledTextFormButton = styled.button`
  height: 46px;
  width: 120px;
  border: none;
  border-radius: 5px;
  background-color: #2e8b57;
  color: #fff;
  font-size: 16px;
  margin-left: 10px;
  cursor: pointer;
  @media (max-width: 600px) {
    margin-left: 0;
    margin-top: 10px;
    height: 36px;
    width: 80px;
  }
`;

export { StyledTextForm, StyledTextFormInput, StyledTextFormButton };
