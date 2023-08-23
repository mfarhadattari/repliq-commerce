import errorAlert from "../components/Message/errorAlert";
import successAlert from "../components/Message/successAlert";
import useAuth from "./useAuth";
import useServerSecure from "./useServerSecure";

const useAddToCart = () => {
  const { authUser, authLoading } = useAuth();
  const { secureReq } = useServerSecure();

  const addToCart = (product) => {
    if (!product) {
      return;
    }
    if (!authUser || authLoading) {
      return errorAlert("Please login first");
    }
    const productInfo = {
      userPhone: authUser.userPhone,
      userName: authUser.userName,
      image: product.image,
      name: product.name,
      productID: product._id,
      price: product.price,
      quantity: 1,
    };

    secureReq.post("/add-to-cart", productInfo).then(({ data }) => {
      if (data.insertedId || data.modifiedCount) {
        successAlert("Successfully added in Cart");
      }
    });
  };

  return { addToCart };
};

export default useAddToCart;
