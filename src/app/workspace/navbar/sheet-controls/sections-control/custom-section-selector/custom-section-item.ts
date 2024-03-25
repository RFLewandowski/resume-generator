export enum SectionType {
  TextSection = "CustomTextSection",
  ListSection = "CustomListSection",
}

export enum Placement {
  Primary = "PrimaryPlacement",
  Secondary = "SecondaryPlacement",
}

export type CustomSectionItem = {
  type: SectionType;
  placement: Placement;
};
