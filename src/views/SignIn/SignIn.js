import React, { useState } from "react";
import "./SignIn.css";
import StyledButton from "../StyledMaterialComponents/StyledButton";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { USERLOGIN } from "../../services/Constants";
import { postMethod } from "../../services/ApiService";

function SignIn(props) {
  const [mobile, setmobile] = useState("+91");
  const signIn = () => {
    if (true) {
      //isMobileNumberValid
      const req = {
        mobileNumber: mobile
      };
      postMethod(USERLOGIN, req)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
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
          inputProps={{
            disableCountryCode: true,
            countryCodeEditable: false
          }}
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
