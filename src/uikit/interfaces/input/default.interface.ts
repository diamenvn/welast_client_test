import { InputHTMLAttributes } from 'react';

export interface InputProps {
  onClick?: (e: any) => void;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
  onPressEnter?: (e: any) => void;
  onInput?: (e: any) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
  size?: 'small' | 'middle' | 'large';
  width?: string;
  height?: string;
  style?: any;
  iconRender?: any;
  defaultValue?: any;
  status?: any;
  value?: InputHTMLAttributes<HTMLInputElement>['value'];
  formatter?: (
    value: (string | number) | undefined,
    info: {
      userTyping: boolean;
      input: string;
    },
  ) => string;
  parser?: (displayValue: string | undefined) => string | number;
  prefix?: React.ReactNode | string;
  addonafter?: React.ReactNode | string;
  addonbefore?: React.ReactNode | string;
  precision?: number;
  min?: number;
  max?: number;
  readOnly?: boolean;
  prefixalign?: 'left' | 'right';
  suffix?: React.ReactNode | string;
  showCount?: boolean;
  maxLength?: number;
  onKeyDown?: any;
}
