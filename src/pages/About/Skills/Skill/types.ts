export interface SkillDetailsItem {
  name: string;
}

export interface SkillProps {
  skillName: string;
  skillDetails: SkillDetailsItem[];
  isExpanded: boolean;
}
