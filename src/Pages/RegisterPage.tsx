import { ChangeEvent, FormEvent, useState } from "react";
import { PublicLayout } from "../Layouts/PublicLayout";
import { Link, useNavigate } from "react-router-dom";
import api from "../Api/AxiosConfig";
// types
interface FormData {
  name: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}
interface FieldError {
  field: string;
  message: string;
}

export const RegisterPage = () => {
  const formInit = {
    name: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };
  const [formData, setFormData] = useState<FormData>(formInit);
  const [formErrors, setFormErrors] = useState<FieldError[]>([]);

  // Function to control change on input
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  // Function to validate the form on submit
  const validateForm = (): FieldError[] => {
    const errors: FieldError[] = [];

    if (!formData.name)
      errors.push({ field: "name", message: "Name is required." });
    if (!formData.lastName)
      errors.push({ field: "lastName", message: "Last Name is required." });
    if (!formData.email)
      errors.push({ field: "email", message: "Email is required." });
    if (!formData.username)
      errors.push({ field: "username", message: "Username is required." });
    if (!formData.password)
      errors.push({ field: "password", message: "Password is required." });
    if (!formData.confirmPassword)
      errors.push({
        field: "confirmPassword",
        message: "Please confirm the password.",
      });
    if (formData.confirmPassword != formData.password)
      errors.push({
        field: "confirmPassword",
        message: "The passwords you provide doesn't match.",
      });
    return errors;
  };
  const navigate = useNavigate();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Handle form submission, e.g., send data to an API
      console.log("Form data submitted:", formData);
      try {
        const response = await api.post("/register", { ...formData });
        console.log(response);
        if (response.status == 201) {
          setFormErrors([]);
          // Optionally reset form data after submission
          setFormData({
            name: "",
            lastName: "",
            email: "",
            username: "",
            password: "",
            confirmPassword: "",
          });
          navigate("/login");
        }
      } catch (error) {
        console.log("Register failed:", error);
      }
    }
  };
  // ? Funcion para obtener los estados
  // const getEstados = async () => {
  //   try {
  //     const response = await api.get("/states");
  //     setEstados(response.data);
  //   } catch (error) {
  //     console.log("Error fetching estados:", error);
  //   }
  // };
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
        <div className="p-4 rounded-lg bg-gray-800 text-white w-80 md:w-full">
          <p className="text-2xl text-center mb-4">Register Form</p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 md:grid md:grid-cols-2"
          >
            {/* Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="name" className="text-sm select-none">
                Name
              </label>
              <input
                type="text"
                className="bg-gray-600 rounded-md p-1"
                placeholder="Your name"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            {/* Last Name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="lastName" className="text-sm select-none">
                Last Name
              </label>
              <input
                type="text"
                className="bg-gray-600 rounded-md p-1"
                placeholder="Your last name"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm select-none">
                Email
              </label>
              <input
                type="text"
                className="bg-gray-600 rounded-md p-1"
                placeholder="Your email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            {/* User */}
            <div className="flex flex-col gap-1">
              <label htmlFor="user" className="text-sm select-none">
                User
              </label>
              <input
                type="text"
                className="bg-gray-600 rounded-md p-1"
                placeholder="User in the app"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            {/* Password */}
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
            {/* Confirm password */}
            <div className="flex flex-col gap-1">
              <label htmlFor="confirmPassword" className="text-sm select-none">
                Confirm Password
              </label>
              <input
                type="password"
                className="bg-gray-600 rounded-md p-1"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <Link
              to={"/login"}
              className="text-sm text-gray-200 hover:text-white col-span-2"
            >
              Already Registered?
            </Link>
            {/* Errores */}
            {formErrors.length > 0 && (
              <div className="flex flex-col rounded-md p-1 bg-red-200 border border-red-300 text-red-500">
                {formErrors.map((error, index) => (
                  <p key={index}>{error.message}</p>
                ))}
              </div>
            )}
            <button className="bg-gray-700 rounded-sm w-fit py-1.5 px-2 m-auto hover:bg-gray-600 col-span-2">
              Register
            </button>
          </form>
        </div>
      </div>
    </PublicLayout>
  );
};
