import { Box, Grid } from "@mui/material";
import { useState } from "react";
import ButtonOutlined from "../../components/ButtonOutlined";
import ContentText from "../../components/ContentText";
import Page from "../../components/Page";
import TextInput from "../../components/TextInput";
import { initialContactFormData } from "./constants";
import Details from "./Details";
import {
  contactColumnWrapper,
  JSKeyWord,
  JSVarName,
  JSVarValue,
} from "./styles";

const Contact = () => {
  const [contactFormData, setContactFormData] = useState(
    initialContactFormData
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });

  const handleSubmit = () => setContactFormData(initialContactFormData);

  return (
    <Page>
      <Grid container sx={{ height: "100%" }}>
        <Grid item sm={9}>
          <Grid container p={6} alignItems="center">
            <Grid item sm={7} p={6}>
              <ContentText
                textVariant="body"
                color="#A4A8AE"
                mb={4}
              >{`// Have a project you'd like to discuss?`}</ContentText>
              <TextInput
                label="_name"
                name="name"
                onChange={handleChange}
                value={contactFormData.name}
              />
              <Box mt={3} mb={3}>
                <TextInput
                  label="_email"
                  name="email"
                  onChange={handleChange}
                  value={contactFormData.email}
                />
              </Box>
              <TextInput
                label="_message"
                multiline
                maxRows={5}
                minRows={5}
                name="message"
                onChange={handleChange}
                value={contactFormData.message}
              />
              <Box mt={3}>
                <ButtonOutlined onClick={handleSubmit}>Submit</ButtonOutlined>
              </Box>
            </Grid>
            <Grid item sm={5} p={6} sx={{ overFlowWrap: "break-word" }}>
              <ContentText textVariant="label" color="#838B94">
                <JSKeyWord>const</JSKeyWord>{" "}
                <JSVarName>contactFormData</JSVarName> = {`{`}
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
              <ContentText
                textVariant="label"
                color="#838B94"
              >{`}`}</ContentText>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={3} sx={contactColumnWrapper}>
          <ContentText textVariant="label" color="#838B94" mb={2}>
            CONTACT
          </ContentText>
          <Details />
        </Grid>
      </Grid>
    </Page>
  );
};

export default Contact;
