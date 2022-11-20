import styled from "styled-components";
import {PHONE_WIDTH} from "../../styles/constants";

export const Wrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  
  margin: 120px 0;
`;

export const InvitationImg = styled.img<{mobile?: boolean}>`
  margin-left: auto;
  margin-right: auto;
  height: ${({mobile}) => mobile ? "700px" : "500px"};

  @media all and (max-width: ${PHONE_WIDTH}px) {
    height: 500px;
  }
`;

export const Content = styled.div`
  position: absolute;
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;

  @media all and (max-width: ${PHONE_WIDTH}px) {
    &>p {
      width: 290px;
      font-size: 1rem;
    }
  }
`;
