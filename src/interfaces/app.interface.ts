export interface ITableTabItemProps {
  title: string;
  value: number | string;
  count?: number;
  onClick?: (value: number | string) => void;
}

export interface ITableTabProps {
  name: string;
  multi?: boolean;
  default?: number | string | null;
  items: Array<ITableTabItemProps>;
}
