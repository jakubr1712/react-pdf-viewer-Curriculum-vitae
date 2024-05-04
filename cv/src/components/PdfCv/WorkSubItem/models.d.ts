export interface WorkSubItemProps {
  item:
    | {
        name: string;
        description: string;
        date: string;
        technologies: string;
      }
    | undefined;
}
