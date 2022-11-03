export interface ContactDetailsItem {
  name: string;
}

export interface DetailProps {
  contactDetailName: string;
  contactDetailsList: ContactDetailsItem[];
  isExpanded: boolean;
}
