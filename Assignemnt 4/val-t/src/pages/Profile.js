import { makeStyles } from "@material-ui/core";
import bg from "../assets/profile/bg_profile.svg";
import { useParams } from "react-router";
import profile from "../assets/profile/profile_text.svg";
import settings from "../assets/profile/settings.svg";
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  settings: {
    height: 577,
    width: 260,
    marginTop: 40,
    marginLeft: 30,
  },
  settingsbgDiv: {
    backgroundColor: "#384047",
    opacity: "56%",
    width: 229,
    height: 577,
    position: "absolute",
    left: 62,
    top: 25,
    zIndex: -1,
    borderRadius: 10,
  },
  settingsImg: {},
  form: {
    fontFamily: "Mark Pro",
    color: "white",
    fontSize: 16,
    padding: 17,
    display: "flex",
    flexDirection: "column",
  },
  settingsContent: {
    marginLeft: 32,
    height: 537,
    paddingBottom: 50,
    display: "flex",
    flexDirection: "column",
  },
  input: {
    borderRadius: 6,
    padding: 5,
    border: 0,
    marginBottom: 7,
    marginTop: 5,
  },
  button: {
    borderRadius: 2,
    border: 0,
    width: 56,
    padding: 5,
    fontSize: 10,
    backgroundColor: "#969696",
    fontFamily: "Mark Pro",
    color: "white",
    "&:hover": {
      color: "#111111",
      cursor: "pointer",
    },
  },
  logout: {
    borderRadius: 2,
    border: 0,
    width: 56,
    padding: 5,
    fontSize: 10,
    color: "white",
    backgroundColor: "#969696",
    fontFamily: "Mark Pro",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "auto",
    "&:hover": {
      color: "#111111",
      cursor: "pointer",
    },
  },
}));

export default function Profile() {
  const classes = useStyles();
  const user = useParams();
  console.log(user.username);
  return (
    <div className={classes.page}>
      <div className={classes.settings}>
        <img src={settings} alt="settings" className={classes.settingsImg} />

        <div className={classes.settingsbgDiv}> </div>
        <div className={classes.settingsContent}>
          <form className={classes.form}>
            <label>PLAYERNAME:</label>
            <input
              type="text"
              placeholder="username"
              className={classes.input}
            ></input>
            <button type="submit" className={classes.button}>
              CHANGE
            </button>
          </form>
          <form className={classes.form}>
            <label>PASSWORD:</label>
            <input
              type="text"
              placeholder="password"
              className={classes.input}
            ></input>
            <button type="submit" className={classes.button}>
              CHANGE
            </button>
          </form>

          <button className={classes.logout}>LOGOUT</button>
        </div>
      </div>
      <div className={classes.statsContainer}>
        {/* Stats */}
        <div className={classes.stats}>{/* Player */}</div>
        <div className={classes.stats}>{/* Team */}</div>
      </div>
      <div className={classes.helloContainer}>
        <div className={classes.hello}></div>
        <div className={classes.teams}></div>
      </div>
      <div className={classes.profile}>
        <img src={profile} alt="profile" />
      </div>
    </div>
  );
}
