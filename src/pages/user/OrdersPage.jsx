import Loaders from "../../components/common/Loaders";
import PageTitle from "../../components/common/PageTitle";
import SectionTitle from "../../components/common/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useFetchData from "../../hooks/useFetchData";
import formatDateTime from "../../utils/formatDateTime";

const OrdersPage = () => {
  const { authUser } = useAuth();

  // load cart data
  const { data: orders, isLoading: isOrderLoading } = useFetchData(
    `/my-orders?userPhone=${authUser?.userPhone}`,
    [],
    [authUser]
  );

  return (
    <main className="my-5 p-5 lg-p-0">
      <PageTitle title="Orders" />
      <section>
        <SectionTitle heading="My Orders!" />
        {isOrderLoading || !orders ? (
          <Loaders />
        ) : (
          <div
            className={orders.length > 0 ? "my-10 lg:w-3/4 mx-auto" : "hidden"}
          >
            <div className="overflow-x-auto mt-10">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Payment Info</th>
                    <th>Quantity & Price</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((item, idx) => (
                    <tr key={item?._id}>
                      <th>{idx + 1}</th>
                      {/* ------ PRODUCT IMAGE ---------- */}
                      <td>
                        <div>
                          <p>TransID: {item?.transactionID}</p>
                          <p>Date: {formatDateTime(item?.paymentTime).date}</p>
                          <p>Time:{formatDateTime(item?.paymentTime).time}</p>
                        </div>
                      </td>
                      {/* -------------- QUANTITY AND PRICE -------- */}
                      <td>
                        <div>
                          <p>
                            Products:{" "}
                            {item.products?.reduce(
                              (totalQuantity, product) =>
                                totalQuantity + product.quantity,
                              0
                            )}
                            pes
                          </p>
                          <p className="text-blue-500">
                            Price: {item?.amount} &#2547;
                          </p>
                        </div>
                      </td>
                      {/* -------------- PRODUCT QUANTITY ---------- */}
                      <td>
                        <p className="uppercase">{item?.status}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default OrdersPage;
