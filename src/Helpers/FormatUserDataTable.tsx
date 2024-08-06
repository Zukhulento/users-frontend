import { Badges } from "../Components/Badges/Badges";
import { Table, TableRow } from "../Components/Table/TableTypes";

interface StateProps {
  id: number;
  name: string;
}

interface FormatTableProps {
  id: number;
  name: string;
  username: string;
  lastName: string;
  birthdate: string | null;
  email: string;
  address: string;
  photoSource: string;
  password: string;
  stateId: number;
  State: StateProps;
}

export const FormatUserDataTable = (
  data: FormatTableProps[],
  action: (id: string) => void
): Table => {
  const newRows: TableRow[] = data.map((user) => {
    return {
      id: user.id.toString(),
      columns: [
        { id: "col11", type: "text", value: user.id.toString() },
        { id: "col12", type: "text", value: user.username },
        { id: "col13", type: "text", value: user.email },
        { id: "col14", type: "element", element: <Badges type={user.State.name} text={user.State.name} /> },
        {
          id: "col15",
          type: "element",
          element: (
            <button className="bg-gray-800 text-gray-50 px-2 py-1.5 rounded-md hover:bg-gray-700" onClick={() => action(user.id.toString())}>Edit</button>
          ),
        },
      ],
    };
  });

  // Datos de tabla formateados
  const tableData: Table = {
    header: [
      {
        id: "headerRow1",
        columns: [
          { id: "headerCol1", type: "text", value: "Id" },
          { id: "headerCol2", type: "text", value: "Username" },
          { id: "headerCol3", type: "text", value: "Email" },
          { id: "headerCol4", type: "text", value: "State" },
          { id: "headerCol5", type: "text", value: "Actions" },
        ],
      },
    ],
    rows: newRows,
  };

  return tableData;
};
