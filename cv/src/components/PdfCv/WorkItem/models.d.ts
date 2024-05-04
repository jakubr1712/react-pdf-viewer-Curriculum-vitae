export interface WorkItemProps {
  work: {
    position: string;
    company: string;
    city: string;
    date: string;
    projects: (
      | {
          name: string;
          description: string;
          date: string;
          technologies: string;
        }
      | undefined
    )[];
  };
}
