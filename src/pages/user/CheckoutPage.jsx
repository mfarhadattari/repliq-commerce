import Loaders from "../../components/common/Loaders";
import PageTitle from "../../components/common/PageTitle";
import SectionTitle from "../../components/common/SectionTitle";
import useAuth from "../../hooks/useAuth";
import useFetchData from "../../hooks/useFetchData";
import generateTransitionId from "../../utils/generateTransitionId";

const CheckoutPage = () => {
  const { authUser } = useAuth();

  // load cart data
  const { data: carts, isLoading: isCartLoading } = useFetchData(
    `/my-cart?userPhone=${authUser?.userPhone}`,
    [],
    [authUser]
  );
  return (
    <main>
      <PageTitle title="Checkout" />

      {isCartLoading || !carts || carts?.length <= 0 ? (
        <div className="h-[300px] flex justify-center items-center">
          <Loaders />
        </div>
      ) : (
        <section className="my-10">
          <SectionTitle heading="Confirm Order!" />
          <div className="flex mt-5 items-center justify-center">
            {/*--------------------  Checkout Form ----------------------- */}
            <div className="card w-full md:w-1/2 mx-auto">
              <form className="card-body w-full mx-auto">
                <div className="flex flex-col md:flex-row w-full gap-2 ">
                  {/* ----------- user name ----------- */}
                  <div className="form-control w-full">
                    <input
                      type="text"
                      name="userName"
                      defaultValue={authUser.userName}
                      disabled
                      className="input input-bordered w-full"
                    />
                  </div>
                  {/* ----------- user phone ---------- */}
                  <div className="form-control w-full">
                    <input
                      type="text"
                      name="userPhone"
                      defaultValue={authUser.userPhone}
                      disabled
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row w-full gap-2 ">
                  {/* ------------- transaction ID ------------- */}
                  <div className="form-control w-full ">
                    <input
                      type="text"
                      name="transactionID"
                      defaultValue={generateTransitionId(15)}
                      required
                      disabled
                      className="input input-bordered w-full"
                    />
                  </div>
                  {/* -------------- amount------- */}
                  <div className="form-control w-full">
                    <input
                      type="text"
                      name="amount"
                      defaultValue={carts.reduce(
                        (totalAmount, cart) => cart.price + totalAmount,
                        0
                      )}
                      disabled
                      className="input input-bordered w-full"
                    />
                  </div>
                </div>
                {/* ---------- city ---------- */}
                <div className="form-control w-full">
                  <input
                    type="text"
                    name="city"
                    placeholder="Your City"
                    required
                    className="input input-bordered w-full"
                  />
                </div>

                <div className="form-control w-full">
                  <button type="submit" className="btn btn-outline">
                    Confirm Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default CheckoutPage;
