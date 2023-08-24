import { Link } from "react-router-dom";
import successAlert from "../../../components/Message/successAlert";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";
import useServer from "../../../hooks/useServer";
import formatDateTime from "../../../utils/formatDateTime";

const AdminOrdersPage = () => {
  const { serverReq } = useServer();
  const {
    data: orders,
    isLoading: isOrderLoading,
    refetch: orderRefetch,
  } = useFetchData("/admin/orders", [], ["orders"]);

  // order approve handler
  const handleApprove = (id) => {
    serverReq
      .patch(`admin/update-status/${id}`, {
        status: "approve",
      })
      .then(({ data }) => {
        if (data.modifiedCount > 0) {
          successAlert("Approve Successfully!");
          orderRefetch();
        }
      });
  };

  return (
    <main>
      <PageTitle title="Order Page" />
      <section>
        <SectionTitle heading="ALL ORDERS" />
        {isOrderLoading || !orders ? (
          <Loaders />
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>User Info</th>
                  <th>Product Info</th>
                  <th>Payment Info</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, idx) => (
                  <tr key={order._id} className="hover:shadow-xl">
                    <th>{idx + 1}</th>
                    <td>
                      <div className="font-medium text-base w-fit">
                        <h1>{order.userName}</h1>
                        <p>{order.userPhone}</p>
                        <p>{order.city}</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>
                          Products:{" "}
                          {order.products.reduce(
                            (totalQuantity, product) =>
                              totalQuantity + product.quantity,
                            0
                          )}
                          pes
                        </p>
                        <p className="text-blue-500">Price: {order.amount}</p>
                      </div>
                    </td>
                    <td>
                      <div>
                        <p>TransID: {order.transactionID}</p>
                        <p>Date: {formatDateTime(order.paymentTime).data}</p>
                        <p>Time: {formatDateTime(order.paymentTime).time}</p>
                      </div>
                    </td>
                    <th>
                      <div className="flex flex-col justify-center items-center gap-2 w-[100px] mx-auto">
                        <p className="uppercase text-blue-500 text-center w-full">
                          {order.status}
                        </p>
                        {order.status.toLowerCase() == "paid" && (
                          <button
                            onClick={() => handleApprove(order._id)}
                            className="btn btn-sm rounded-none btn-success w-full text-white"
                          >
                            Approve
                          </button>
                        )}

                        <Link
                          to={`/admin/orders/${order._id}`}
                          className="btn btn-sm btn-info text-white rounded-none w-full"
                        >
                          Details
                        </Link>
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

export default AdminOrdersPage;
