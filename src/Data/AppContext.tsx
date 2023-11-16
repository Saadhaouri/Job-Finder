import { createContext } from "react";

interface Job {
  id: string;
  JobTitle: string;
  time: string;
  Country: string;
  Description: string;
  Logo: string;
  Companies: string;
}

interface AppContextProps {
  jobs: Job[]; // Assuming your context provides an array of jobs
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default AppContext;
