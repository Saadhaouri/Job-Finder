import customAxios from "./axios";

interface Job {
  id: string;
  JobTitle: string;
  time: string;
  Country: string;
  Description: string;
  Logo: string;
  Companies: string;
}

const jobsAPI = {
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
  delete: async (jobId: string): Promise<void> => {
    const data = await customAxios.delete(`/jobs/${jobId}`);
    console.log(data);
  },
};

export default jobsAPI;
