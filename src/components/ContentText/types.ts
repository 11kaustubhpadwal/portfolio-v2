import { TypographyProps } from "@mui/material";

export type TextVariant =
  | "heading"
  | "body"
  | "subHeading"
  | "label"
  | "codeSnippet";

export interface TextProps extends TypographyProps {
  textVariant: TextVariant;
}
