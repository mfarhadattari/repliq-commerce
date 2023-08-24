import { useParams } from "react-router-dom";
import successAlert from "../../../components/Message/successAlert";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";
import useServer from "../../../hooks/useServer";
import formatDateTime from "../../../utils/formatDateTime";

const OrdersDetailsPage = () => {
  const { id } = useParams();
  const { serverReq } = useServer();
  const {
    data: order,
    isLoading,
    refetch,
  } = useFetchData(`admin/orders/${id}`, {}, [id]);

  const {
    _id,
    userName,
    userPhone,
    amount,
    transactionID,
    paymentTime,
    status,
    products,
    city,
  } = order;

  // order approve handler
  const handleApprove = (id) => {
    serverReq
      .patch(`admin/update-status/${id}`, {
        status: "approve",
      })
      .then(({ data }) => {
        if (data.modifiedCount > 0) {
          successAlert("Approve Successfully!");
          refetch();
        }
      });
  };

  return (
    <main className="my-5 p-5 lg:p-0">
      <PageTitle title="Order Details" />
      <section>
        <SectionTitle heading="Order Details" />
        {isLoading || !order ? (
          <Loaders />
        ) : (
          <div>
            <section className="my-5">
              <div className="flex flex-col md:flex-row gap-5 justify-between">
                <div>
                  <h1 className="text-xl font-semibold">
                    Customer: {userName}
                  </h1>
                  <p>Contract: {userPhone}</p>
                  <p>City: {city}</p>
                  <p>Amount: {amount}</p>
                </div>
                <div>
                  <p>TransID: {transactionID}</p>
                  <p>Pay Date: {formatDateTime(paymentTime).date}</p>
                  <p>Pay Time: {formatDateTime(paymentTime).time}</p>
                  <p>
                    Status: <span className="uppercase">{status}</span>
                  </p>
                </div>
              </div>
            </section>
            <section>
              <h1 className="text-2xl font-bold text-center my-5 uppercase">
                Products
              </h1>
              <div className="overflow-x-auto">
                <table className="table border">
                  <tbody>
                    {products.map((product, idx) => (
                      <tr key={idx} className="font-medium">
                        <th>{idx + 1}</th>
                        <td>
                          <div className="avatar">
                            <div className="w-20 h-20">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </div>
                        </td>
                        <td>
                          <h2 className="uppercase">{product.name}</h2>
                        </td>
                        <td className="text-lg w-fit">
                          <div className="w-32">
                            <p>Price: {product.price}</p>
                            <p>Quantity: {product.quantity}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {status.toLowerCase() == "paid" && (
                <button
                  onClick={() => handleApprove(_id)}
                  className="btn btn-outline w-full my-5"
                >
                  Approve
                </button>
              )}
            </section>
          </div>
        )}
      </section>
    </main>
  );
};

export default OrdersDetailsPage;
