'use client';
import { ScriptProps } from 'next/script';
import styles from '@/common/styles/layout.module.scss';
import classNames from 'classnames';
import { bemModule } from '@jahed/bem';
import HeaderLeftLayout from './left.layout';
import HeaderRightLayout from './right.layout';

const bem = bemModule(styles);

const HeaderLayout: React.FC<ScriptProps> = (props) => {
  const { children } = props;
  return (
    <header
      className={classNames([
        'position-sticky',
        'd-flex',
        'flex-wrap',
        bem('header', {
          light: true,
          layout: true,
          'exist-annoucement': true,
        }),
      ])}
    >
      <div className={classNames([bem('header__container'), 'container-fluid'])}>
        <div className="row align-items-center">
          <div className="col">
            <HeaderLeftLayout />
          </div>
          <div className="col-auto">
            <HeaderRightLayout />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
