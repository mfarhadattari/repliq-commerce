import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import successAlert from "../../../components/Message/successAlert";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";
import useServer from "../../../hooks/useServer";

const AdminProductsPage = () => {
  const { serverReq } = useServer();
  const {
    data: products,
    isLoading: isProductLoading,
    refetch: productRefetch,
  } = useFetchData("/admin/products", [], ["products"]);

  // delete product
  const deleteProduct = (id) => {
    serverReq.delete(`/admin/delete-product/${id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        successAlert("Deleted Successfully");
        productRefetch();
      }
    });
  };

  return (
    <main>
      <PageTitle title="Products" />
      <section className="my-10  mx-auto">
        <SectionTitle heading="Our Products" />
        {isProductLoading || !products ? (
          <Loaders />
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Name & Price</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={product._id} className="hover:shadow-xl">
                    <th>{idx + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-20 h-20">
                          <img src={product.image} alt={product.name} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <h2 className="uppercase">{product.name}</h2>
                        <p className="text-blue-500">Price: {product.price}</p>
                      </div>
                    </td>
                    <th>
                      <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                        <Link
                          to={`/products/${product._id}`}
                          className="btn btn-circle btn-info text-white text-xl"
                        >
                          <FaEye />
                        </Link>
                        <Link
                          to={`/admin/products/${product._id}`}
                          className="btn btn-circle btn-accent text-white text-xl"
                        >
                          <FaEdit />
                        </Link>
                        <button
                          className="btn btn-circle btn-error text-white text-xl"
                          onClick={() => deleteProduct(product._id)}
                        >
                          <FaTrashAlt />
                        </button>
                      </div>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </main>
  );
};

export default AdminProductsPage;
