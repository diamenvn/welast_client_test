export interface ContentProps {
    padding?: number;
    margin?: number;
    size?: 'small' | 'medium' | 'large';
    children?: React.ReactNode;
  }
  
  export interface HeaderContentProps extends ContentProps {
    leftContent?: React.ReactNode;
    rightContent?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
  }
  