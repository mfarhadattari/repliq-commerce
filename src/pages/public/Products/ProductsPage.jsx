import banner from "../../../assets/images/banner.jpg";
import MenuCover from "../../../components/common/MenuCover";
import PageTitle from "../../../components/common/PageTitle";

const ProductsPage = () => {
  return (
    <div>
      <PageTitle title="Products" />
      <MenuCover backgroundURL={banner} heading="Our Products" />
    </div>
  );
};

export default ProductsPage;
