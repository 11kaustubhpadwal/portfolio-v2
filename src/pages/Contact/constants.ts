import { FeedbackType } from "./types";

export const initialContactFormData = {
  name: "",
  email: "",
  message: "",
};

export const feedbackState = {
  message: "",
  type: FeedbackType.Success,
  isVisible: false,
};
