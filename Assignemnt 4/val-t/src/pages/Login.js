import bg from "../assets/bg_home.svg";
import whiteRect from "../assets/login-rect.svg";
import logo from "../assets/val-t-text.svg";
import {
  makeStyles,
  Button,
  Box,
  responsiveFontSizes,
} from "@material-ui/core";
import { TextField } from "@mui/material";
import { color } from "@mui/system";
import { white } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import { useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const useStyles = makeStyles((theme) => ({
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
    paddingTop: 72,
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
    fontSize: "18px",
    fontFamily: "Mark Pro",
  },

  button: {
    width: 196,
    height: 35,
    paddingTop: 0,
    paddingBottom: 40,
    paddingLeft: 100
  },

  buttonText: {
    marginTop: 5,
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
    width: 180,
    height: 22,
    paddingTop: -20,
  },

  createAccButtonText: {
    padding: 0,
    textAlign: "center",
    backgroundColor: "transparent",
    fontFamily: "Mark Pro",
    fontSize: "18px",
    color: "white",

    border: 0,
    "&:hover": {
      color: "black",
      backgroundColor: "transparent",
      border: 0,
    },
  },
}));
async function loginUser(credentials) {
  console.log(credentials);
  return fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => {
    console.log(data.status);
    if (data.status === 200) {
      return data.json();
    } else {
      return "incorrect";
    }
  });
}

export default function Login() {
  const [errorState, setErrorState] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const token = await loginUser({
      username,
      password,
    });
    if (token === "incorrect") {
      setErrorState(true);
    } else {
      const cookies = new Cookies();
      cookies.set("User", token, { path: "/" });
      navigate("/");
    }

    console.log(token);
  };
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.page}>
        <div className={classes.container}>
          <div className={classes.detailsContainer}>
            <form onSubmit={handleSubmit}>
              <TextField
                id="username"
                className={classes.inputUsername}
                style={{ backgroundColor: "white", marginBottom: 31 }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Mark Pro",
                    fontSize: "18px",
                    color: "#ACACAC",
                  },
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
                  style: {
                    fontFamily: "Mark Pro",
                    fontSize: "18px",
                    color: "#ACACAC",
                  },
                }}
                label="PASSWORD"
                variant="filled"
                type="password"
                InputProps={{ disableUnderline: true }}
              />
              <div className={classes.button}>
                <button type="submit">
                  <h2 className={classes.buttonText}>LOG IN</h2>
                </button>
              </div>
              </form>
            <div
              className={classes.createAccButton}
              style={{ paddingBottom: 30 }}
            >
              <Link
                style={{ textDecoration: "none" }}
                to="/signup"
                className={classes.createAccButton}
              >
                <h2 className={classes.createAccButtonText}>CREATE ACCOUNT</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
