import customAxios from "./axios";

export default {
  getAll: async () => {
    const data = await customAxios.get("/companies");
    return data.data;
  },
  create: () => [],
  update: () => [],
  delete: () => [],
};
