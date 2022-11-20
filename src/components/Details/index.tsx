import * as React from "react";
import {useDetectMobile} from "../../hooks/useDetectMobile";

import {Content, Wrapper, Item} from "./styles";

export const Details: React.FC = () => {
  const mobile = useDetectMobile(800);

  return (
    <Wrapper>
      <Item>
        <h6>Detalles</h6>
      </Item>
      <Content>
        <Item>
          <img src="../../img/imgs/wedding.png" height={100}/>
          <p><strong>Vestimenta</strong> <br/>
            Formal</p>
        </Item>
        <Item>
          <img src="../../img/imgs/gift-card.png" height={100}/>
          <p><strong>Regalos</strong> <br/>
            Lluvia de sobres</p>
        </Item>
      </Content>
    </Wrapper>
  )
};
