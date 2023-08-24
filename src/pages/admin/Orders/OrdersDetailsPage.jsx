import { useParams } from "react-router-dom";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import SectionTitle from "../../../components/common/SectionTitle";
import useFetchData from "../../../hooks/useFetchData";

const OrdersDetailsPage = () => {
  const { id } = useParams();
  const { data: order, isLoading } = useFetchData(`admin/orders/${id}`, {}, [
    id,
  ]);

  console.log(order, isLoading);
  return (
    <main>
      <PageTitle title="Order Details" />
      <section>
        <SectionTitle heading="Order Details" />
        {isLoading || !order ? <Loaders /> : <div>Order Details</div>}
      </section>
    </main>
  );
};

export default OrdersDetailsPage;
