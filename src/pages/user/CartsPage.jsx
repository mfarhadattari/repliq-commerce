import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import comingSoon from "../../components/Message/comingSoon";
import Loaders from "../../components/common/Loaders";
import PageTitle from "../../components/common/PageTitle";
import SectionTitle from "../../components/common/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useFetchData from "../../hooks/useFetchData";

const CartsPage = () => {
  const { authUser } = useAuth();
  const { data: carts, isLoading: isCartLoading } = useFetchData(
    `/my-cart?userPhone=${authUser?.userPhone}`,
    [],
    [authUser]
  );

  return (
    <main className="my-10">
      <PageTitle title="Carts" />
      {isCartLoading || !carts ? (
        <Loaders />
      ) : (
        <>
          <section
            className={carts.length > 0 ? "my-10 lg:w-3/4 mx-auto" : "hidden"}
          >
            <SectionTitle heading="My Cart!" />
            <div className="overflow-x-auto mt-10">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Photo</th>
                    <th>Name & Price</th>
                    <th>Quantity</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {carts.map((item, idx) => (
                    <tr key={item._id} className="hover:shadow-xl">
                      <th>{idx + 1}</th>
                      {/* ------ PRODUCT IMAGE ---------- */}
                      <td>
                        <div className="avatar">
                          <div className="w-20 h-20">
                            <img src={item.image} alt={item.name} />
                          </div>
                        </div>
                      </td>
                      {/* -------------- PRODUCT NAME AND PRICE -------- */}
                      <td>
                        <div>
                          <h2 className="uppercase">{item.name}</h2>
                          <p className="text-blue-500">
                            Price: {item.price} &#2547;
                          </p>
                        </div>
                      </td>

                      <td>
                        <div className="text-xl border rounded-full h-10 w-10 flex justify-center items-center">
                          <p className="text-center">{item.quantity}</p>
                        </div>
                      </td>
                      <th>
                        <button className="btn btn-circle" onClick={comingSoon}>
                          <FaTrashAlt />
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-5">
              <Link to="/checkout" className="btn btn-outline w-[200px] ">
                Checkout
              </Link>
            </div>
          </section>
          <section
            className={
              carts.length > 0
                ? "hidden"
                : "my-10 h-[300px] flex justify-center items-center"
            }
          >
            <div className="text-3xl text-center">
              <h1> No Cart Data</h1>
              <Link to="/products" className="btn btn-sm mt-5">
                See Product
              </Link>
            </div>
          </section>
        </>
      )}
    </main>
  );
};

export default CartsPage;
