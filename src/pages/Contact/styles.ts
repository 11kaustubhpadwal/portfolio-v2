import styled from "@emotion/styled";
import { defaultBorder } from "../../commonStyles";

export const contactColumnWrapper = (isMd: boolean) => {
  return {
    padding: "1rem",
    background: "#010409",
    borderLeft: isMd ? "none" : defaultBorder,
    marginTop: isMd ? "2rem" : 0,
    width: isMd ? "100%" : "auto",
  };
};

export const JSKeyWord = styled.span`
  color: #c98be0;
`;

export const JSVarName = styled.span`
  color: #4051b7;
  :hover {
    color: #fff;
    opacity: 0.8;
  }
`;

export const JSVarValue = styled.span`
  color: #f7bd45;
  :hover {
    color: #fff;
    opacity: 0.8;
  }
`;
