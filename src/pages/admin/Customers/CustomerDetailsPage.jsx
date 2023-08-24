import { useParams } from "react-router-dom";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import useFetchData from "../../../hooks/useFetchData";

const CustomerDetailsPage = () => {
  const { id } = useParams();
  const { data: customer, isLoading: isCustomerLoading } = useFetchData(
    `/admin/customers/${id}`,
    {},
    [id]
  );

  return (
    <main>
      <PageTitle title="Customer Details" />
      <section>
        {isCustomerLoading || !customer ? (
          <Loaders />
        ) : (
          <div>Customer Details</div>
        )}
      </section>
    </main>
  );
};

export default CustomerDetailsPage;
