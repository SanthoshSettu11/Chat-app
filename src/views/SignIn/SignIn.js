import React, { useState } from "react";
import "./SignIn.css";
import StyledInput from "../StyledMaterialComponents/StyledInput";
import StyledButton from "../StyledMaterialComponents/StyledButton";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

function SignIn(props) {
  const [mobile, setmobile] = useState("");
  const [countryCode, setCountryCode] = useState("");

  return (
    <div className="signincontainer">
      <Logo />
      <StyledInput
        type="input"
        color="secondary"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setmobile(e.target.value)}
      ></StyledInput>
      <StyledButton>Sign In</StyledButton>
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
