import styled from "styled-components";

const Input = styled.input`
  height: 58px;
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 15px;
  color: #000000;
  font-family: "Raleway";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  margin-bottom: 13px;

  ::placeholder {
    color: #000000;
  }
  :focus {
    outline: none;
  }
`;

export default Input;
