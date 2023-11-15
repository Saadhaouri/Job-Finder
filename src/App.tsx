import "./App.css";
import Footer from "./Component/FooterDiv/Footer";
import Job from "./Component/JobDiv/Job";
import NavBar from "./Component/NavBar/NavBar";
import Search from "./Component/SearchDiv/Search";
import Value from "./Component/ValueDiv/Value";

function App() {
  return (
    <div className=" m-auto ">
      <NavBar />
      <Search />
      <Job />
      <Value />
      <Footer />
    </div>
  );
}

export default App;
