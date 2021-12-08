import bg from "../assets/bg_home.svg";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router";
const userType = [
  {
    value: "PLAYER",
    label: "PLAYER",
  },
  {
    value: "SUBSCRIBER",
    label: "SUBSCRIBER",
  },
  {
    value: "SPONSOR",
    label: "SPONSOR",
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 171,
    height: 51,
    paddingTop: 5,
    margin: "auto",
    marginTop: 10,
    padding: 8,
    textAlign: "center",
    borderRadius: 10,
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
    cursor: "pointer",
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

  h1: {
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Mark Pro",
    fontSize: 40,
    color: "#FF4655",
    paddingTop: 10,
    textAlign: "center",
  },
}));

export default function SignUp() {
  const [userTypes, setUserType] = React.useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setUserType(event.target.value);
  };

  async function signUpUser(credentials) {
    return fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => {});
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;
    navigate("/login");
    const result = await signUpUser({
      username,
      email,
      password,
    }).then(() => {});
  };

  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.page}>
        <div className={classes.container}>
          <h1 className={classes.h1}>CREATE ACCOUNT</h1>

          <div className={classes.detailsContainer}>
            <form onSubmit={handleSubmit}>
              <TextField
                required
                id="username"
                className={classes.inputEmail}
                style={{ backgroundColor: "white", marginBottom: 20 }}
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
                id="email"
                className={classes.inputEmail}
                style={{ backgroundColor: "white", marginBottom: 20 }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Mark Pro",
                    fontSize: "18px",
                    color: "#ACACAC",
                  },
                }}
                type="email"
                label="EMAIL"
                variant="filled"
                InputProps={{ disableUnderline: true }}
                required
              />

              <TextField
                required
                id="password"
                className={classes.inputPassword}
                style={{ backgroundColor: "white", marginBottom: 20 }}
                InputLabelProps={{
                  style: {
                    fontFamily: "Mark Pro",
                    fontSize: "18px",
                    color: "#ACACAC",
                  },
                }}
                type="password"
                label="PASSWORD"
                variant="filled"
                InputProps={{ disableUnderline: true }}
              />

              <div className={classes.userDropdown}>
                <TextField
                  required
                  className={classes.userDropdown}
                  InputLabelProps={{
                    style: {
                      fontFamily: "Mark Pro",
                      fontSize: "18px",
                      width: "100%",
                      color: "#ACACAC",
                    },
                  }}
                  select
                  label=""
                  label="SELECT USER TYPE"
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

              <button type="submit" className={classes.button}>
                SIGN UP
                {/* <h2 className={classes.buttonText}>SIGN UP</h2> */}
              </button>
            </form>
            <button
              onClick={() => {
                navigate("/Login");
              }}
              className={classes.button}
            >
              LOGIN
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
