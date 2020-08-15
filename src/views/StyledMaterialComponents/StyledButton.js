import { Button, withStyles } from "@material-ui/core";

const StyledButton = withStyles({
  root: {
    color: "white",
    border: 0,
    height: "48px",
    padding: "0 30px",
    background: "#969595",
    boxShadow: "2px 0px 5px 1px rgba(199, 196, 197, 0.3)",
    borderRadius: 3,
    margin: "20px"
  }
})(Button);

export default StyledButton;
