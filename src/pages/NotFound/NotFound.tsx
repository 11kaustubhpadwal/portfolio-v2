import { Box } from "@mui/material";
import ButtonOutlined from "../../components/ButtonOutlined";
import ContentText from "../../components/ContentText";
import { Link } from "react-router-dom";
import { StrikeThrough } from "../../commonStyles";

const NotFound = () => {
  return (
    <Box m={5}>
      <ContentText textVariant="subHeading" color="#A4A8AE" mb={3}>
        &gt;_ <StrikeThrough>Page not found!</StrikeThrough>
      </ContentText>
      <ContentText textVariant="body" color="#A4A8AE" ml={7.5}>
        <StrikeThrough>
          The page you're looking for does not exist...
        </StrikeThrough>
      </ContentText>
      <Box mt={6} ml={7.5}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <ButtonOutlined>
            <StrikeThrough>Back to the home page</StrikeThrough>
          </ButtonOutlined>
        </Link>
      </Box>
    </Box>
  );
};

export default NotFound;
