import {ReactNode} from "react";

export interface ContentBlockProps {
  icon?: string;
  title: string;
  content: string;
  section?: any;
  button?: any;
  id: string;
  type?: string;
  light?: boolean;
  subtitle?: string;
  children?: ReactNode;
}
