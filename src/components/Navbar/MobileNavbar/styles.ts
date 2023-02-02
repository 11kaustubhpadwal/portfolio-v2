import { defaultBorder } from "../../../commonStyles";
import { pxToRem } from "../../../utils";

export const mobileNavLinkItem = (isActive: boolean) => {
  return {
    borderTop: `${pxToRem(2)} solid ${isActive ? "#bf616a" : "#1E2D3D"}`,
    padding: ".5rem 3rem",
    background: isActive ? "#0d1117" : "#010409",
  };
};
