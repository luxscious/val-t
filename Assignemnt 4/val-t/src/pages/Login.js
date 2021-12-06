import bg from "../assets/bg_home.svg";
import whiteRect from "../assets/login-rect.svg"
import logo from "../assets/val-t-text.svg";
import { makeStyles, Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import { color } from "@mui/system";
import { white } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import NotificationNetworkCheck from "material-ui/svg-icons/notification/network-check";

const useStyles = makeStyles((theme) => ({
  //put css here
  page: {
    position: "fixed",
    padding: 0,
    margin: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${bg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover ",
    zIndex: "-1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    position: "fixed",
    borderRadius: 30,
    width: 495,
    height: 426,
    backgroundColor: "rgba(255,255,255,.5)",
    margin: "auto",
  },

  detailsContainer: {
    paddingTop: 87,
    paddingLeft: 96,
    paddingRight: 96,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  inputUsername: {
    color: "white",
    borderRadius: 6,
    fontFamily: "Mark Pro",
    width: "100%",
  },

  inputPassword: {
    color: "white",
    borderRadius: 6,
    fontFamily: "Mark Pro",
    width: "100%",
  },

  inputText: {
    backgroundColor: "#FFFFFF",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "Mark Pro",
  },

  button: {
    width: 196,
    height: 51,
    paddingTop: 0,
    paddingBottom: 43, 
  },

  buttonText: {
    marginBottom: 0,
    padding: 8,
    textAlign: "center",
    backgroundColor: "#FF4655",
    fontFamily: "Mark Pro",
    color: "white",

    border: 0,
    "&:hover": {
      color: "white",
      backgroundColor: "#111111",
      border: 1,
      borderColor: "#FF4655",
    },
  },

  createAccButton: {
    width: 167,
    height: 22,
    paddingTop: 0,
  },

  createAccButtonText: {
    padding: 0,
    textAlign: "center",
    backgroundColor: "transparent",
    fontFamily: "Mark Pro",
    fontSize: "16px",
    color: "white",

    border: 0,
    "&:hover": {
      color: "black",
      backgroundColor: "transparent",
      border: 0,
    },
  },

}));

export default function SignUp() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <div className={classes.container}>
       <div className={classes.detailsContainer}>
          <TextField
            id="username"
            className={classes.inputUsername}
            style={{ backgroundColor: "white", marginBottom: 31 }}
            InputLabelProps={{
              style: { fontFamily: "Mark Pro", fontSize: "18px" },
            }}
            label="USERNAME"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />

          <TextField
            id="password"
            className={classes.inputPassword}
            style={{ backgroundColor: "white", marginBottom: 42 }}
            InputLabelProps={{
              style: { fontFamily: "Mark Pro", fontSize: "18px" },
            }}
            label="PASSWORD"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />

          <div className={classes.button}>
            <Link to="/profile" className={classes.button}>
              <h2 className={classes.buttonText}>LOG IN</h2>
            </Link>
          </div>

          <div className={classes.createAccButton}>
            <Link to="/signup" className={classes.createAccButton}>
              <h2 className={classes.createAccButtonText}>CREATE ACCOUNT</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}