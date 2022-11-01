import { Box, Grid } from "@mui/material";
import ContentText from "../../components/ContentText";
import Page from "../../components/Page";
import Skills from "./Skills";
import {
  aboutMainWrapper,
  aboutSecondaryWrapper,
  HighLight,
  skillsWrapper,
} from "./styles";

const About = () => {
  return (
    <Page>
      <Grid container sx={{ height: "100%" }}>
        <Grid item sm={9}>
          <Box sx={aboutMainWrapper} paddingTop="2rem" paddingBottom="2rem">
            <Box padding="2rem" marginLeft="2rem" sx={aboutSecondaryWrapper}>
              <ContentText textVariant="body" mb={2} color="#838B94">
                I am a <HighLight>frontend developer</HighLight> who is well
                versed in modern javascript frameworks and libraries and ready
                to solve new challenges.
              </ContentText>
              <ContentText textVariant="body" mb={2} color="#838B94">
                I have <HighLight>2 years</HighLight> of{" "}
                <HighLight>commercial work experience</HighLight>. I have
                experience working in an international environment.
              </ContentText>
              <ContentText textVariant="body" color="#838B94">
                I create accessible and responsive{" "}
                <HighLight>websites</HighLight> and{" "}
                <HighLight>web applications</HighLight> using the latest
                technologies.
              </ContentText>
            </Box>
          </Box>
        </Grid>
        <Grid item sm={3} sx={skillsWrapper}>
          <ContentText textVariant="label" color="#838B94" mb={2}>
            SKILLS
          </ContentText>
          <Skills />
        </Grid>
      </Grid>
    </Page>
  );
};

export default About;
