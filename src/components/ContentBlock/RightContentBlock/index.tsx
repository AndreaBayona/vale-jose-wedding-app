import { Row, Col } from "antd";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import { Fade } from "react-awesome-reveal";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import React from "react";
import {ImageBackground} from "../../ImageBackground";

export const RightContentBlock: React.FC<ContentBlockProps> = ({
  title,
  content,
  button,
  icon,
  id,
  light,
  subtitle,
  children,
}) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer light={!!light}>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={14} xs={24}>
            <ContentWrapper light={!!light}>
              <Content noLineHeight>{subtitle}</Content>
              <h6>{(title)}</h6>
              <Content>{(content)}</Content>
              <ButtonWrapper>
                {typeof button === "object" &&
                  button.map((item: any, id: number) => {
                    return (
                      <Button
                        key={id}
                        color={item.color}
                        fixedWidth={true}
                        onClick={() => scrollTo("about")}
                      >
                        {(item.title)}
                      </Button>
                    );
                  })}
              </ButtonWrapper>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            {icon &&
                <SvgIcon src={icon} width="100%" height="100%" />}
            {children}
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};
