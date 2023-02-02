import { useMediaQuery, useTheme } from "@mui/material";
import MobileNavbar from "./MobileNavbar/MobileNavbar";
import NonMobileNavbar from "./NonMobileNavbar/NonMobileNavbar";

const Navbar = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return isSm ? <MobileNavbar /> : <NonMobileNavbar />;
};

export default Navbar;
