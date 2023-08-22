import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import ProductShowCard from "../../../../components/Card/ProductShowCard";
import Loaders from "../../../../components/common/Loaders";
import SectionTitle from "../../../../components/common/SectionTitle";

const PopularProducts = () => {
  // loading data
  const { data: products = [], isLoading: isProductLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get(
        "https://shanto-mart-server.vercel.app/new-products"
      );
      return res.data;
    },
  });

  return (
    <section className="my-20">
      <SectionTitle heading="Our Popular Products" />
      {isProductLoading ? (
        <Loaders />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5 p-10">
            {products.map((product) => (
              <ProductShowCard key={product._id} productInfo={product} />
            ))}
          </div>
          <div className="flex justify-center my-5">
            <Link to="/products" className="btn rounded-none w-[250px]">
              See More
            </Link>
          </div>
        </>
      )}
    </section>
  );
};

export default PopularProducts;
