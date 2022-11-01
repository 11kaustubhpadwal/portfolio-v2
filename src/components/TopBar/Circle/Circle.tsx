import { Box } from "@mui/material";
import { circle } from "./styles";
import { CircleProps } from "./types";

const Circle = ({ background, ...rest }: CircleProps) => {
  return <Box sx={{ ...circle, background }} {...rest} />;
};

export default Circle;
