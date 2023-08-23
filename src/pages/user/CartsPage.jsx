import Loaders from "../../components/common/Loaders";
import PageTitle from "../../components/common/PageTitle";
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
      {isCartLoading || !carts ? <Loaders /> : <div>{carts.length}</div>}
    </main>
  );
};

export default CartsPage;
