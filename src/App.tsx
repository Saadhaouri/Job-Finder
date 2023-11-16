import "./App.css";
import Footer from "./Component/FooterDiv/Footer";
import Job from "./Component/JobDiv/Job";
import NavBar from "./Component/NavBar/NavBar";
import Search from "./Component/SearchDiv/Search";
import Value from "./Component/ValueDiv/Value";
import AppContext from "./Data/AppContext";
import jobs from "./Data/Alljobs";

function App() {
  return (
    <AppContext.Provider value={{ jobs }}>
      <div className=" m-auto ">
        <NavBar />
        <Search />
        <Job />
        <Value />
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
