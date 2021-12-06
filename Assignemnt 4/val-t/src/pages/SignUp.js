import bg from "../assets/bg_home.svg";
import { makeStyles, Button } from "@material-ui/core";
import whiteRect from "../assets/signup-rect.svg";
import logo from "../assets/val-t-text.svg";
import { TextField } from "@mui/material";
import { color, flexbox } from "@mui/system";
import { white } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

const userType = [
  {
    value: 'PLAYER',
    label: 'PLAYER',
  },
  {
    value: 'SUBSCRIBER',
    label: 'SUBSCRIBER',
  },
  {
    value: 'SPONSOR',
    label: 'SPONSOR',
  },
];

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
    width: 718,
    height: 540,
    backgroundColor: "rgba(255,255,255,.5)",
    margin: "auto",
  },

  nameContainer: {
    paddingTop: 0,
    paddingLeft: 150,
    paddingRight: 150,
    paddingBottom: 18,
    display: "flex",
    justifyContent: "space-between",
  },

  detailsContainer: {
    paddingTop: 0,
    paddingLeft: 150,
    paddingRight: 150,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    width: 171,
    height: 51,
    paddingTop: 28,
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

  inputFirstName: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    order: 1,
    color: "white",
    borderRadius: 6,
    fontFamily: "Mark Pro",
  },

  inputLastName: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    order: 2,
    color: "white",
    borderRadius: 6,
    fontFamily: "Mark Pro",
  },

  inputEmail: {
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

  userDropdown: {
    color: "white",
    borderRadius: 6,
    fontFamily: "Mark Pro",
    width: "100%",
    backgroundColor: "white",
  },

  h1:{
    alignItems: "center",
    borderRadius: 6,
    justifyContent: "space-between",
    fontFamily: "Mark Pro",
    fontSize:40,
    color:"#FF4655",
    textAlign:'center'
  }

}));

export default function SignUp() {
  const [userTypes, setUserType] = React.useState('');

  const handleChange = (event) => {
    setUserType(event.target.value);
  };
  const classes = useStyles();
  return (
    <div className={classes.page}>
   
      <div className={classes.container}>
      <h1 className ={classes.h1} >CREATE ACCOUNT</h1> 
        <div className={classes.nameContainer}> 
          <TextField
            id="first-name"
            className={classes.inputFirstName}
            style={{ backgroundColor: "white", marginRight: 10 }}
            InputLabelProps={{
              style: { fontFamily: "Mark Pro", fontSize: "18px" },
            }}
            label="FIRST NAME"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />

          <TextField
            id="last-name"
            className={classes.inputLastName}
            style={{ backgroundColor: "white", marginLeft: 10 }}
            InputLabelProps={{
              style: { fontFamily: "Mark Pro", fontSize: "18px" },
            }}
            label="LAST NAME"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
        </div>

        <div className={classes.detailsContainer}>
          <TextField
            id="email"
            className={classes.inputEmail}
        
            style={{ backgroundColor: "white", marginBottom: 20 }}
            InputLabelProps={{
              style: { fontFamily: "Mark Pro", fontSize: "18px" },
            }}
            label="EMAIL"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />

          <TextField
            id="password"
            className={classes.inputPassword}
            style={{ backgroundColor: "white", marginBottom: 20 }}
            InputLabelProps={{
              style: { fontFamily: "Mark Pro", fontSize: "18px" },
            }}
            label="PASSWORD"
            variant="filled"
            InputProps={{ disableUnderline: true }}
          />
            
<div className={classes.userDropdown}>
        <TextField className={classes.userDropdown} InputLabelProps={{
              style: { fontFamily: "Mark Pro", fontSize: "18px", width:"100%" },
            }}
          select label=""
          label ="SELECT USER TYPE"
          variant="filled"
          root=""
          value={userTypes}
          onChange={handleChange}
        >
          {userType.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
          

          <div className={classes.button}>
            <Link to="/profile" className={classes.button}>
              <h2 className={classes.buttonText}>SIGN UP</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
