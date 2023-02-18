import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";

import ContentText from "../../components/ContentText";
import Project from "./Project";
import { listOfProjects } from "./constants";

const Projects = () => {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
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
  );
};

export default Projects;
