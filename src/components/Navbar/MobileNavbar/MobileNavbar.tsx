import { Box } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ContentText from "../../ContentText";
import { navbarLinks } from "../constants";
import { mobileNavLinkItem } from "./styles";

const MobileNavbar = () => {
  const location = useLocation();

  return (
    <>
      {navbarLinks.map((navLink, index) => (
        <Box
          key={`mobile-navbar-link-item-${index}`}
          sx={mobileNavLinkItem(location.pathname === navLink.href)}
        >
          <Link to={navLink.href}>
            <ContentText
              textVariant="label"
              color={location.pathname === navLink.href ? "#F4BE52" : "#838B94"}
            >
              {navLink.name}
            </ContentText>
          </Link>
        </Box>
      ))}
    </>
  );
};

export default MobileNavbar;
