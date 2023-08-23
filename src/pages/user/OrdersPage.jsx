import Loaders from "../../components/common/Loaders";
import PageTitle from "../../components/common/PageTitle";
import SectionTitle from "../../components/common/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useFetchData from "../../hooks/useFetchData";

const OrdersPage = () => {
  const { authUser } = useAuth();

  // load cart data
  const { data: orders, isLoading: isOrderLoading } = useFetchData(
    `/my-orders?userPhone=${authUser?.userPhone}`,
    [],
    [authUser]
  );

  console.log(orders);
  return (
    <main className="my-10">
      <PageTitle title="Orders" />
      <section>
        <SectionTitle heading="My Orders!" />
        {isOrderLoading || !orders ? <Loaders /> : <div>{orders.length}</div>}
      </section>
    </main>
  );
};

export default OrdersPage;
