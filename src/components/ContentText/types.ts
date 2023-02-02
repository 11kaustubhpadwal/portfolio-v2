import { TypographyProps } from "@mui/material";

export type TextVariant =
  | "heading"
  | "body"
  | "subHeading"
  | "label"
  | "codeSnippet";

export interface ContentTextProps extends TypographyProps {
  textVariant: TextVariant;
}
