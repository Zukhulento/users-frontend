import api from "../AxiosConfig";

export const GetUsers = async () => {
  try {
    const response = await api.get("/users");
    return { success: true, data: response.data };
  } catch (error) {
    return { success: false, error };
  }
};
