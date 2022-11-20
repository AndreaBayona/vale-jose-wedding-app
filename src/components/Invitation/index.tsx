import * as React from "react";
import {useDetectMobile} from "../../hooks/useDetectMobile";

import {Wrapper, InvitationImg, Content} from "./styles";
import {Button} from "../../common/Button";

export const Invitation: React.FC = () => {
  const mobile = useDetectMobile(800);

  return (
    <Wrapper>
      <Content>
        <h6>RSPV</h6>
        <p>No olvides avisarnos si puedes acompañarnos respondiendo el siguiente formulario.</p>
        <Button
          color="#CDCAB0"
          fixedWidth={true}
          onClick={undefined}
          fontColor="white"
          noBorder
        >
          Formulario
        </Button>
      </Content>
      <InvitationImg
        mobile={mobile}
        src={mobile ? "../img/imgs/inviteMobile.png" : "../img/imgs/inviteDesktop.png"}
      />
    </Wrapper>
  )
};
