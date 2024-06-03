import { AuthPage, ThemedTitleV2 } from "@refinedev/antd";
import { AppIcon } from "../../components/app-icon";
import SVGComponent from "./svg";

export const Login = () => {
  return (
    <AuthPage
      type="login"
      title={<SVGComponent />}
      // formProps={{
      //   initialValues: { email: "photographer@photo.com", password: "demodemo" },
      // }}
    />
  );
};
