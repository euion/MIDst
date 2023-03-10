import styled from "styled-components";

export const BackBtnStyled = styled.button`
  display: flex;
  background: #ffffff;
  font-family: "Inter";
  font-style: normal;
  padding: 10px 15px;
  width: 120px;
  margin: 5px;
  justify-content: space-between;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 6px;
  cursor: pointer;
  border: none;
`;

export const BackBtnAlignStyled = styled.div`
  /* margin-top: 10vh; */
  display: grid;
  grid-template-columns: 50px 1fr;
  padding-left: 5%;
  text-decoration: none;
  .back-btn-link {
    text-decoration: none;
  }
  .back-btn {
    display: flex;
    background: #ffffff;
    font-family: "Inter";
    font-style: normal;
    padding: 10px 15px;
    width: 120px;
    margin: 5px;
    justify-content: space-between;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    cursor: pointer;
    border: none;
  }
`;

export const CCPAlignStyled = styled.div`
  margin-top: 10vh;
  display: grid;
  grid-template-rows: 50px 1fr;
`;
