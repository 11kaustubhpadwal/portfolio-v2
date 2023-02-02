import { useMediaQuery, useTheme } from "@mui/material";
import MobileFooter from "./MobileFooter/MobileFooter";
import NonMobileFooter from "./NonMobileFooter/NonMobileFooter";

const Footer = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return isSm ? <MobileFooter /> : <NonMobileFooter />;
};

export default Footer;
