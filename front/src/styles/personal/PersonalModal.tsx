import styled from "styled-components";

export const PersonalModalStyled = styled.div`
  z-index: 10000;
  position: absolute;
  left: 17vw;
  top: 18vh;
  width: 200px;
  height: 100px;
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  ul {
    padding: 5px;
    list-style: none;
  }
  li {
    text-align: start;
    padding-left: 15px;
  }
  .link {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  hr {
    margin: 10px;
  }
`;
