import { Header } from "./Header";
import { Row } from "./Row";
import { Table as TableTypes } from "./TableTypes";

// Ejemplo de uso
// const tableData: TableTypes = {
//   header: [
//     {
//       id: "headerRow1",
//       columns: [
//         { id: "headerCol1", type: "text", value: "Id" },
//         { id: "headerCol2", type: "text", value: "Username" },
//         { id: "headerCol3", type: "text", value: "Email" },
//         { id: "headerCol4", type: "text", value: "State" },
//         { id: "headerCol5", type: "text", value: "Actions" },
//       ],
//     },
//   ],
//   rows: [
//     {
//       id: "row1",
//       columns: [
//         { id: "col1", type: "text", value: "Hello" },
//         { id: "col2", type: "text", value: "Hello" },
//         { id: "col3", type: "text", value: "Hello" },
//         { id: "col4", type: "text", value: "Hello" },
//         { id: "col5", type: "element", element: <strong>World</strong> },
//       ],
//     },
//   ],
// };
interface TableProps {
  data: TableTypes;
}
export const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="m-auto mt-4 rounded-sm overflow-hidden">
      <thead className="bg-zinc-800 text-white">
        <Header data={data.header} />
      </thead>
      <tbody className="bg-gray-300 text-gray-950">
        <Row data={data.rows} />
      </tbody>
    </table>
  );
};
