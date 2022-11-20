import * as React from "react";
import Countdown from 'react-countdown';
import {CountdownRenderProps} from "react-countdown";

import {Wrapper, TimeBlock, TimeBlockWrapper, CountdownContainer, ImageDecoration, Section} from "./styles";

const CEREMONY = '01/16/2023 04:30:00';
const date = new Date(CEREMONY);

export const CountdownFC: React.FC = () => {
  const renderTimeBlocks = ({ days, hours, minutes, seconds, completed }: CountdownRenderProps) => {
    return (
      <CountdownContainer>
        <ImageDecoration src="../img/imgs/flowers3.png"/>
        <Wrapper>
          <TimeBlockWrapper>
            <TimeBlock>{days}</TimeBlock>
            <span>Días</span>
          </TimeBlockWrapper>
          <TimeBlockWrapper>
            <TimeBlock>{hours}</TimeBlock>
            <span>Horas</span>
          </TimeBlockWrapper>
          <TimeBlockWrapper>
            <TimeBlock>{minutes}</TimeBlock>
            <span>Minutos</span>
          </TimeBlockWrapper>
          <TimeBlockWrapper>
            <TimeBlock>{seconds}</TimeBlock>
            <span>Segundos</span>
          </TimeBlockWrapper>
        </Wrapper>
      </CountdownContainer>
    )
  }

  return (
      <Section>
        <Countdown
          date={date.getTime()}
          intervalDelay={0}
          precision={3}
          renderer={renderTimeBlocks}
        />
      </Section>
  )
}
