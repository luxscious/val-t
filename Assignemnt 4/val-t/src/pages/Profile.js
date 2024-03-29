import { makeStyles } from "@material-ui/core";
import bg from "../assets/profile/bg_profile.svg";
import profile from "../assets/profile/profile_text.svg";
import settings from "../assets/profile/settings.svg";
import stats from "../assets/profile/stats.svg";
import hello from "../assets/profile/hello.svg";
import teamsTxt from "../assets/profile/teams.svg";
import player from "../assets/profile/player.svg";
import team from "../assets/profile/teamTxt.svg";
import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  page: {
    position: "fixed",
    padding: 0,
    margin: 0,
    marginTop: 48,
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
    height: 456,
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
  statsContainer: {
    marginTop: 25,
    height: 577,
    width: 234,
  },
  playerTxt: {
    marginLeft: 5,
  },
  statsBg: {
    width: 234,
    height: 264,
    backgroundColor: "#384047",
    opacity: "56%",
    position: "absolute",
    zIndex: -1,
    borderRadius: 10,
  },
  statsInnerBg: {
    width: 202,
    height: 202,
    backgroundColor: "#C4C4C4",
    opacity: "28%",
    marginTop: 41,
    marginLeft: 16,
    marginRight: 16,
  },
  statsInfo: {
    flexDirection: "column",
    marginLeft: 40,
    alignItems: "center",
    justifyContent: "center",
    width: 202,
  },
  statsInfoLabels: {
    display: "flex",
    flexDirection: "row",
    fontFamily: "Mark Pro",
    color: "white",
    marginBottom: -70,
    fontSize: 14,
  },
  statsInfoNums: {
    display: "flex",
    flexDirection: "row",
    color: "#FF4655",
    fontFamily: "Mark Pro",
    fontWeight: "Bold",
    fontSize: 48,
  },
  winLossMargins: {
    marginLeft: "auto",
    marginRight: "auto",
  },
  helloContainer: {
    width: 417,
    height: 577,
    marginTop: 25,
  },
  helloBg: {
    width: 417,
    height: 95,
    backgroundColor: "#384047",
    opacity: "56%",
    position: "absolute",
    zIndex: -1,
    borderRadius: 10,
    marginLeft: 31,
  },
  hello: {
    display: "flex",
    flexDirection: "row",
  },
  helloText: {
    color: "#FF4655",
    fontFamily: "Mark Pro",
    marginLeft: 22,
  },
  teamBg: {
    width: 417,
    height: 453,
    backgroundColor: "#384047",
    opacity: "56%",
    position: "absolute",
    zIndex: -1,
    top: 149,
    left: 825,
    borderRadius: 10,
  },
  teamInnerBg: {
    width: 362,
    height: 374,
    backgroundColor: "#C4C4C4",
    opacity: "28%",
    marginTop: 47,
    margin: "auto",
  },
  ids: {
    color: "white",
    fontSize: 18,
    fontFamily: "Mark Pro",
    textAlign: "center",
    width: 77,
    marginLeft: 39,
  },
  teams: {
    width: 362,
    height: 374,
  },
  line: {
    borderLeft: "2px solid white",
    height: 317,
    marginLeft: 25,
    marginRight: 25,
  },
  information: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 57,
    width: 362,
  },
  names: {
    color: "white",
    fontSize: 18,
    fontFamily: "Mark Pro",
  },
}));
async function changeUsername(userId, username) {
  return fetch("http://localhost:5000/changeUsername", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId, username: "username" }),
  }).then((data) => {
    return data.status;
  });
}
async function changePassword(userId, password) {
  return fetch("http://localhost:5000/changePassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId: userId, password: password }),
  }).then((data) => {
    return data.status;
  });
}

export default function Profile() {
  const classes = useStyles();
  const navigate = useNavigate();

  const user = JSON.parse(Cookies.get("User"))[0];

  const [playerWins, setPlayerWins] = useState(0);
  const [playerLosses, setPlayerLosses] = useState(0);
  const [teamWins, setTeamWins] = useState(0);
  const [teamLosses, setTeamLosses] = useState(0);
  const [teams, setTeams] = useState([]);
  const handleLogout = () => {
    Cookies.remove("User");
    navigate("/");
  };

  const getPlayerWins = async () => {
    try {
      let userid = { userId: user.userId };
      return fetch("http://localhost:5000/getPlayerStats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userid),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setPlayerWins(data.data[0]?.wins);
          setPlayerLosses(data.data[0]?.losses);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const getTeamStats = () => {
    let wins = 0;
    let loss = 0;
    for (let i = 0; i < teams.length; i++) {
      console.log(teams[i]);
      wins += teams[i].wins;
      loss += teams[i].losses;
    }
    setTeamLosses(loss);
    setTeamWins(wins);
  };
  const getTeamsStats = async () => {
    try {
      return fetch("http://localhost:5000/getTeamPlayerStats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: user.userId }),
      })
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setTeams(data.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPlayerWins();
    getTeamsStats();
    getTeamStats();
  }, [teams]);

  const handlePasswordSubmit = async (event) => {
    event.preventDefault();
    let user = JSON.parse(Cookies.get("User"));
    let userId = user[0].userId;

    const password = event.currentTarget.password.value;
    const response = await changePassword(userId, password);
    alert(response);
    navigate("/profile");
  };

  return (
    <>
      <Navbar />
      <div className={classes.page}>
        <div className={classes.settings}>
          <img src={settings} alt="settings" className={classes.settingsImg} />
          <div className={classes.settingsbgDiv}> </div>
          <div className={classes.settingsContent}>
            {/* <form onSubmit={handleUserSubmit} className={classes.form}>
              <label>PLAYERNAME:</label>
              <input
                id="username"
                type="text"
                placeholder="username"
                className={classes.input}
              ></input>
              <button type="submit" className={classes.button}>
                CHANGE
              </button>
            </form> */}
            <form onSubmit={handlePasswordSubmit} className={classes.form}>
              <label>PASSWORD:</label>
              <input
                id="password"
                type="text"
                placeholder="password"
                className={classes.input}
              ></input>
              <button type="submit" className={classes.button}>
                CHANGE
              </button>
            </form>

            <button className={classes.logout} onClick={handleLogout}>
              LOGOUT
            </button>
          </div>
        </div>
        <div className={classes.statsContainer}>
          <img src={stats} alt="stats" style={{ marginTop: 10 }} />
          <img src={player} alt="player" className={classes.playerTxt} />
          {/* Player */}
          <div className={classes.statsInfo}>
            <div className={classes.statsInfoLabels}>
              <h6 className={classes.winLossMargins}>WINS</h6>
              <h6 className={classes.winLossMargins}>LOSSES</h6>
            </div>
            <div className={classes.statsInfoNums}>
              <h4 className={classes.winLossMargins}>{playerWins}</h4>
              <h4 className={classes.winLossMargins}>{playerLosses}</h4>
            </div>
            <div className={classes.statsBg} style={{ top: 25, left: 450 }}>
              <div className={classes.statsInnerBg}></div>
            </div>
          </div>
          <img src={stats} alt="stats" style={{ marginTop: 57 }} />
          <img src={team} alt="player" className={classes.playerTxt} />
          {/* Team */}
          <div className={classes.statsInfo}>
            <div className={classes.statsInfoLabels}>
              <h6 className={classes.winLossMargins}>WINS</h6>
              <h6 className={classes.winLossMargins}>LOSSES</h6>
            </div>
            <div className={classes.statsInfoNums}>
              <h4 className={classes.winLossMargins}>{teamWins}</h4>
              <h4 className={classes.winLossMargins}>{teamLosses}</h4>
            </div>
            <div className={classes.statsBg} style={{ top: 323, left: 450 }}>
              <div className={classes.statsInnerBg}></div>
            </div>
          </div>
        </div>

        <div className={classes.helloContainer}>
          <div className={classes.hello}>
            <img src={hello} alt="hello" />
            <h1 className={classes.helloText}>"{user.name.toUpperCase()}"</h1>
            <div className={classes.helloBg}></div>
          </div>
          <div className={classes.teams}>
            <img src={teamsTxt} alt="teams" style={{ marginTop: 57 }} />

            <div className={classes.information}>
              <div className={classes.ids}>
                <h3>ID</h3>
                {teams.map(function (d) {
                  return <h4>{d.id}</h4>;
                })}
              </div>
              <div className={classes.line}></div>
              <div className={classes.names}>
                <h3>NAME</h3>
                {teams.map(function (d) {
                  return <h4>{d.name}</h4>;
                })}
              </div>
            </div>
          </div>
          <div className={classes.teamBg}>
            <div className={classes.teamInnerBg}></div>
          </div>
        </div>
        <div className={classes.profile}>
          <img src={profile} alt="profile" />
        </div>
      </div>
    </>
  );
}
