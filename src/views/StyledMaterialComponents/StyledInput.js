import { Input } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledInput = withStyles({
  root: {
    color: "#ffffff",
    "& .MuiInput-underline:after": {
      borderBottomColor: "#ffffff"
    },
    "&:hover fieldset": {
      borderColor: "ffffff"
    },
    "&.MuiInput-underline:before": {
      borderBottomColor: "#ffffff !important"
    }
  }
})(Input);

export default StyledInput;
