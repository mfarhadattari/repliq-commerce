import { useParams } from "react-router-dom";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";

const UpdateProductPage = () => {
  const { id } = useParams();
  const { data: product, isLoading: isProductLoading } = useFetchData(
    `/products/${id}`,
    {},
    [id]
  );
  return (
    <main>
      <PageTitle title="Update Product" />
      <section>
        <SectionTitle heading="Update Product" />
        {isProductLoading ? <Loaders /> : <div>{product.name}</div>}
      </section>
    </main>
  );
};

export default UpdateProductPage;
