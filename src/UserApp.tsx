import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { useAuthStore } from "./Stores/Auth.store";
import { HomePage } from "./Pages/HomePage";
import { UsersPage } from "./Pages/UsersPage";
import { EditUsersPage } from "./Pages/users/EditUsersPage";
import { Toaster } from "sonner";

export const UserApp = () => {
  const token = useAuthStore((state) => state.token);
  return (
    <div className="font-roboto">
      <Toaster />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* Private routes */}
        {token ? (
          <>
            <Route path="/home" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/users/edit/:id" element={<EditUsersPage />} />
            <Route path="/*" element={<Navigate to={"/home"} replace />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/*" element={<LoginPage />} />
          </>
        )}
      </Routes>
    </div>
  );
};
