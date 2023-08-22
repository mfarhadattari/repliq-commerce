import { Link } from "react-router-dom";
import comingSoon from "../Message/comingSoon";

const ProductCard = ({ productInfo }) => {
  const { _id, image, name, price } = productInfo;
  return (
    <div
      data-aos="flip-right"
      data-aos-easing="linear"
      data-aos-duration="2000"
      className="card w-full border p-5 rounded-3xl  hover:shadow-2xl flex flex-col justify-between"
    >
      <Link to={`/products/${_id}`}>
        <figure>
          <img
            className="w-[300px] h-[200px] rounded-md"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body text-center pb-2">
          <h2 className="card-title text-lg font-normal text-center">{name}</h2>
          <p className="text-xl font-semibold">$ {price}</p>
        </div>
      </Link>
      <button className="btn btn-outline w-full mt-2" onClick={comingSoon}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
