import { useSelector } from "react-redux";
import SignIn from "../components/SignUpAndSignIn/SignIn";
import SignUp from "../components/SignUpAndSignIn/SignUp";
import EventSourceComponent from "../components/SignUpAndSignIn/EventSource";


const LoginPage = () => {
  const isLoginPage = useSelector((state: any) => state.login.isLoginPage);


  return (
    <div className="login-wrapper">
      <div className="login-bg text-center align-content-center px-5">
        <EventSourceComponent/>
      </div>
      <>{isLoginPage ? <SignIn /> : <SignUp />}</>
    </div>
  );
};

export default LoginPage;
