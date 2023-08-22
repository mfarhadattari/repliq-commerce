import banner from "../../../assets/images/banner.jpg";
import ProductCard from "../../../components/Card/ProductCard";
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
      {isProductLoading ? (
        <Loaders />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 p-10">
          {products.map((product) => (
            <ProductCard key={product._id} productInfo={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
