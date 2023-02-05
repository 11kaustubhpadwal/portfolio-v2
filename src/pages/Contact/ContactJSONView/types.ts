export interface ContactJSONViewProps {
  isSm: boolean;
  contactFormData: ContactFormData;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
