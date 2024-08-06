import { useEffect, useState } from "react";
import { GetUsers } from "../Api/Providers";
import { FormatUserDataTable } from "../Helpers/FormatUserDataTable";
import { Table } from "../Components/Table/Table";
import { Table as TableTypes } from "../Components/Table/TableTypes";
import { useNavigate } from "react-router-dom";

export const ListUsersView = () => {
  // Obtaining users from the API
  const [UsersData, setUsersData] = useState<TableTypes | null>(null);
  // Instancing navigate function
  const Nav = useNavigate();
  // Defining action function
  const action = (id: string) => {
    Nav(`/users/edit/${id}`);
  };
  useEffect(() => {
    GetUsers().then((response) => {
      if (response.success) {
        // Formatting the data
        const formatedData = FormatUserDataTable(response.data, action);
        setUsersData(formatedData);
      } else {
        console.log(response.error);
      }
    });
  }, []);
  if (!UsersData) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Table data={UsersData} />
    </div>
  );
};
