import { Link } from "react-router-dom";

const ProductShowCard = ({ productInfo }) => {
  const { _id, image, name } = productInfo;
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="card w-full border p-5 rounded-3xl rounded-bl-none  hover:shadow-2xl"
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
          <h2 className="card-title text-lg font-normal">{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default ProductShowCard;
