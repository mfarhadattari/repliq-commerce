import axios from "axios";
import { useQuery } from "react-query";
import Loaders from "../../../../components/common/Loaders";
import SectionTitle from "../../../../components/common/SectionTitle";

const PopularProducts = () => {
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
      {isProductLoading ? <Loaders /> : <div>{products.length}</div>}
    </section>
  );
};

export default PopularProducts;
