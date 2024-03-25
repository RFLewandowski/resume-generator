export enum SectionType {
  TextSection = "Text Section",
  ListSection = "List Section",
}

export enum Placement {
  Primary = "PrimaryPlacement",
  Secondary = "SecondaryPlacement",
}

export type CustomSectionItem = {
  type: SectionType;
  placement: Placement;
};
