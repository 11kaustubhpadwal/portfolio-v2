import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";
import accordionIcon from "../../assets/arrow-down.svg";
import { accordion, accordionDetails, accordionSummary } from "./styles";
import { ExplorerProps } from "./types";

const Explorer = ({
  explorerTitle,
  explorerDetails,
  ...rest
}: ExplorerProps) => {
  return (
    <Accordion disableGutters {...rest} sx={accordion}>
      <AccordionSummary
        expandIcon={undefined}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={accordionSummary}
      >
        <Grid container gap={1} alignItems="center">
          <Grid item>
            <img src={accordionIcon} alt="expand-collapse" />
          </Grid>
          <Grid item>{explorerTitle}</Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails sx={accordionDetails}>
        {explorerDetails}
      </AccordionDetails>
    </Accordion>
  );
};

export default Explorer;
