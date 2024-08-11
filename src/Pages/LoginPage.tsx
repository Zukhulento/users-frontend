import { ChangeEvent, FormEvent, useState } from "react";
import { PublicLayout } from "../Layouts/PublicLayout";
import { Link } from "react-router-dom";
import api from "../Api/AxiosConfig";
import { useAuthStore } from "../Stores/Auth.store";
import { toast } from "sonner";
// types
export interface FormData {
  username: string;
  password: string;
}

export interface FormErrors {
  username?: string;
  password?: string;
}
export const LoginPage = () => {
  const formInit = {
    username: "",
    password: "",
  };
  const [formData, setFormData] = useState<FormData>(formInit);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const setToken = useAuthStore((state) => state.setToken);
  // Function to control change on input
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // Function to validate the form on submit
  const validateForm = (): FormErrors => {
    const errors: FormErrors = {};

    if (!formData.username) errors.username = "Email or username is required.";
    if (!formData.password) errors.password = "Password is required.";

    return errors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      toast("Please fill the fields", {
        unstyled: true,
        closeButton: true,
        description: "Check the required form fields.",
        duration: 5000,
        classNames: {
          toast: "bg-red-200 rounded-xl flex p-4",
          title: "text-red-500 text-xl",
          description: "text-red-400",
          closeButton: "bg-red-500 hover:bg-red-600",
          icon: "text-red-500",
        },
      });
    } else {
      await api
        .post("/login", { ...formData })
        .then((response) => {
          console.log(response);
          const { token } = response.data;
          setToken(token);
          setFormErrors({});
          setFormData({ username: "", password: "" });
          toast("Welcome to user's-management", {
            description: "Please try again later",
          });
          // setFormErrors(errors);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <PublicLayout>
      <div className="m-auto flex flex-col gap-4">
        <svg
          className="w-12 h-12 text-white m-auto"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fillRule="evenodd"
            d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z"
            clipRule="evenodd"
          />
        </svg>

        <div className="p-4 rounded-lg bg-gray-800 text-white w-80">
          <p className="text-2xl text-center mb-4">Login Form</p>
          {/* User or email */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            {/* User */}
            <div className="flex flex-col gap-1">
              <label htmlFor="user" className="text-sm select-none">
                User
              </label>
              <input
                type="text"
                className="bg-gray-600 rounded-md p-1"
                placeholder="User or email"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {/* Contraseña */}
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm select-none">
                Password
              </label>
              <input
                type="password"
                className="bg-gray-600 rounded-md p-1"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <Link
              to={"/register"}
              className="text-sm text-gray-200 hover:text-white"
            >
              Not Registered?
            </Link>
            {/* Errores */}
            {(formErrors.username || formErrors.password) && (
              <div className="flex flex-col rounded-md p-1 bg-red-200 border border-red-300 text-red-500">
                <p>{formErrors.username}</p>
                <p>{formErrors.password}</p>
              </div>
            )}
            <button className="bg-gray-700 rounded-sm w-fit py-1.5 px-2 m-auto hover:bg-gray-600">
              Login
            </button>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};
