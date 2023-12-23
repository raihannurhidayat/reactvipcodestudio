  import FormRegister from "../components/fragments/FormRegister";
import AuthLayout from "../components/layouts/AuthLayout";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register" type="regsiter">
      <FormRegister />
    </AuthLayout>
  );
};

export default RegisterPage;
