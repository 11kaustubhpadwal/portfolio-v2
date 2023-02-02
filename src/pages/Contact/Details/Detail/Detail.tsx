import { Grid } from "@mui/material";
import fileIcon from "../../../../assets/file-fill.svg";
import folderIcon from "../../../../assets/folder-fill.svg";
import { informationItemHoverStyle } from "../../../../commonStyles";
import ContentText from "../../../../components/ContentText";
import Explorer from "../../../../components/Explorer";
import { DetailProps } from "./types";

const Detail = ({
  contactDetailName,
  contactDetailsList,
  isExpanded,
}: DetailProps) => {
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
              {contactDetailName}
            </ContentText>
          </Grid>
        </Grid>
      }
      explorerDetails={
        <>
          {contactDetailsList.map((contactDetailItem, index) => (
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
                  key={`contact-info-details-list-item-${index}`}
                  color="#838B94"
                  sx={informationItemHoverStyle}
                >
                  {contactDetailItem.name}
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

export default Detail;
