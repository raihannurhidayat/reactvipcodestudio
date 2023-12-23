import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";

const CardProduct = ({ children }) => {
  return (
    <div className="w-full max-w-sm bg-gray-800 border border-gray-700 rounded-lg shadow mx-2 flex flex-col justify-between my-3">
      {children}
    </div>
  );
};

const Header = ({ image, id }) => {
  return (
    <Link to={`/products/${id}`}>
      <img
        src={image}
        alt=""
        className="p-8 rounded-t-lg h-60 w-full object-cover"
        />
        </Link>
  );
};

const Body = ({ children, title}) => {
  return (
    <div className="px-5 pb-5 h-full">
        <h5 className="text-xl font-semibold tracking-tight text-white py-3">
          {title}
        </h5>
        <p className="text-sm text-white text-justify">
          {children.substring(0, 100)}
        </p>

    </div>
  );
};

const Footer = ({ price, id }) => {
  const dispatch = useDispatch()
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        {price.toLocaleString("id-ID", { style: "currency", currency: "USD" })}
      </span>
      <Button classname="bg-blue-600" onClick={() => dispatch(addToCart({id, qty: 1}))}>
        Add To Cart
      </Button>
    </div>
  );
};

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;
