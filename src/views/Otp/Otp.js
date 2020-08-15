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

function Otp(props) {
  const [open, setOpen] = useState(true);
  const [otp, setOtp] = useState("");
  const [isInvalidOtp, setIsInvalidOtp] = useState(false);

  useEffect(() => {
    setOtp(true);
    return () => {
      cleanup();
    };
  }, []);

  const cleanup = () => {
    otp("");
    isInvalidOtp("");
  };

  const handleOtpChange = (event) => {
    if (event.length <= 4) {
      setOtp(event);
    }
  };

  const handleClose = () => {
    setIsInvalidOtp(false);
    if (otp === props.TempOtp) {
      setOpen(false);
    } else {
      setIsInvalidOtp(true);
    }
  };

  const cancel = () => {
    setOpen(false);
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
            value={otp}
            onChange={(e) => handleOtpChange(e.target.value)}
            fullWidth
          />
          {isInvalidOtp && (
            <DialogContentText className="error">Invalid Otp</DialogContentText>
          )}
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
