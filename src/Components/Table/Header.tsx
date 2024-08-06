import { TableHeaderRow } from "./TableTypes";

interface HeaderProps {
  data: TableHeaderRow[];
}

export const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <>
      {data.map((headerRow) => (
        <tr key={headerRow.id}>
          {headerRow.columns.map((col) => (
            <th className="p-4" key={col.id}>{col.value}</th>
          ))}
        </tr>
      ))}
    </>
  );
};
