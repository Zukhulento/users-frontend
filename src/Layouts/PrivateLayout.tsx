import { ReactNode, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import api from "../Api/AxiosConfig";
import { useUserStore } from "../Stores/User.store";
import { useAuthStore } from "../Stores/Auth.store";
import { toast } from "sonner";

type LayoutProps = {
  children: ReactNode;
};
export const PrivateLayout = ({ children }: LayoutProps) => {
  // * Obtaining current user data
  const setUserData = useUserStore((state) => state.setUserData);
  const clearUserData = useUserStore((state) => state.clearUserData);
  const setToken = useAuthStore((state) => state.setToken);
  const obtainCurrentUserData = async () => {
    try {
      const response = await api.get("/me");
      const { data } = response;
      setUserData(data);
    } catch (error) {
      toast("Loggout", {
        unstyled: true,
        closeButton: true,
        description: "Non valid token",
        duration: 5000,
        classNames: {
          toast: "bg-red-200 rounded-xl flex p-4",
          title: "text-black text-xl",
          description: "text-gray-600",
          closeButton: "bg-red-500 hover:bg-red-600",
        },
      });
      // IF error, clear frontend user data
      clearUserData();
      // Deleting token
      setToken(null);
      console.log("Some error happened obtaining ther current user data.");
    }
  };
  // TODO: Obtain current user permissions

  useEffect(() => {
    obtainCurrentUserData();
  }, []);

  return (
    <div className="bg-gray-950 h-screen text-white" id="private-container">
      <Navbar />
      {children}
    </div>
  );
};
