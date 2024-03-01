'use client';
import { ScriptProps } from 'next/script';
import HeaderLayout from './header/header.layout';
import SidebarLayout from './sidebar/sidebar.layout';
import styles from '@/common/styles/layout.module.scss';
import { bemModule } from '@jahed/bem';
import classNames from 'classnames';

const bem = bemModule(styles);

const MainLayout: React.FC<ScriptProps> = (props) => {
  const { children } = props;

  return (
    <div className={bem('wrapper', { layout: true })}>
      <HeaderLayout />
      <main className={bem('main-wrapper')}>
        <SidebarLayout />
        <article className={classNames([bem('page')])}>{children}</article>
      </main>
    </div>
  );
};

export default MainLayout;
