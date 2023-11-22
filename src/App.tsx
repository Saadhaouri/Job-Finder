import "./App.css";
import NavBar from "./Component/NavBar/NavBar";
import AppContext from "./Data/AppContext";
import jobs from "./Data/Alljobs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import JobsPage from "./Pages/JobsPage";
import CompaniesPage from "./Pages/CompaniesPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import BlogPage from "./Pages/BlogPage";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import Home from "./Component/Main/Home";

function App() {
  return (
    <div className="m-auto">
      <Router>
        <NavBar />
        <AppContext.Provider value={{ jobs }}>
          {/* Define your routes here */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </AppContext.Provider>
      </Router>
    </div>
  );
}

export default App;
