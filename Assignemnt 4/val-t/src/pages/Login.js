import bg from "../assets/bg_home.svg";
import whiteRect from "../assets/login-rect.svg"
import logo from "../assets/val-t-text.svg";
import { makeStyles, Button } from "@material-ui/core";
import { TextField } from "@mui/material";
import { color } from "@mui/system";
import { white } from "material-ui/styles/colors";
import { Link } from "react-router-dom";

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

  loginRectangle: {
    position: "fixed",
    padding: 0,
    margin: 0,

    borderRadius: 30,

    width: "60%",
    height: "60%",
    backgroundImage: `url(${whiteRect})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover ",
    zIndex: "-1",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

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
username: {

  color: "white",
  width: "35%", 
  height: "5.5%",
  borderRadius: 6,

},
inputText: {
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  fontSize: '16px',
}, 
password: {

  color: "white",
  width: "35%", 
  height: "5.5%",
  borderRadius: 6,
}
}));

export default function Login() {
  const classes = useStyles();
  return (
   
     <div className={classes.container}> 
      <div className={classes.loginRectangle}> </div>
      <TextField style={{backgroundColor:white, height:"5.5%"}} className={classes.username} label="Username" InputProps={classes.inputText}/>
      <TextField style={{backgroundColor:white, height:"5.5%"}} className={classes.password} label="Password" InputProps={classes.inputText}/> 
      <div className={classes.button}>
          <Link to="/login" className={classes.button}>
            <h2 className={classes.buttonText}>LOG IN</h2>
          </Link>
        </div>
      </div>
    );
}
