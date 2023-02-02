import { Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import ContentText from "../../components/ContentText";
import Page from "../../components/Page";
import { listOfProjects } from "./constants";
import Project from "./Project";

const Projects = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Page>
      <Box p={6}>
        <ContentText
          textVariant="body"
          color="#A4A8AE"
          mb={4}
        >{`// Top Projects`}</ContentText>
        <Grid container>
          {listOfProjects.map((project, index) => (
            <Grid
              item
              sm={12}
              lg={4}
              key={`projects-list-item-${index}`}
              pr={isSm ? 3 : 6}
              pb={isSm ? 3 : 6}
            >
              <Project
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectLink={project.projectLink}
                codeLink={project.codeLink}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

export default Projects;
