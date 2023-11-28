import customAxios from "./axios";

interface User {
  id: string;
  firstname: string;
  lastname: string;
  dateofbirth: Date;
  country: string;
  region: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  acceptedConditions: boolean;
}

export default {
  getAll: async (): Promise<User[]> => {
    const data = await customAxios.get<User[]>("/users");
    return data.data;
  },
  create: async (user: User): Promise<void> => {
    const data = await customAxios.post("/users", user);
    console.log(data);
  },
  update: async (user: User): Promise<void> => {
    const data = await customAxios.put(`/users/${user.id}`, user);
    console.log(data);
  },
  delete: async (userId: string): Promise<void> => {
    const data = await customAxios.delete(`/users/${userId}`);
    console.log(data);
  },
};
