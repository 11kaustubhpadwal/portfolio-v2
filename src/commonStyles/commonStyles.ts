import styled from "@emotion/styled";
import { pxToRem } from "../utils";

export const defaultBorder = `${pxToRem(2)} solid #1E2D3D`;

export const informationItemHoverStyle = {
  padding: ".25rem",
  ":hover": {
    background: "#fff",
    color: "#000",
    opacity: ".8",
  },
};

export const StrikeThrough = styled.span`
  :hover {
    text-decoration: line-through;
  }
`;
