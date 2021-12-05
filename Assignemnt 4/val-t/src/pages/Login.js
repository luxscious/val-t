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
input: {

  color: "white",
  width: "30%", 
  height: "5.5%",
  borderRadius: 6,
  fontFamily: "Mark Pro",
  backgroundPosition: "center",
  display: "flex",
  flexDirection: "column",

},
inputText: {
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  fontSize: '16px',
  fontFamily: "Mark Pro",
}, 
}));

export default function Login() {
  const classes = useStyles();
  return (
    
     <div className={classes.container}> 
        <div className={classes.loginRectangle}/> 
        <TextField id="filled-basic" className={classes.input} style={{backgroundColor:"white"}} InputLabelProps={{style: {fontFamily:"Mark Pro", fontSize:"18px"}}}label="USERNAME" variant="filled"  InputProps={{disableUnderline: true}}/>      

      <div className={classes.button}>
         {/* <Link to="/profile" className={classes.button}>
            <h2 className={classes.buttonText}>LOG IN</h2>
  </Link> */}
        </div>
        </div>
    );
}
