import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../elements/Button";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarckMode";
import { useTotalPrice } from "../../context/TotalPriceContext";

const Navbar = () => {
  const [totalCart, setTotalCart] = useState(0);
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  const cart = useSelector((state) => state.cart.data);
  const username = useLogin();
  const {total} = useTotalPrice()

  useEffect(() => {
    const sum = cart.reduce((acc, item) => {
      return acc + item.qty;
    }, 0);
    setTotalCart(sum);
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <nav className="flex justify-end bg-blue-600 h-20 text-white items-center px-10">
      <Link to="/profile">{username}</Link>
      <Button classname="bg-black ml-5" onClick={handleLogout}>
        Logout
      </Button>

      <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        Item : {totalCart} | Price ${total}
      </div>
      <Button
        onClick={() => setIsDarkMode(!isDarkMode)}
        classname="rounded mx-2 bg-black"
      >
        {isDarkMode ? "Light" : "Dark"}
      </Button>
    </nav>
  );
};

export default Navbar;
