import styled, {css} from "styled-components";
import {PHONE_WIDTH, TABLET_WIDTH} from "../../../styles/constants";

export const RightBlockContainer = styled.section<{light?: boolean}>`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }

  @media only screen and (max-width: 575px) {
    ${({light}) => light && css`
    &>* {
      padding: 7rem 0 3rem;
    }
  `};
  }
`;

export const Content = styled("p")<{noLineHeight?: boolean}>`
  margin: 1.5rem 0 2rem 0;
  
  ${ ({noLineHeight}) => noLineHeight && css`
    line-height: 0;
  `};

  @media all and (max-width: ${TABLET_WIDTH}px) {
    font-size: 18px;
  }

  @media all and (max-width: ${PHONE_WIDTH}px) {
    font-size: 15px;
  }
  
`;

export const ContentWrapper = styled.div<{light?: boolean}>`
  position: relative;
  max-width: 540px;
  
  ${({light}) => light && css`
    &>* {
      color: white;
    }
  `};

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
