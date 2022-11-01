import { Grid } from "@mui/material";
import ContentText from "../ContentText";
import Circle from "./Circle";

const TopBar = () => {
  return (
    <Grid container gap={1} alignItems="center" padding=".5rem">
      <Grid item>
        <Circle background={"#FF605C"} />
      </Grid>
      <Grid item>
        <Circle background={"#FFBD44"} />
      </Grid>
      <Grid item>
        <Circle background={"#00CA4E"} />
      </Grid>
      <Grid item sm textAlign={"center"}>
        <ContentText textVariant="label">kaustubh_padwal</ContentText>
      </Grid>
    </Grid>
  );
};

export default TopBar;
