import PageTitle from "../../../components/common/PageTitle";
import useFetchData from "../../../hooks/useFetchData";

const CustomersPage = () => {
  const { data: customers, isLoading: isCustomerLoading } = useFetchData(
    "/admin/customers",
    [],
    ["customers"]
  );

  console.log(customers, isCustomerLoading);
  return (
    <main>
      <PageTitle title="Customers" />
      Customers Page
    </main>
  );
};

export default CustomersPage;
