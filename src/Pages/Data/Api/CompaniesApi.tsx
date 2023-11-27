import customAxios from "./axios";

interface Company {
  id: string;
  Title: string;
  logo: string;
}

export default {
  getAll: async (): Promise<Company[]> => {
    const data = await customAxios.get<Company[]>("/companies");
    return data.data;
  },
  create: async (company: Company): Promise<void> => {
    const data = await customAxios.post("/companies", company);
    console.log(data);
  },
  update: async (company: Company): Promise<void> => {
    const data = await customAxios.put(`/companies/${company.id}`, company);
    console.log(data);
  },
  delete: async (companyId: string): Promise<void> => {
    const data = await customAxios.delete(`/companies/${companyId}`);
    console.log(data);
  },
};
