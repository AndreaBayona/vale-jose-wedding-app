import styled from "styled-components";

import {PEACH_PRIMARY} from "../../styles/palette";
import {PHONE_WIDTH, TABLET_WIDTH} from "../../styles/constants"

export const Wrapper  = styled.div`
  display: flex;
  gap: 40px;
  justify-content: center;

  @media all and (max-width: ${TABLET_WIDTH}px) {
    gap: 20px;
  }
  
  @media all and (max-width: ${PHONE_WIDTH}px) {
    gap: 5%;
  }
`;

export const TimeBlock = styled.div`
  background: ${PEACH_PRIMARY};
  height: 100%;
  width: 100%;
  flex: 1 1 0;
  color: white;
  font-weight: 700;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;

  @media all and (max-width: ${TABLET_WIDTH}px) {
    font-size: 46px;
  }

  @media all and (max-width: ${PHONE_WIDTH}px) {
    font-size: 36px;
  }
`;

export const TimeBlockWrapper = styled.div`
  height: 152px;
  width: 15%;
  max-width: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  
  >span {
    font-weight: 600;
  }

  @media all and (max-width: ${TABLET_WIDTH}px) {
    height: 130px;
  }

  @media all and (max-width: ${PHONE_WIDTH}px) {
    height: 110px
  }
`;

export const ImageDecoration = styled.img`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: -190px;
  width: 500px;


  @media all and (max-width: ${TABLET_WIDTH}px) {
    width: 400px;
    top: -160px;
  }

  @media all and (max-width: ${PHONE_WIDTH}px) {
    width: 300px;
    top: -120px;
  }
`;

export const CountdownContainer = styled.div`
  position: relative;
  text-align: center;
  margin-top: 40px;
`;

export const Section = styled.div`
  margin-top: 35%;

  @media all and (max-width: ${PHONE_WIDTH}px) {
    margin-top: 0;
  }
`;
