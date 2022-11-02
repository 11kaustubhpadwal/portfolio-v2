import { Box, Grid } from "@mui/material";
import ContentText from "../../components/ContentText";
import Page from "../../components/Page";
import { listOfProjects } from "./constants";
import Project from "./Project";

const Projects = () => {
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
            <Grid item sm={4} key={`projects-list-item-${index}`} pr={6} pb={6}>
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
