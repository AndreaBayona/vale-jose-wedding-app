import styled from "styled-components";
import {PHONE_WIDTH} from "../../styles/constants";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
  margin: 15% -15% 8% -15%;
  background: #F5F5F5;

  @media all and (max-width: 800px) {
    flex-direction: column-reverse;
    margin-top: 26%;
    height: 1200px;
  }
`;

export const MapWrapper = styled.div`
  height: 600px;
  width: 70%;
  
  @media all and (max-width: 800px) {
    width: 100%;
  }
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  padding: 30px;
  max-width: 400px;
  flex: 1 1 0;
  
  &>h6 {
    font-size: 2.5rem;
  }
  
  &>p {
    font-size: 1.1rem;
  }
`;

export const Divider = styled.div`
  height: 7px;
  width: 160px;
  background: #D9D9D9;
  border-radius: 5%;
  margin-bottom: 20px;
`;
