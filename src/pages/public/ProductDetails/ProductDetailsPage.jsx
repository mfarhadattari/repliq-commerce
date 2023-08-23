import { useParams } from "react-router-dom";
import Loaders from "../../../components/common/Loaders";
import PageTitle from "../../../components/common/PageTitle";
import useAddToCart from "../../../hooks/useAddToCart";
import useFetchData from "../../../hooks/useFetchData";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { data: product, isLoading: isProductLoading } = useFetchData(
    `/products/${id}`,
    {},
    [id]
  );

  const { addToCart } = useAddToCart();

  return (
    <main className="my-20">
      <PageTitle title="Product Details" />
      {isProductLoading ? (
        <div>
          <Loaders />
        </div>
      ) : (
        <section className="my-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-5 items-center">
            <div className="flex justify-center">
              <img
                src={product?.image}
                alt={product?.name}
                className="w-[300px] h-[300px] hover:scale-150 cursor-zoom-out"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-2xl uppercase">{product?.name}</h1>
              <div className="flex gap-5 items-center text-xl">
                <p>Price: $ {product?.price}</p>
                <p>Category: {product?.category}</p>
              </div>
              <div className="text-lg">{product?.description}</div>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-outline w-[200px]"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default ProductDetailsPage;
