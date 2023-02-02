import styled from "@emotion/styled";
import { defaultBorder } from "../../commonStyles";

export const contactColumnWrapper = {
  padding: "1rem",
  background: "#010409",
  borderLeft: defaultBorder,
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
