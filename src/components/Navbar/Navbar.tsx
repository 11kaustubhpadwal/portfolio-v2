import { Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ContentText from "../ContentText";
import { navbarLinks } from "./constants";
import { emptyGridItem, navLinkItem } from "./styles";

const Navbar = () => {
  const location = useLocation();

  return (
    <Grid container>
      {navbarLinks.map((navLink, index) => (
        <Grid
          item
          key={`navbar-link-item-${index}`}
          sx={navLinkItem(location.pathname === navLink.href, index)}
        >
          <Link to={navLink.href}>
            <ContentText
              textVariant="label"
              color={location.pathname === navLink.href ? "#F4BE52" : "#838B94"}
            >
              {navLink.name}
            </ContentText>
          </Link>
        </Grid>
      ))}
      <Grid item sm sx={emptyGridItem} />
    </Grid>
  );
};

export default Navbar;
