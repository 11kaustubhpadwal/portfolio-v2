import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { textStyles } from "./styles";
import { TextProps } from "./types";

const ContentText = ({
  textVariant,
  color = "#fff",
  sx,
  children,
  ...rest
}: TextProps) => {
  const [style, setStyle] = useState(textStyles["body"]);

  useEffect(() => {
    setStyle(textStyles[textVariant]);
  }, [textVariant]);

  return (
    <Typography {...rest} sx={{ ...sx, ...style, color }}>
      {children}
    </Typography>
  );
};

export default ContentText;
