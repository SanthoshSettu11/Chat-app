import React, { useState, useEffect } from "react";
import "./Otp.css";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Input,
  DialogActions,
  Button
} from "@material-ui/core";
import { OTPGENERATION } from "../../services/Constants";
import { getMethod } from "../../services/ApiService";

function Otp(props) {
  const [open, setOpen] = useState(true);
  const [otpValue, setOtpValue] = useState("");
  const [isInvalidOtp, setIsInvalidOtp] = useState(false);
  const [isExpiredOtp, setIsExpiredOtp] = useState(false);

  useEffect(() => {
    setOtpValue("");
    expireOtp();
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = () => {
    setOtpValue("");
    setIsInvalidOtp(false);
    props.onClose();
  };

  const handleOtpChange = (event) => {
    if (event.length <= 6) {
      setOtpValue(event);
    }
  };

  const handleClose = () => {
    setIsInvalidOtp(false);
    if (otpValue == props.TempOtp && !isExpiredOtp) {
      setOpen(false);
      props.onSubmit(true);
    } else {
      setIsInvalidOtp(true);
    }
  };

  const cancel = () => {
    setOpen(false);
    props.onClose();
  };

  const expireOtp = () => {
    setTimeout(() => {
      setIsExpiredOtp(true);
    }, 1000 * 60 * 10);
  };

  const ResendOtp = () => {
    const req = {
      mobileNumber: props.mobileNumber
    };
    getMethod(OTPGENERATION, req)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Dialog open={open} onClose={cancel} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">OTP Validation</DialogTitle>
        <DialogContent>
          <DialogContentText>Please Enter the Valid.</DialogContentText>
          <Input
            type="input"
            placeholder="Otp"
            value={otpValue}
            onChange={(e) => handleOtpChange(e.target.value)}
            fullWidth
          />
          {isInvalidOtp && (
            <DialogContentText className="error">Invalid Otp</DialogContentText>
          )}
          {isExpiredOtp && (
            <DialogContentText className="error">Invalid Otp</DialogContentText>
          )}
          <DialogContentText class="resend-link">Resend OTP</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={cancel} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Proceed
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Otp;
