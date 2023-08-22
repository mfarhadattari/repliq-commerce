import PageTitle from "../../../components/common/PageTitle";
import Banner from "./Sections/Banner";
import PopularProducts from "./Sections/PopularProducts";
import Services from "./Sections/Services";

const HomePage = () => {
  return (
    <div>
      <PageTitle />
      <Banner />
      <PopularProducts />
      <Services />
    </div>
  );
};

export default HomePage;
