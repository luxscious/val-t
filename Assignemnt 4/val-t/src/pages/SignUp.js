import bg from "../assets/bg_home.svg";
import { makeStyles, Button } from "@material-ui/core";
import whiteRect from "../assets/signup-rect.svg"
import logo from "../assets/val-t-text.svg";
import { TextField } from "@mui/material";
import { color } from "@mui/system";
import { white } from "material-ui/styles/colors";
import { Link } from "react-router-dom";

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
  /*content: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 65, //Toolbar takes up 65px
  },*/

  container: {
    position: "fixed",
    borderRadius: 30,
    width: 718,
    height: 540,
    opacity: "50%",
    backgroundColor: "#FFFFFF",
    margin: "auto",
    zIndex: "-1",
    display: "flex"
    //justifyContent: "center",
  },

  button: {
    textAlign: "center",
    textDecoration: "none",
    width: 171,
    height: 51,
    marginBottom: 0,
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
input: {
  color: "white",
  width: 192, 
  height: 56,
  borderRadius: 6,
  fontFamily: "Mark Pro",
  marginLeft: 40,
  //backgroundPosition: "center",
  //display: "flex",
  //flexDirection: "column",

},
inputText: {
  backgroundColor: '#FFFFFF',
  textAlign: 'center',
  fontSize: '16px',
  fontFamily: "Mark Pro",
}, 
}));

export default function SignUp() {
  const classes = useStyles();
  return (
    
     <div className={classes.page}> 
        <div className={classes.container}/> 
        <TextField id="filled-basic" className={classes.input} style={{backgroundColor:"white"}} InputLabelProps={{style: {fontFamily:"Mark Pro", fontSize:"18px"}}}label="FIRST NAME" variant="filled"  InputProps={{disableUnderline: true}}/>      

      <div className={classes.button}>
         <Link to="/profile" className={classes.button}>
            <h2 className={classes.buttonText}>SIGN UP</h2>
      </Link> 
        </div>
        </div>
    );
}
