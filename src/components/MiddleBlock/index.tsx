import { Slide } from "react-awesome-reveal";
import { MiddleBlockSection} from "./styles";
import React from "react";

type Direction = "down" | "left" | "right" | "up";

interface MiddleBlockProps {
  title: string;
  primaryContent: string;
  secondaryContent: string;
  button: string;
  image?: string;
  direction: Direction;
  id: string;
}

export const MiddleBlock: React.FC<Partial<MiddleBlockProps> & React.PropsWithChildren> = ({id, direction, title, primaryContent, secondaryContent, button, image, children }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection id={id}>
      <Slide direction={direction || "up"} style={{width: "100%"}}>
        {children}
      </Slide>
    </MiddleBlockSection>
  );
};
