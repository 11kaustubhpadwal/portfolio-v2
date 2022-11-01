import { Grid } from "@mui/material";
import moment from "moment";
import ContentText from "../ContentText";
import { footerSocialLinks } from "./constants";
import {
  footerDateItem,
  footerSocialLinkItem,
  footerTextItem,
  footerWrapper,
} from "./styles";

const Footer = () => {
  return (
    <Grid container alignItems="center" sx={footerWrapper}>
      <Grid item sx={footerTextItem}>
        <ContentText textVariant="label" color="#838B94">
          find me on:
        </ContentText>
      </Grid>
      {footerSocialLinks.map((socialLink, index) => (
        <Grid
          item
          key={`footer-social-link-${index}`}
          sx={footerSocialLinkItem}
        >
          <a href={socialLink.href}>
            <img src={socialLink.icon} alt="social" />
          </a>
        </Grid>
      ))}
      <Grid item sx={footerDateItem} sm textAlign="end">
        <ContentText textVariant="label" color="#838B94">
          {moment().format("h:mm mm/DD/yy")}
        </ContentText>
      </Grid>
    </Grid>
  );
};

export default Footer;
