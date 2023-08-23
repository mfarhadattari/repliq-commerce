import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import comingSoon from "../../../components/Message/comingSoon";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import useFetchData from "../../../hooks/useFetchData";

const AdminProductsPage = () => {
  const { data: products, isLoading: isProductLoading } =
    useFetchData("/admin/products");

  return (
    <main>
      <PageTitle title="Products" />
      <section className="my-10  mx-auto">
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
                        <p className="text-blue-500">
                          Price: {product.price} &#2547;
                        </p>
                      </div>
                    </td>
                    <th>
                      <div className="flex items-center justify-center gap-2">
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
                          onClick={comingSoon}
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
