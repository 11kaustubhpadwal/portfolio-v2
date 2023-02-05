import { Grid } from "@mui/material";
import ContentText from "../../../components/ContentText";
import { JSKeyWord, JSVarName, JSVarValue } from "../styles";
import { ContactJSONViewProps } from "./types";

const ContactJSONView = ({ isSm, contactFormData }: ContactJSONViewProps) => {
  return (
    <Grid item sm={5} p={isSm ? 3 : 6} sx={{ wordWrap: "break-word" }}>
      <ContentText textVariant="label" color="#838B94">
        <JSKeyWord>const</JSKeyWord> <JSVarName>contactFormData</JSVarName> ={" "}
        {`{`}
      </ContentText>
      <ContentText textVariant="label" ml={2}>
        <JSVarName>name: </JSVarName>
        <JSVarValue>"{contactFormData.name}",</JSVarValue>
      </ContentText>
      <ContentText textVariant="label" ml={2}>
        <JSVarName>email: </JSVarName>
        <JSVarValue>"{contactFormData.email}",</JSVarValue>
      </ContentText>
      <ContentText textVariant="label" ml={2}>
        <JSVarName>message: </JSVarName>
        <JSVarValue>"{contactFormData.message}"</JSVarValue>
      </ContentText>
      <ContentText textVariant="label" color="#838B94">{`}`}</ContentText>
    </Grid>
  );
};

export default ContactJSONView;
