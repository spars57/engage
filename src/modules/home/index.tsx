import Banner from "../../components/banner";
import Companies from "../../components/companies";
import Services from "../../components/services";
import { isMobile } from "../../utils/is-mobile";

const Home = () => {
  return (
    <>
      <Banner />
      <Companies />
      <Services triggeringPoint={isMobile() ? 800 : 1070} />
    </>
  );
};

export default Home;
