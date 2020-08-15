import React, { useState } from "react";
import "./SignUp.css";
import Logo from "../Logo/Logo";
import StyledInput from "../StyledMaterialComponents/StyledInput";
import StyledButton from "../StyledMaterialComponents/StyledButton";
import Otp from "../Otp/Otp";
import { postMethod } from "../../services/ApiService";
import { SIGNUPVALIDATION } from "../../services/Constants";

function SignUp() {
  const [mobile, setmobile] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [profileName, setProfileName] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpValidation, setIsOTPValidation] = useState(false);

  const signUpClicked = () => {
    if (isValidate()) {
      const req = {
        mobileNumber: countryCode + "" + mobile
      };
      postMethod(SIGNUPVALIDATION, req)
        .then((res) => {
          console.log(res);
          setOtp("5555");
          setIsOTPValidation(true);
          setTimeout(() => {
            setOtp("");
          }, 10000);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const isValidate = () => {
    if (profileName.length <= 0) {
      return false;
    }
    return true;
  };

  return (
    <div className="signupcontainer">
      <Logo />
      <StyledInput
        type="input"
        color="secondary"
        placeholder="Profile Name"
        value={profileName}
        onChange={(e) => setProfileName(e.target.value)}
      ></StyledInput>
      <div className="display_flex signupcontainer_spacebetween">
        <StyledInput
          className="signupcontainer_countrycode"
          type="input"
          color="secondary"
          placeholder="Country Code"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        ></StyledInput>
        <StyledInput
          className="signupcontainer_mobilenumber"
          type="input"
          color="secondary"
          placeholder="Mobile Number"
          value={mobile}
          onChange={(e) => setmobile(e.target.value)}
        ></StyledInput>
      </div>
      <StyledButton onClick={signUpClicked}>Sign Up!</StyledButton>
      {isOtpValidation && <Otp TempOtp={otp} />}
    </div>
  );
}

export default SignUp;
