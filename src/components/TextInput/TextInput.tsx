import { Box, TextField, TextFieldProps } from "@mui/material";
import ContentText from "../ContentText";
import { textField } from "./styles";

const TextInput = ({ label, ...rest }: TextFieldProps) => {
  return (
    <Box>
      <ContentText textVariant="label" color="#838B94" mb={1}>
        {label}:
      </ContentText>
      <TextField sx={textField} fullWidth {...rest} />
    </Box>
  );
};

export default TextInput;
