import React from "react";
import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import AppContext from "./Data/AppContext";
import jobs from "./Data/Alljobs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import JobsPage from "./Pages//Jobs/JobsPage";
import { ToastContainer } from "react-toastify";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Component/Main/Home";
import Company from "./Pages/Company/Company";
import PageNotFound from "./Pages/PageNotFound";

interface AppContextProps {
  jobs: any[]; // Replace 'any[]' with the actual type of your 'jobs' data
}

const App: React.FC = () => {
  const appContextValue: AppContextProps = {
    jobs,
  };

  return (
    <div className="m-auto">
      <Router>
        <NavBar />
        <AppContext.Provider value={appContextValue}>
          {/* Define your routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/companies" element={<Company />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppContext.Provider>
        <ToastContainer />
      </Router>
    </div>
  );
};

export default App;
