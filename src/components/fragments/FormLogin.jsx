import { useRef, useState } from "react";
import { login } from "../../services/auth.service";
import Button from "../elements/Button";
import InputForm from "../elements/Input";

const FormLogin = () => {
  const [loginFail, setLoginFail] = useState("")

  const handleLogin = (event) => {

    event.preventDefault()
    // localStorage.setItem('email', event.target.email.value)
    // localStorage.setItem('password', event.target.password.value)
    const data = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    login(data, (status, res) => {
      if (status){
        localStorage.setItem('token', res)
        window.location.href = "/products"
      } else {
        setLoginFail(res.response.data)
      }
    })
  }

  const usernameRef = useRef(null)

  return (
    <form onSubmit={handleLogin}>
      <InputForm
        type="text"
        placeholder="jhon doe"
        label="Username"
        name="username"
        ref={usernameRef}
      />
      <InputForm
        type="password"
        placeholder="*****"
        label="Password"
        name="password"
      />
      <Button type="submit" classname="bg-blue-600 w-full">Login</Button>
      {loginFail && <p className="text-red-500 text-center mt-5">{loginFail}</p>}
    </form>
  );
};

export default FormLogin;
