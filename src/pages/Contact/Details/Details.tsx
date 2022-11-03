import { contactColumnDetails } from "./constants";
import Detail from "./Detail";

const Details = () => {
  return (
    <>
      {contactColumnDetails.map((contactItem, index) => (
        <Detail
          key={`contact-page-list-explorer-item-${index}`}
          contactDetailName={contactItem.contactDetailName}
          contactDetailsList={contactItem.contactDetailsList}
          isExpanded={contactItem.isExpanded}
        />
      ))}
    </>
  );
};

export default Details;
