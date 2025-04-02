import api from "../../../shared/api/axiosConfig"; // O el path correcto

export const createUser = async (data: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  const res = await api.post("/admin/users/create", data);
  return res.data;
};
