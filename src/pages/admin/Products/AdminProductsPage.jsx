import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import useFetchData from "../../../hooks/useFetchData";

const AdminProductsPage = () => {
  const { data: products, isLoading: isProductLoading } =
    useFetchData("/admin/products");

  console.log(products, isProductLoading);
  return (
    <main>
      <PageTitle title="Products" />
      <section className="my-10  mx-auto">
        {isProductLoading || !products ? (
          <Loaders />
        ) : (
          <div>{products.length}</div>
        )}
      </section>
    </main>
  );
};

export default AdminProductsPage;
