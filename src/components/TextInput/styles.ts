import { defaultBorder } from "../../commonStyles";

export const textField = {
  border: defaultBorder,
  color: "#838B94",
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiInputBase-input": {
    color: "#838B94",
    padding: ".5rem",
    fontFamily: "Fira Code",
    fontWeight: 500,
  },
};
