import { Grid, Box } from "@mui/material";
import moment from "moment";
import ContentText from "../../ContentText";
import { footerSocialLinks } from "../constants";
import {
  mobileFooterWrapper,
  mobileFooterTextItem,
  mobileFooterSocialLinkItem,
  mobileFooterDateItem,
} from "./styles";

const MobileFooter = () => {
  return (
    <>
      <Grid container alignItems="center" sx={mobileFooterWrapper}>
        <Grid item sx={mobileFooterTextItem} xs>
          <ContentText textVariant="label" color="#838B94">
            find me on:
          </ContentText>
        </Grid>
        {footerSocialLinks.map((socialLink, index) => (
          <Grid
            item
            key={`footer-social-link-${index}`}
            sx={mobileFooterSocialLinkItem}
          >
            <a href={socialLink.href} target="_blank" rel="noReferrer">
              <img src={socialLink.icon} alt="social" />
            </a>
          </Grid>
        ))}
      </Grid>
      <Box sx={mobileFooterDateItem}>
        <ContentText textVariant="label" color="#838B94">
          {moment().format("hh:mm DD/MM/yy")}
        </ContentText>
      </Box>
    </>
  );
};

export default MobileFooter;
