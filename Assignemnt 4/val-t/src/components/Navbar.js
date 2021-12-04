import React from "react";
import { AppBar, Toolbar, CssBaseline, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../assets/Val-T Header Logo.svg";

const useStyles = makeStyles((theme) => ({
  bar: {
    background: "#111111",
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "16px",
    fontFamily: "Mark Pro",
    fontWeight: "Bold",
    marginLeft: 65,
    "&:hover": {
      color: "#FF4655",
    },
    letterSpacing: "15%",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.bar}>
      <CssBaseline />
      <Toolbar className={classes.toolBar}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className={classes.navlinks}>
          <Link to="/Tournaments" className={classes.link}>
            TOURNAMENTS
          </Link>
          <Link to="/Leaderboard" className={classes.link}>
            LEADERBOARD
          </Link>
          <Link to="Login" className={classes.link}>
            LOGIN
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
