import { Box, BoxProps } from "@mui/material";
import Footer from "../Footer";
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
      <Footer />
    </Box>
  );
};

export default Page;
