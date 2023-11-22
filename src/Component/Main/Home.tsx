import Footer from "../FooterDiv/Footer";
import Job from "../JobDiv/Job";
import Search from "../SearchDiv/Search";
import Value from "../ValueDiv/Value";

const Home = () => {
  return (
    <div>
      <div className="dashboard">
        <Search />
        <Job />
        <Value />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
