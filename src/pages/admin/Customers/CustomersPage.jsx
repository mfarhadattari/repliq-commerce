import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import useFetchData from "../../../hooks/useFetchData";

const CustomersPage = () => {
  const { data: customers, isLoading: isCustomerLoading } = useFetchData(
    "/admin/customers",
    [],
    ["customers"]
  );

  return (
    <main>
      <PageTitle title="Customers" />
      <section className="my-10  mx-auto">
        {isCustomerLoading || !customers ? (
          <Loaders />
        ) : (
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Photo</th>
                  <th>Name</th>
                  <th>Phone</th>
                  <th className="text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((customer, idx) => (
                  <tr key={customer._id} className="hover:shadow-xl h-full">
                    <th>{idx + 1}</th>
                    <td>
                      <div className="avatar">
                        <div className="w-20 h-20">
                          <img src={customer.avatar} alt={customer.userName} />
                        </div>
                      </div>
                    </td>
                    <td>
                      <h2 className="text-xl font-semibold">
                        {customer.userName}
                      </h2>
                    </td>
                    <td>
                      <h2 className="text-xl">{customer.userPhone}</h2>
                    </td>
                    <th className="text-center">
                      <Link
                        to={`/admin/customers/${customer._id}`}
                        className="btn btn-circle btn-success text-white text-xl"
                      >
                        <FaEye></FaEye>
                      </Link>
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

export default CustomersPage;
