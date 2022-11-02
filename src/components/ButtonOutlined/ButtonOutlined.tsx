import { Button, ButtonProps } from "@mui/material";
import ContentText from "../ContentText";
import { buttonOutlined } from "./styles";

const ButtonOutlined = ({ sx, children, ...rest }: ButtonProps) => {
  return (
    <Button
      sx={{
        ...sx,
        ...buttonOutlined,
        textTransform: "none",
      }}
      {...rest}
    >
      <ContentText textVariant="label" color="#648D99">
        {children}
      </ContentText>
    </Button>
  );
};

export default ButtonOutlined;
