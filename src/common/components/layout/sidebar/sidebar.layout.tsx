'use client';

import { ScriptProps } from 'next/script';
import styles from '@/common/styles/sidebar.module.scss';
import { bemModule } from '@jahed/bem';
import { Menu, MenuProps } from 'antd';
import { SIDEBAR_CONFIG, SIDEBAR_CONFIG_STYLES, SIDEBAR_SELECTED_DEFAULT } from '@/config/sidebar.config';
import { memo, useMemo } from 'react';
import classNames from 'classnames';
import { FaChartArea, FaBagShopping, FaTags, FaUserPen, FaStore } from '@/uikit/icon/index.icon';
import { CONFIG_NAME_ICON } from '@/uikit/icon/_config.icon';
import { MenuClickEventHandler } from '@/interfaces/sidebar.interface';
import { usePathname, useRouter } from 'next/navigation';
import { IoMdAnalytics } from 'react-icons/io';

type MenuItem = Required<MenuProps>['items'][number];

const bem = bemModule(styles);

const DEFINE_NAME_ICON = [
  {
    name: CONFIG_NAME_ICON.CHART,
    icon: <FaChartArea size={17} />,
  },
  {
    name: CONFIG_NAME_ICON.BAG,
    icon: <FaBagShopping size={17} />,
  },
  {
    name: CONFIG_NAME_ICON.TAG,
    icon: <FaTags size={17} />,
  },
  {
    name: CONFIG_NAME_ICON.USER,
    icon: <FaUserPen size={17} />,
  },
  {
    name: CONFIG_NAME_ICON.STORE,
    icon: <FaStore size={17} />,
  },
  {
    name: CONFIG_NAME_ICON.REPORT,
    icon: <IoMdAnalytics size={18} />,
  },
];

const SidebarLayout: React.FC<ScriptProps> = (_) => {
  const router = useRouter();
  const pathname = usePathname();

  function getItem(label: React.ReactNode, key?: React.Key | null, icon?: string, children?: MenuItem[], type?: 'group'): MenuItem {
    return {
      key,
      icon: DEFINE_NAME_ICON.find((_icon) => _icon.name == icon)?.icon,
      children,
      label,
      type,
    } as MenuItem | any;
  }

  const items = useMemo(() => [...(SIDEBAR_CONFIG.items?.map((item: any) => getItem(item?.title, item?.key, item?.icon)) ?? [])], SIDEBAR_CONFIG.items);

  const selectedValueMenu = useMemo(() => {
    if (!pathname) {
      return SIDEBAR_SELECTED_DEFAULT;
    }
    return pathname.replace('/', '');
  }, [pathname, SIDEBAR_SELECTED_DEFAULT]);

  const onClickSideBar = (e: MenuClickEventHandler) => {
    router.push(`/${e.keyPath?.join('/')}`, { scroll: true });

    // window.history.pushState({ path: `/${e.keyPath?.join('/')}` }, '', `/${e.keyPath?.join('/')}`);
  };

  return (
    <aside className={classNames(['p-m-safe-area', bem('sidebar', { layout: true, light: true, 'exist-annoucement': true })])}>
      <Menu
        theme={SIDEBAR_CONFIG.theme}
        className={SIDEBAR_CONFIG.className}
        style={SIDEBAR_CONFIG_STYLES}
        selectedKeys={selectedValueMenu as any}
        onClick={onClickSideBar}
        mode="inline"
        items={items}
      />
    </aside>
  );
};

export default memo(SidebarLayout);
