import bg from "../assets/bg_home.svg";
import logo from "../assets/val-t-text.svg";
import { makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  //put css here
  container: {
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
  content: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 65, //Toolbar takes up 65px
  },
  button: {
    alignSelf: "center",
    textDecoration: "none",
    width: 209,
    height: 45,
  },
  buttonText: {
    marginTop: 40,
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
}));


export default function SignUp() {
  return <div>Sign up</div>;
}
