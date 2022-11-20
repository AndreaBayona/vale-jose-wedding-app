import {LeftContentBlock} from "./LeftContentBlock";
import {RightContentBlock} from "./RightContentBlock";
import { ContentBlockProps } from "./types";
import React from "react";

export const ContentBlock: React.FC<ContentBlockProps> = (props) => {
  if (props.type === "left") return <LeftContentBlock {...props} />;
  if (props.type === "right") return <RightContentBlock {...props} />;
  return null;
};
