import styled from "styled-components";

export const DiaryBottomCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  height: 100%;
  box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;
  margin: 30px;
  a {
    text-decoration: none;
  }
`;
export const DBCEmotionBtn = styled.button`
  background: #a59ce1;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  color: white;
  align-items: center;
  padding: 10px 15px;
  width: 116px;
  height: 42px;
`;
export const DBCGrammerBtn = styled.button`
  background: #7ec9ca;
  border-radius: 6px;
  border: none;
  font-size: 16px;
  display: flex;
  justify-content: space-around;
  color: white;
  align-items: center;
  padding: 10px 15px;
  width: 116px;
  height: 42px;
`;

export const DiaryBottomOpenCard = styled.div`
  .DBOC-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .DBOC-bottom {
    display: flex;
    flex-direction: column;
  }
  align-items: center;
  border-radius: 20px;
  height: 100%;
  box-shadow: 3px 3px 3px 3px rgba(128, 128, 128, 0.252);
  background-color: white;
  padding: 20px;
  margin: 30px;
  a {
    text-decoration: none;
  }
`;
