import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./Pages/LoginPage";
import { RegisterPage } from "./Pages/RegisterPage";
import { useAuthStore } from "./Stores/Auth.store";
import { HomePage } from "./Pages/HomePage";

export const UserApp = () => {
  const token = useAuthStore((state) => state.token);
  return (
    <div className="font-roboto">
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* Private routes */}
        {token ? (
          <>
            <Route path="/home" element={<HomePage />} />
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
