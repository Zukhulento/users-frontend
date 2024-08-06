import { PrivateLayout } from "../Layouts/PrivateLayout";
import { ListUsersView } from "../Views/ListUsersView";

export const UsersPage = () => {
  return (
    <PrivateLayout>
      <ListUsersView />
    </PrivateLayout>
  );
};
