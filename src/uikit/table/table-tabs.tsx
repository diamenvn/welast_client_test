import { Table as TableAntd } from "antd";
import style from "./style.module.scss";
import { bemModule } from "@jahed/bem";
import { ITableTabProps } from "@/interfaces";
import { useMemo } from "react";

const bem = bemModule(style);

interface Props {
  tabs: ITableTabProps;
  active: string | number;
}

const TableTabs = (props: Props) => {
  const { tabs, active } = props || {};

  const tabItems = useMemo(() => {
    return tabs.items.map((item) => ({
      ...item,
      active: item.value == active,
    }));
  }, [tabs.items, active]);

  return (
    <ul className={bem("uikit-table__tabs")}>
      {tabItems.map((tab) => (
        <li key={tab.value} onClick={() => tab.onClick && tab.onClick(tab.value)} className={bem("uikit-table__tabs__item", { active: tab.active })}>
          {tab.title} <span>({tab.count})</span>
        </li>
      ))}
    </ul>
  );
};

export default TableTabs;
