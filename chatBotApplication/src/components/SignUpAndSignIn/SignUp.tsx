import { Button, Checkbox, FormControlLabel } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./SignUpAndSignIn.css";
import { useDispatch } from "react-redux";
import { $toggleSignUpAndSignIn } from "../../store/loginSlice";
import { useRef } from "react";
import useToggle from "../../customHooks/useToggle";
import { userService } from "../../services/userServices/userService";
import useToken from "../../customHooks/useToken";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { status: isShowPass, toggleStatus: toggleShow } = useToggle();
  const { token, saveToken: setToken } = useToken();

  const userFirstName = useRef("" as any);
  const userLastName = useRef("" as any);
  const userEmailId = useRef("" as any);
  const userName = useRef("" as any);
  const userPass = useRef("" as any);

  const navigateToSignIn = () => {
    dispatch($toggleSignUpAndSignIn());
  };

  const handleSignUp = async () => {
    try {
      const payload = {
        first_name: userFirstName.current.value,
        last_name: userLastName.current.value,
        user_name: userName.current.value,
        email_id: userEmailId.current.value,
        user_password: userPass.current.value,
      };
      const { data }: any = await userService.signUpUser(payload);
      if (data && data.token) {
        setToken(data.token as string);
        userFirstName.current.value = "";
        userLastName.current.value = "";
        userEmailId.current.value = "";
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
        <h2 className="text-center">Sign Up</h2>
        <div className="first_last_name_wrapper mb-3">
          <div className="d-flex flex-column">
            <label className="text-start pb-2">First Name *</label>
            <TextField
              required
              id="first-name-text-field"
              placeholder="First name"
              inputRef={userFirstName}
            />
          </div>
          <div className="d-flex flex-column">
            <label className="text-start pb-2">Last Name *</label>
            <TextField
              required
              id="last-name-text-field"
              placeholder="Last name"
              inputRef={userLastName}
            />
          </div>
        </div>
        <div className="d-flex flex-column mb-3">
          <label className="text-start pb-2">Email *</label>
          <TextField
            required
            id="email-text-field"
            placeholder="Email id"
            inputRef={userEmailId}
          />
        </div>
        <div className="d-flex flex-column mb-3">
          <label className="text-start pb-2">Username *</label>
          <TextField
            required
            id="username-text-field"
            placeholder="Username"
            inputRef={userName}
          />
        </div>
        <div className="d-flex flex-column mb-3">
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
            onClick={handleSignUp}
          >
            Create account
          </Button>
          <div>
            <span className="px-2">(or)</span>
            <label>
              Already have account ?{" "}
              <label
                className="text-primary pointer"
                onClick={navigateToSignIn}
              >
                Login
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
