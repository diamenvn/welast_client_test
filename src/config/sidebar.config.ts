import { CONFIG_NAME_ICON } from '@/uikit/icon/_config.icon';
import { MenuProps } from 'antd';

export const SIDEBAR_CONFIG: MenuProps = {
  theme: 'light',
  className: 'override-sidebar-antd',
  items: [
    {
      title: 'Bài viết',
      key: 'posts',
      icon: CONFIG_NAME_ICON.TAG,
    }
  ],
};

export const SIDEBAR_CONFIG_STYLES = {
  background: 'transparent',
  fontWeight: 500,
};

export const SIDEBAR_SELECTED_DEFAULT: string[] = ['posts'];
