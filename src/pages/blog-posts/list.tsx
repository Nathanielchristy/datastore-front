import {
  DateField,
  DeleteButton,
  EditButton,
  List,
  MarkdownField,
  ShowButton,
  useTable,
} from "@refinedev/antd";
import { BaseRecord, useMany } from "@refinedev/core";
import { Space, Table } from "antd";

export const BlogPostList = () => {
  const { tableProps } = useTable({
    syncWithLocation: true,
  });

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="ID" title={"ID"} />
        <Table.Column dataIndex="firstName" title={"First Name"} />
        <Table.Column dataIndex="lastName" title={"Last Name"} />
        <Table.Column dataIndex="email" title={"Email"} />
      </Table>
    </List>
  );
};
