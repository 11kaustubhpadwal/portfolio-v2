import styled from "@emotion/styled";
import { defaultBorder } from "../../commonStyles";

export const aboutMainWrapper = {
  borderLeft: defaultBorder,
  margin: "2rem 0 0 2rem",
};

export const aboutSecondaryWrapper = { borderLeft: defaultBorder };

export const skillsWrapper = {
  padding: "1rem",
  background: "#010409",
  borderLeft: defaultBorder,
};

export const informationTextHoverStyles = {
  padding: ".5rem",
  ":hover": {
    background: "#fff",
    color: "#000",
    opacity: ".8",
  },
};

export const subHeadingAnimationStyles = {
  animationName: "blue-to-white",
  animationDuration: "2s",
  animationIterationCount: "infinite",
  animationDirection: "alternate",
};

export const HighLight = styled.span`
  color: #00ca4e;
  animation-name: green-to-yellow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;
