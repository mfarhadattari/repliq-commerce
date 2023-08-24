import { Link, useParams } from "react-router-dom";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import useFetchData from "../../../hooks/useFetchData";

const CustomerDetailsPage = () => {
  const { id } = useParams();
  const {
    data: { customerInfo, cart, ordersInfo },
    isLoading: isCustomerLoading,
  } = useFetchData(`/admin/customers/${id}`, {}, [id]);

  return (
    <main>
      <PageTitle title="Customer Details" />
      <section>
        {isCustomerLoading ? (
          <Loaders />
        ) : (
          <div>
            <div className="my-5">
              <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
                <div className="flex flex-col items-center">
                  <div className="avatar">
                    <div className="w-32">
                      <img src={customerInfo.avatar} />
                    </div>
                  </div>
                  <h1 className="text-2xl font-semibold mt-3">
                    Name: {customerInfo.userName}
                  </h1>
                  <p className="text-xl">Phone: {customerInfo.userPhone}</p>
                </div>
                {ordersInfo.length > 0 && (
                  <div>
                    <h1 className="text-xl font-bold text-center uppercase">
                      Orders Info
                    </h1>
                    <div className="flex justify-between mt-3">
                      <p>Ordered: {ordersInfo.length}</p>
                      <p>
                        Paid:{" "}
                        {ordersInfo.reduce(
                          (totalPayment, order) => order.amount + totalPayment,
                          0
                        )}
                      </p>
                    </div>
                    <div className="mt-5 flex flex-col gap-3 items-center justify-center">
                      {ordersInfo.map((order) => (
                        <div
                          key={order._id}
                          className="font-medium flex justify-between items-center gap-3 border p-2 w-full"
                        >
                          <p className="text-lg">{order.totalAmount}</p>
                          <p className="text-lg uppercase">{order.status}</p>
                          <Link
                            to={`/admin/orders/${order._id}`}
                            className="btn btn-sm btn-info text-white rounded-none"
                          >
                            Details
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {cart.length > 0 && (
              <div className="w-full mt-10">
                <h1 className="text-xl uppercase font-bold text-center my-5">
                  CARTS INFO
                </h1>
                <div className="w-full space-y-3">
                  {cart.map((item) => (
                    <div
                      key={item._id}
                      className="font-medium flex flex-col md:flex-row justify-between items-center gap-3 border px-10 py-2"
                    >
                      <div className="flex justify-between w-full md:w-fit items-center">
                        <div className="avatar">
                          <div className="w-20 h-20">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                        <div className="md:hidden">
                          <p>Price: {item.price}</p>
                          <p>Quantity: {item.quantity}</p>
                        </div>
                      </div>
                      <h2 className="uppercase text-center md:text-left md:w-3/5">
                        {item.name}
                      </h2>
                      <div className="hidden md:flex flex-col gap-2">
                        <p>Price: {item.price}</p>
                        <p>Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </section>
    </main>
  );
};

export default CustomerDetailsPage;
