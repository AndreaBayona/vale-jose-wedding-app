import { Container, TextWrapper, Content } from "./styles";
import React from "react";

interface Props {
  title: string;
  content: string;
}

export const Block: React.FC<Props> = ({ title, content }) => {
  return (
    <Container>
      <h6>{title}</h6>
      <TextWrapper>
        <Content>{content}</Content>
      </TextWrapper>
    </Container>
  );
};
