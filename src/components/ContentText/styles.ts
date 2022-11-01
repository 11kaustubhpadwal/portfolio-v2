import { pxToRem } from "../../utils";

export const textStyles = {
  heading: { fontSize: pxToRem(62), fontWeight: 500, fontFamily: "Fira Code" },
  subHeading: {
    fontSize: pxToRem(32),
    fontWeight: 500,
    fontFamily: "Fira Code",
  },
  body: { fontSize: pxToRem(18), fontWeight: 500, fontFamily: "Fira Code" },
  label: { fontSize: pxToRem(16), fontWeight: 500, fontFamily: "Fira Code" },
  codeSnippet: {
    fontSize: pxToRem(14),
    fontWeight: 500,
    fontFamily: "Fira Code",
  },
};
