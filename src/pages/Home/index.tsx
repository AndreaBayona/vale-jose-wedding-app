import React, { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";

import {ContentBlock} from "../../components/ContentBlock";
import {MiddleBlock} from "../../components/MiddleBlock";
import Container from "../../common/Container";
import ScrollToTop from "../../common/ScrollToTop";
import {Carousel} from "../../components/Carousel";
import {CountdownFC as Countdown} from "../../components/CountdownFC";
import {Invitation} from "../../components/Invitation";
import {Location} from "../../components/Location";
import {Details} from "../../components/Details";

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        subtitle={IntroContent.subtitle}
        id="intro"
        light
      />
      <MiddleBlock direction="up" id="ourWedd">
        <Countdown/>
      </MiddleBlock>
      <MiddleBlock direction="left">
        <Carousel
          imagesRoutes={["../img/imgs/img1.png", "../img/imgs/img2.png", "../img/imgs/img3.png"]}
          text="“Que todas las noches sean noches de boda, que todas las lunas sean lunas de miel.”"
        />
      </MiddleBlock>
      <MiddleBlock direction="right" id="location">
        <Location/>
      </MiddleBlock>
      <MiddleBlock direction="left" id="details">
        <Details/>
      </MiddleBlock>
      <MiddleBlock direction="right" id="rspv">
        <Invitation/>
      </MiddleBlock>
    </Container>
  );
};

export default Home;
