import PageTitle from "../../../components/common/PageTitle";
import Banner from "./Sections/Banner";
import PopularProducts from "./Sections/PopularProducts";

const HomePage = () => {
  return (
    <div>
      <PageTitle />
      <Banner />
      <PopularProducts />
    </div>
  );
};

export default HomePage;
