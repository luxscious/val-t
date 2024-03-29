import bg from "../assets/bg_home.svg";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
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

  loginError: {
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Mark Pro",
    fontSize: 18,
    color: "#FF4655",
    paddingTop: 10,
    textAlign: "center",
    opacity: 0,
  },
}));
async function loginUser(credentials) {
  return fetch("http://localhost:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => {
    if (data.status === 200) {
      return data.json();
    } else {
      return "incorrect";
    }
  });
}

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.currentTarget.username.value;
    const password = event.currentTarget.password.value;
    const loginErrorMsg = document.getElementById("error");

    const token = await loginUser({
      username,
      password,
    });
    if (token === "incorrect") {
      alert("Incorrect username or password");
      loginErrorMsg.style.opacity = 1;
    } else {
      const cookies = new Cookies();
      cookies.set("User", token, { path: "/" });
      navigate("/");
    }
  };
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <div className={classes.page}>
        <div className={classes.container}>
          <h1 id="error" className={classes.loginError}></h1>
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

              <div>
                <button className={classes.button} type="submit">
                  LOG IN
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
