import { Box, Grid } from "@mui/material";
import ContentText from "../../components/ContentText";
import Page from "../../components/Page";
import Skills from "./Skills";
import {
  aboutMainWrapper,
  aboutSecondaryWrapper,
  skillsWrapper,
} from "./styles";

const About = () => {
  return (
    <Page>
      <Grid container sx={{ height: "100%" }}>
        <Grid item sm={9} padding="7rem">
          <Box sx={aboutMainWrapper} paddingTop="2rem" paddingBottom="2rem">
            <Box padding="2rem" marginLeft="2rem" sx={aboutSecondaryWrapper}>
              <ContentText textVariant="body" mb={2}>
                I am a frontend developer who is well versed in modern
                javascript frameworks and libraries and ready to solve new
                challenges.
              </ContentText>
              <ContentText textVariant="body" mb={2}>
                I have 2 years of commercial work experience. I have experience
                working in an international environment.
              </ContentText>
              <ContentText textVariant="body">
                I create accessible and responsive websites and web applications
                using the latest technologies.
              </ContentText>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={3} sx={skillsWrapper}>
          <ContentText textVariant="label">SKILLS</ContentText>
          <Skills />
        </Grid>
      </Grid>
    </Page>
  );
};

export default About;
