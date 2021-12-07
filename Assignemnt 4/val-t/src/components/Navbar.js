import React, { useEffect } from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import logo from "../assets/Val-T Header Logo.svg";
import Cookies from "js-cookie";
const useStyles = makeStyles((theme) => ({
  bar: {
    background: "#111111",
    height: 70,
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
    letterSpacing: 1.15,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Navbar() {
  const classes = useStyles();
  const user = Cookies.get("User");

  return (
    <AppBar position="fixed" className={classes.bar}>
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
          {!user ? (
            <Link to="/Login" className={classes.link}>
              LOGIN
            </Link>
          ) : (
            <Link to="/Profile" className={classes.link}>
              PROFILE
            </Link>
          )}
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
