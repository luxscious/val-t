import omenBg from "../assets/leaderboard/omen.svg";
import txt from "../assets/leaderboard/text.svg";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `url(${omenBg})`,
    minHeight: 417,
    backgroundAttachment: "fixed",
    // backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  container: {
    height: 1260,
    backgroundColor: "white",
  },
  text: {
    position: "absolute",
    top: 50,
    left: 126,
  },
}));
export default function Leaderboard() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.bg}>
        <img src={txt} alt="leaderboard" className={classes.text} />
      </div>
      <div className={classes.container}></div>
    </>
  );
}
