import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "../../context/DarckMode";

const AuthLayout = ({ children, title, type }) => {
  const { isDarkMode, setIsDarkMode } = useContext(DarkMode);
  return (
    <div
      className={`flex justify-center items-center min-h-screen ${
        isDarkMode && "bg-slate-700"
      }`}
    >
      <div className="w-full max-w-xs">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
        >
          {isDarkMode ? "Light" : "Dark"}
        </button>
        <h1 className="text-blue-600 text-3xl font-bold mb-2">{title}</h1>
        <p className="font-medium text-slate-500 mb-8">
          Welcome, Please enter your details
        </p>
        {children}
        <Navigator type={type} />
      </div>
    </div>
  );
};

const Navigator = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-sm mt-5 text-center">
        Don't Have an account ?{" "}
        <Link to="/register" className="font-bold text-blue-600">
          Register
        </Link>{" "}
      </p>
    );
  }

  if (type === "regsiter") {
    return (
      <p className="text-sm mt-5 text-center">
        Have an account ?{" "}
        <Link to="/login" className="font-bold text-blue-600">
          Login
        </Link>{" "}
      </p>
    );
  }
};

export default AuthLayout;
