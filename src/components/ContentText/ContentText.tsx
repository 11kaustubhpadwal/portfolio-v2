import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { textStyles } from "./styles";
import { ContentTextProps } from "./types";

const ContentText = ({
  textVariant,
  color = "#fff",
  sx,
  children,
  ...rest
}: ContentTextProps) => {
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
