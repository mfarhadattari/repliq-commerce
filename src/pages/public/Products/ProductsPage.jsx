import banner from "../../../assets/images/banner.jpg";
import Loaders from "../../../components/common/Loaders";
import MenuCover from "../../../components/common/MenuCover";
import PageTitle from "../../../components/common/PageTitle";
import useFetchData from "../../../hooks/useFetchData";

const ProductsPage = () => {
  const { data: products, isLoading: isProductLoading } = useFetchData(
    "/products",
    []
  );
  return (
    <div>
      <PageTitle title="Products" />
      <MenuCover backgroundURL={banner} heading="Our Products" />
      {isProductLoading ? <Loaders /> : <div>{products.length}</div>}
    </div>
  );
};

export default ProductsPage;
