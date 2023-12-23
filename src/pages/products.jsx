import { Fragment, useContext, useEffect, useState } from "react";
import CardProduct from "../components/fragments/CardProduct";
import { getProducts } from "../services/product.service";
import { useLogin } from "../hooks/useLogin";
import TableCart from "../components/fragments/TableCart";
import Navbar from "../components/layouts/Navbar";
import { DarkMode } from "../context/DarckMode";

const ProductsPage = () => {
  // const [cart, setCart] = useState([]);
  // const [totalPrice, setTotalPrice] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const [products, setProducts] = useState([]);
  const username = useLogin();

  // useEffect(() => {
  //   setCart(JSON.parse(localStorage.getItem("cart")) || []);
  // }, []);

  useEffect(() => {
    getProducts("products",(data) => {
      setProducts(data);
    });
  }, []);

  return (
    <Fragment>
      <Navbar />
      <div className={`flex justify-center py-5 ${isDarkMode && "bg-slate-700"}`}>
        <div className="w-4/6 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => {
              return (
                <CardProduct key={product.id}>
                  <CardProduct.Header image={product.image} id={product.id} />
                  <CardProduct.Body title={product.title} >
                    {product.description}
                  </CardProduct.Body>
                  <CardProduct.Footer
                    price={product.price}
                    id={product.id}
                  />
                </CardProduct>
              );
            })}
        </div>
        <div className="w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>
          <TableCart products={products} />
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsPage;
