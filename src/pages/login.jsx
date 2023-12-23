import FormLogin from "../components/fragments/FormLogin";
import AuthLayout from "../components/layouts/AuthLayout";

const LoginPage = () => {
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
