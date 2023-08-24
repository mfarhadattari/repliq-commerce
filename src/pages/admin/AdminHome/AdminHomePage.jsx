import {
  FaShippingFast,
  FaShoppingCart,
  FaSlack,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";

const AdminHomePage = () => {
  const { data: adminData, isLoading: isAdminDataLoading } = useFetchData(
    "/admin/",
    {},
    ["adminData"]
  );

  console.log(adminData, isAdminDataLoading);
  return (
    <main>
      <PageTitle title="Admin Home" />
      <section>
        <SectionTitle heading="Admin Home" />
        {isAdminDataLoading || !adminData ? (
          <Loaders />
        ) : (
          <div className="w-full mx-auto space-y-3 p-5 mt-3">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between items-center gap-3">
              <Link
                to="/admin/products"
                className="w-full border p-5 flex justify-between rounded-lg hover:shadow-lg"
              >
                <div className="flex flex-col">
                  <p className="text-xl">Total Product</p>
                  <p className="text-5xl">{adminData.totalProduct || 0}</p>
                </div>
                <div className="text-7xl">
                  <FaSlack />
                </div>
              </Link>
              <Link
                to="/admin/customers"
                className="w-full border p-5 flex justify-between rounded-lg hover:shadow-lg"
              >
                <div className="flex flex-col">
                  <p className="text-xl">Total Customer</p>
                  <p className="text-5xl">{adminData.totalCustomer || 0}</p>
                </div>
                <div className="text-7xl">
                  <FaUser />
                </div>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full justify-between items-center gap-3">
              <Link
                to="/admin/orders"
                className="w-full border p-5 flex justify-between rounded-lg hover:shadow-lg"
              >
                <div className="flex flex-col">
                  <p className="text-xl">Total Orders</p>
                  <p className="text-5xl">{adminData.totalOrder || 0}</p>
                </div>
                <div className="text-7xl">
                  <FaShippingFast />
                </div>
              </Link>
              <div className="w-full border p-5 flex justify-between rounded-lg hover:shadow-lg">
                <div className="flex flex-col">
                  <p className="text-xl">Total Carts</p>
                  <p className="text-5xl">{adminData.totalCart || 0}</p>
                </div>
                <div className="text-7xl">
                  <FaShoppingCart />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default AdminHomePage;
