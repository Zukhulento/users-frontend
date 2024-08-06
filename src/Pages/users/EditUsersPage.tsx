import { useParams } from "react-router-dom";
import { PrivateLayout } from "../../Layouts/PrivateLayout";

export const EditUsersPage = () => {
  const { id } = useParams();
  return (
    <PrivateLayout>
      <div>Editing user {id}</div>
    </PrivateLayout>
  );
};
