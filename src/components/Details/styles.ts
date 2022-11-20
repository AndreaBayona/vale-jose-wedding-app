import styled from "styled-components";
import {PHONE_WIDTH} from "../../styles/constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10%;
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  gap: 10%;
  align-items: center;
  background: #F5F5F5;
  width: 100%;
  justify-content: space-between;
  height: 250px;
  padding: 40px;
  margin: 0 -25%;
  border-radius: 15px;
  
  @media all and (max-width: ${PHONE_WIDTH}px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const Item = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  text-align: left;
`;

export const TitleAndInfo = styled.div`
  
`;
