import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";

const AdminOrdersPage = () => {
  const { data: orders, isLoading: isOrderLoading } = useFetchData(
    "/admin/orders",
    [],
    ["orders"]
  );

  console.log(orders, isOrderLoading);
  return (
    <main>
      <PageTitle title="Order Page" />
      <section>
        <SectionTitle heading="ALL ORDERS" />
        {isOrderLoading || !orders ? <Loaders /> : <div>Orders</div>}
      </section>
    </main>
  );
};

export default AdminOrdersPage;
