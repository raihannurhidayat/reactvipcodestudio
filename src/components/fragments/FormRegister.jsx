import Button from "../elements/Button";
import InputForm from "../elements/Input";

const FormRegister = () => {
  return (
    <form action="">
      <InputForm
        type="text"
        placeholder="Insert Your Name"
        label="Fullname"
        name="fullname"
      />
      <InputForm
        type="email"
        placeholder="example@gmail.com"
        label="Email"
        name="email"
      />
      <InputForm
        type="password"
        placeholder="*****"
        label="Password"
        name="password"
      />
      <InputForm
        type="password"
        placeholder="*****"
        label="Confirm Password"
        name="confirmPassword"
      />
      <Button classname="bg-blue-600 w-full">Register</Button>
    </form>
  );
};

export default FormRegister;
