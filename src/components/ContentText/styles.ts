import { pxToRem } from "../../utils";

const commonTextStyles = {
  fontWeight: 500,
  fontFamily: "Fira Code",
  lineHeight: "1.5rem",
};

export const textStyles = {
  heading: {
    ...commonTextStyles,
    fontSize: pxToRem(62),
  },
  subHeading: {
    ...commonTextStyles,
    fontSize: pxToRem(32),
  },
  body: { ...commonTextStyles, fontSize: pxToRem(18) },
  label: { ...commonTextStyles, fontSize: pxToRem(16) },
  codeSnippet: { ...commonTextStyles, fontSize: pxToRem(14) },
};
