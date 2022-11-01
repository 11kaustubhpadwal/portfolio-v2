import { Box, BoxProps } from "@mui/material";
import Navbar from "../Navbar";
import TopBar from "../TopBar";

const Page: React.FC<BoxProps> = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={{
        ...sx,
        height: "100vh",
      }}
      {...rest}
    >
      <TopBar />
      <Navbar />
      {children}
    </Box>
  );
};

export default Page;
