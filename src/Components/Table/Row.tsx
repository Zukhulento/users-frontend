import { TableRow } from "./TableTypes";

interface RowProps {
  data: TableRow[];
}
export const Row: React.FC<RowProps> = ({ data }) => {
  return (
    <>
      {data.map((row) => (
        <tr key={row.id}>
          {row.columns.map((col) => (
            <td key={col.id} className="p-4">
              {col.type === "text" ? col.value : col.element}
            </td>
          ))}
        </tr>
      ))}
    </>
  );
};
