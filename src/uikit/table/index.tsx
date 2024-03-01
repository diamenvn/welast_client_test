'use client';
import { Input, Table as TableAntd } from 'antd';
import style from './style.module.scss';
import { bemModule } from '@jahed/bem';
import { useRef } from 'react';
import TableTabs from './table-tabs';

const bem = bemModule(style);

const Table = (props: any) => {
  const { tabs = null, tabActive = null, search, searchValue = '', searchPlaceholder = '' } = props || {};
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={contentRef} className={bem('uikit-table')}>
      {tabs && <TableTabs tabs={tabs} active={tabActive} />}
      <div className={bem('uikit-table__body')}>
        {search && (
          <div className="p-2">
            <Input size="large" onChange={search} placeholder={searchPlaceholder} value={searchValue} />
          </div>
        )}
        <TableAntd {...props} className="override-table-antd" />
      </div>
    </div>
  );
};

export default Table;
