import React, { useState, useEffect } from "react";
import "./SignUp.css";
import Logo from "../Logo/Logo";
import StyledInput from "../StyledMaterialComponents/StyledInput";
import StyledButton from "../StyledMaterialComponents/StyledButton";
import Otp from "../Otp/Otp";
import { postMethod, getMethod } from "../../services/ApiService";
import {
  SIGNUPVALIDATION,
  OTPGENERATION,
  SIGNUPREGISTRATION
} from "../../services/Constants";
import { useDispatch, useSelector } from "react-redux";
import { showLoader, stopLoader } from "../../store/Loader/LoaderActions";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function SignUp() {
  const [mobile, setmobile] = useState("");
  const [rawPhone, setrawPhone] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [profileName, setProfileName] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpValidation, setIsOTPValidation] = useState(false);
  const dispatch = useDispatch();

  const signUpClicked = () => {
    if (isValidate()) {
      const req = {
        mobileNumber: mobile
      };
      dispatch(showLoader());
      postMethod(SIGNUPVALIDATION, req)
        .then((res) => {
          if (res.response) {
            setOtp(res.response.otp);
            setIsOTPValidation(true);
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

  const isValidate = () => {
    if (profileName.length <= 0) {
      return false;
    }
    return true;
  };

  const submitOtp = (event) => {
    if (event) {
      const req = {
        mobileNumber: rawPhone,
        userName: profileName,
        countryCode: countryCode
      };
      dispatch(showLoader());
      postMethod(SIGNUPREGISTRATION, req)
        .then((res) => {
          console.log(res);
        })
        .catch(
          (error) => {
            console.log(error);
          },
          () => {
            dispatch(stopLoader());
          }
        );
    }
  };

  const handleOnChange = ({ value, country, e, formattedValue }) => {
    setrawPhone(value.slice(country.dialCode.length));
    setmobile(formattedValue);
    setCountryCode(country.dialCode);
  };

  const closeOtp = () => {
    setIsOTPValidation(false);
    dispatch(stopLoader());
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
        <PhoneInput
          country={"in"}
          value={mobile}
          inputProps={{
            disableCountryCode: true,
            countryCodeEditable: false
          }}
          onChange={(value, country, e, formattedValue) =>
            handleOnChange({ value, country, e, formattedValue })
          }
        />
      </div>
      <StyledButton onClick={signUpClicked}>Sign Up!</StyledButton>
      {
        isOtpValidation && (
          // <ForwardRef>
          <Otp
            TempOtp={otp}
            mobileNumber={mobile}
            onSubmit={(e) => submitOtp(e)}
            onClose={() => closeOtp()}
          />
        )
        // </ForwardRef>
      }
    </div>
  );
}

export default SignUp;
