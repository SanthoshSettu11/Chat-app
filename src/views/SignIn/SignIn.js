import React, { useState } from "react";
import "./SignIn.css";
import StyledInput from "../StyledMaterialComponents/StyledInput";
import StyledButton from "../StyledMaterialComponents/StyledButton";
import { Link, useHistory } from "react-router-dom";
import Logo from "../Logo/Logo";
import { stopLoader, showLoader } from "../../store/Loader/LoaderActions";
import { useDispatch } from "react-redux";
import { USERLOGIN } from "../../services/Constants";
import { postMethod } from "../../services/ApiService";
import { loggedIn } from "../../store/Login/LoginActions";
import PhoneInput from "react-phone-input-2";

function SignIn(props) {
  const [mobile, setmobile] = useState("+91");
  const dispatch = useDispatch();
  const history = useHistory();
  const signIn = () => {
    if (true) {
      //isMobileNumberValid
      const req = {
        mobileNumber: mobile
      };
      dispatch(showLoader());
      postMethod(USERLOGIN, req)
        .then((res) => {
          console.log(res);
          if (res && res.response && res.response.status) {
            dispatch(loggedIn(res.response));
            localStorage.setItem("isLoggedIn", "true");
            localStorage.setItem("logginData", JSON.stringify(res.response));
            history.push("/home");
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          dispatch(stopLoader());
        });
    }
  };

  return (
    <div className="signincontainer">
      <Logo />
      <div>
        <PhoneInput
          country={"in"}
          value={mobile}
          inputProps={{}}
          onChange={(phone) => setmobile(phone)}
        />
      </div>
      <StyledButton onClick={() => signIn()}>Sign In</StyledButton>
      <div>
        <span>No Account? </span>
        <span className="signincontainer_createonelabel">
          <Link className="signincontainer_signuplink" to="/signup">
            {" "}
            Create One
          </Link>
        </span>
      </div>
    </div>
  );
}

export default SignIn;
