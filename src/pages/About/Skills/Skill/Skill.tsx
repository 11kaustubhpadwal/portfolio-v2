import { Grid } from "@mui/material";
import fileIcon from "../../../../assets/file-fill.svg";
import folderIcon from "../../../../assets/folder-fill.svg";
import { informationItemHoverStyle } from "../../../../commonStyles";
import ContentText from "../../../../components/ContentText";
import Explorer from "../../../../components/Explorer";
import { SkillProps } from "./types";

const Skill = ({ skillName, skillDetails, isExpanded }: SkillProps) => {
  return (
    <Explorer
      defaultExpanded={isExpanded}
      explorerTitle={
        <Grid container gap={1} alignItems="center">
          <Grid item>
            <img
              src={folderIcon}
              style={{ width: "1.1rem" }}
              alt="accordion-title"
            />
          </Grid>
          <Grid item>
            <ContentText textVariant="codeSnippet" color="#838B94">
              {skillName}
            </ContentText>
          </Grid>
        </Grid>
      }
      explorerDetails={
        <>
          {skillDetails.map((skillItem, index) => (
            <Grid container gap={1} alignItems="center">
              <Grid item>
                <img
                  src={fileIcon}
                  style={{ width: "1.1rem" }}
                  alt="accordion-details"
                />
              </Grid>
              <Grid item>
                <ContentText
                  textVariant="codeSnippet"
                  key={`skills-details-list-item-${index}`}
                  color="#838B94"
                  sx={informationItemHoverStyle}
                >
                  {skillItem.name}
                </ContentText>
              </Grid>
            </Grid>
          ))}
        </>
      }
    >
      <></>
    </Explorer>
  );
};

export default Skill;
