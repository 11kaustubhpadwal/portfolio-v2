import { loadingDot } from "./styled";
import { LoadingDotProps } from "./types";

const LoadingDot = ({ duration }: LoadingDotProps) => {
  return <span style={loadingDot(duration)}>.</span>;
};

export default LoadingDot;
