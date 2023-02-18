import { defaultBorder } from "../../commonStyles";
import styled from "@emotion/styled";

export const aboutMainWrapper = (isSm: boolean) => {
  return {
    borderLeft: isSm ? "none" : defaultBorder,
    margin: isSm ? "0" : "2rem 0 0 2rem",
  };
};

export const aboutSecondaryWrapper = (isSm: boolean) => {
  return { borderLeft: isSm ? "none" : defaultBorder };
};

export const skillsWrapper = (isMd: boolean) => {
  return {
    padding: "1rem",
    background: "#010409",
    borderLeft: isMd ? "none" : defaultBorder,
    marginTop: isMd ? "4rem" : 0,
    width: isMd ? "100%" : "auto",
  };
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
