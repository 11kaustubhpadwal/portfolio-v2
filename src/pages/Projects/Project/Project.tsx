import { Box } from "@mui/material";
import {
  defaultBorder,
  informationItemHoverStyle,
  StrikeThrough,
} from "../../../commonStyles";
import ButtonOutlined from "../../../components/ButtonOutlined";
import ContentText from "../../../components/ContentText";
import { projectDescriptionWrapper, projectInfoWrapper } from "./styles";
import { ProjectProps } from "./types";

const Project = ({
  projectName,
  projectDescription,
  projectLink,
  codeLink,
}: ProjectProps) => {
  return (
    <Box>
      <Box p={3} sx={projectInfoWrapper} mb={4}>
        <ContentText textVariant="label" color="#9F7D3A">
          <StrikeThrough>{projectName}</StrikeThrough>
        </ContentText>
        <Box sx={projectDescriptionWrapper} mt={3} pt={4} pb={4} mb={1}>
          <Box sx={{ borderLeft: defaultBorder }} ml={2} pl={2} mb={3} mr={2}>
            <ContentText
              textVariant="codeSnippet"
              color="#838B94"
              sx={informationItemHoverStyle}
            >
              {projectDescription}
            </ContentText>
          </Box>
          <Box sx={{ background: "#8A6E35" }}>
            <a href={projectLink} target="_blank" rel="noreferrer">
              <ContentText
                textVariant="codeSnippet"
                color="#000"
                pl={4}
                mt={1}
                mb={1}
              >
                <StrikeThrough>see the project</StrikeThrough>
              </ContentText>
            </a>
          </Box>
        </Box>
      </Box>
      <a href={codeLink} target="_blank" rel="noreferrer">
        <ButtonOutlined>
          <StrikeThrough>Check in Github</StrikeThrough>
        </ButtonOutlined>
      </a>
    </Box>
  );
};

export default Project;
