import customAxios from "./axios";

interface Job {
  id: number;
  title: string;
  category: string;
  company: string;
}

const jobsService = {
  getAll: async (): Promise<Job[]> => {
    const data = await customAxios.get<Job[]>("/jobs");
    return data.data;
  },
  create: async (job: Job): Promise<void> => {
    const data = await customAxios.post("/jobs", job);
    console.log(data);
  },
  update: async (job: Job): Promise<void> => {
    const data = await customAxios.put(`/jobs/${job.id}`, job);
    console.log(data);
  },
  delete: async (jobId: number): Promise<void> => {
    const data = await customAxios.delete(`/jobs/${jobId}`);
    console.log(data);
  },
};

export default jobsService;
