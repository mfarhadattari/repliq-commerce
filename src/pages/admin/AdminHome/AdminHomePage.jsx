import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
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
      {isAdminDataLoading || !adminData ? <Loaders /> : <div></div>}
    </main>
  );
};

export default AdminHomePage;
