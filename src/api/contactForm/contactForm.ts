import emailjs from "@emailjs/browser";

export const sendContactFormEmail = async (
  formData: Record<string, unknown>
) => {
  return await emailjs.send(
    process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
    process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
    formData,
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY || ""
  );
};
