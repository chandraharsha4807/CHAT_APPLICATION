import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { $toggleSignUpAndSignIn } from "../../store/loginSlice";
import { useRef } from "react";
import useToggle from "../../customHooks/useToggle";
import { userService } from "../../services/userServices/userService";
import { useNavigate } from "react-router-dom";
import useToken from "../../customHooks/useToken";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status: isShowPass, toggleStatus: toggleShow } = useToggle();
  const { token, saveToken: setToken } = useToken();

  const navigateToSignUp = () => {
    dispatch($toggleSignUpAndSignIn());
  };

  const userName = useRef("" as any);
  const userPass = useRef("" as any);

  const handleLogin = async () => {
    try {
      const payload = {
        user_name: userName.current.value,
        user_password: userPass.current.value,
      };
      const { data }: any = await userService.loginUser(payload);
      if (data && data.token) {
        setToken(data.token as string);
        userName.current.value = "";
        userPass.current.value = "";
        navigate("/chat", { replace: true });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="signup-signin-wrapper">
      <div className="signup-signin-child-wrapper">
        <h2 className="text-center">Login</h2>
        <div className="d-flex flex-column">
          <label className="text-start pb-2">Username *</label>
          <TextField
            required
            id="username-text-field"
            placeholder="Username"
            inputRef={userName}
          />
        </div>
        <div className="d-flex flex-column">
          <>
            <label className="text-start pb-2">Password *</label>
            <TextField
              required
              id="p-text-field"
              placeholder="Password"
              type={isShowPass ? "text" : "password"}
              inputRef={userPass}
            />
          </>
          <FormControlLabel
            control={<Checkbox checked={isShowPass} size="small" />}
            label="Show password"
            onClick={toggleShow}
          />
        </div>
        <div className="pt-3 d-flex justify-content-start align-items-baseline">
          <Button
            variant="contained"
            className="text-center"
            onClick={handleLogin}
          >
            Login
          </Button>
          <div>
            <span className="px-2">(or)</span>
            <label>
              Don't have account ?{" "}
              <label
                className="text-primary pointer"
                onClick={navigateToSignUp}
              >
                Sign Up
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
