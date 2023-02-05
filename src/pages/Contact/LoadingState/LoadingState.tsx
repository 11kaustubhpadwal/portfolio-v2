import ContentText from "../../../components/ContentText";
import LoadingDot from "../LoadingDot";

const LoadingState = () => {
  return (
    <ContentText textVariant="body" color="#F7BD45">
      _&gt; Please wait while your message is being sent{" "}
      <LoadingDot duration={1} />
      <LoadingDot duration={1.5} />
      <LoadingDot duration={2} />
    </ContentText>
  );
};

export default LoadingState;
