import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import { feedbackState, initialContactFormData } from "./constants";

import ButtonOutlined from "../../components/ButtonOutlined";
import ContactJSONView from "./ContactJSONView";
import ContentText from "../../components/ContentText";
import Details from "./Details";
import { FeedbackType } from "./types";
import LoadingState from "./LoadingState";
import { StrikeThrough } from "../../commonStyles";
import TextInput from "../../components/TextInput";
import { contactColumnWrapper } from "./styles";
import { sendContactFormEmail } from "../../api/contactForm";
import { useState } from "react";

const Contact = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.down("md"));
  const isSm = useMediaQuery(theme.breakpoints.down("sm"));

  const [contactFormData, setContactFormData] = useState(
    initialContactFormData
  );

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(feedbackState);

  const handleSendContactFormDataEmail = async () => {
    setFeedback(feedbackState);
    setLoading(true);

    try {
      await sendContactFormEmail(contactFormData);
      setContactFormData(initialContactFormData);
      setFeedback({
        message:
          "Thank you for contacting. Your message has been sent successfully.",
        type: FeedbackType.Success,
        isVisible: true,
      });
    } catch (__error) {
      setFeedback({
        message: "Sorry, an error occurred. Please try again.",
        type: FeedbackType.Error,
        isVisible: true,
      });
    }

    setLoading(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) =>
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });

  return (
    <Grid container sx={{ height: "100%" }}>
      <Grid item md={12} lg={9}>
        <Grid container p={6} alignItems="center">
          <Grid item sm={loading ? 12 : 7} p={isSm ? 3 : 6}>
            <ContentText
              textVariant="body"
              color="#A4A8AE"
              mb={4}
            >{`// Have a project you'd like to discuss?`}</ContentText>
            {loading && <LoadingState />}
            {!loading && (
              <>
                <TextInput
                  label="_name"
                  name="name"
                  onChange={handleChange}
                  value={contactFormData.name}
                  disabled={loading}
                />
                <Box mt={3} mb={3}>
                  <TextInput
                    label="_email"
                    name="email"
                    onChange={handleChange}
                    value={contactFormData.email}
                    disabled={loading}
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
                  disabled={loading}
                />
                <Box mt={3}>
                  <ButtonOutlined
                    onClick={handleSendContactFormDataEmail}
                    disabled={loading}
                  >
                    <StrikeThrough>Submit</StrikeThrough>
                  </ButtonOutlined>
                </Box>
              </>
            )}
            {feedback.isVisible && (
              <ContentText
                textVariant="body"
                mt={6}
                color={
                  feedback.type === FeedbackType.Success ? "#5ECB50" : "#F7BD45"
                }
              >
                {feedback.message}
              </ContentText>
            )}
          </Grid>
          {!loading && (
            <ContactJSONView isSm={isSm} contactFormData={contactFormData} />
          )}
        </Grid>
      </Grid>
      <Grid item md={12} lg={3} sx={contactColumnWrapper(isMd)}>
        <ContentText textVariant="label" color="#838B94" mb={2}>
          CONTACT
        </ContentText>
        <Details />
      </Grid>
    </Grid>
  );
};

export default Contact;
