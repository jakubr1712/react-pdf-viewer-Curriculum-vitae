export interface ParagraphProps {
  variant?: 'huge' | 'xl';
  desc: string;
  bold?: string;
  styleElement?: {
    [key: string]: string | number;
  };
}
