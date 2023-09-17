export type {
  TableColumnFilterPlacement,
  TableColumnSortOrders,
  TableColumnSortable,
  TableColumnRenderer,
  TableColumnScope,
  TableColumnFixed,
  TableColumnType,
  PaginationProps,
  PureTableProps,
  AdaptiveConfig,
  LoadingConfig,
  TableColumns,
  TableColumn,
  TableProps,
  Layout,
  Effect,
  Align,
  Size
} from "./types";

import type { App } from "vue";
import Table from "./components/table";

export const PureTable = Object.assign(Table, {
  // 使用 app.component 注册 Table 组件
  install: function (app: App) {
    app.component(Table.name, Table);
  }
});

export default PureTable;
