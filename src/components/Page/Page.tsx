import { Box, BoxProps } from "@mui/material";
import Footer from "../Footer";
import Navbar from "../Navbar";
import TopBar from "../TopBar";
import { page, pageContentWrapper } from "./styles";

const Page: React.FC<BoxProps> = ({ sx, children, ...rest }) => {
  return (
    <Box
      sx={{
        ...sx,
        ...page,
      }}
      {...rest}
    >
      <TopBar />
      <Navbar />
      <Box sx={pageContentWrapper}>{children}</Box>
      <Footer />
    </Box>
  );
};

export default Page;
