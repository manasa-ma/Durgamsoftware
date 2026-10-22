export interface NavSubItem {
  title: string;
  to: string;
  description?: string;
  isAction?: boolean;
}

export interface NavItem {
  label: string;
  to: string;
  children?: NavSubItem[];
  isButton?: boolean;
  buttonVariant?: 'primary' | 'secondary';
}
