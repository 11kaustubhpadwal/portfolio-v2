import { defaultBorder } from "../../commonStyles";
import { pxToRem } from "../../utils";

export const emptyGridItem = {
  borderTop: defaultBorder,
  borderBottom: defaultBorder,
  borderLeft: defaultBorder,
  padding: ".5rem 3rem",
  background: "#010409",
};

export const navLinkItem = (isActive: boolean, index: number) => {
  return {
    borderTop: `${pxToRem(2)} solid ${isActive ? "#bf616a" : "#1E2D3D"}`,
    borderBottom: isActive ? "none" : defaultBorder,
    borderLeft: index === 0 ? "none" : defaultBorder,
    padding: ".5rem 3rem",
    background: isActive ? "#0d1117" : "#010409",
  };
};
