import omenBg from "../assets/leaderboard/omen.svg";
import txt from "../assets/leaderboard/text.svg";
import { makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useRef } from "react";
import leaderboardBanner from "../assets/leaderboard/leaderboard.svg";
import leftBig from "../assets/leaderboard/left1.svg";
import leftSmall from "../assets/leaderboard/left2.svg";
import rightBig from "../assets/leaderboard/right1.svg";
import rightSmall from "../assets/leaderboard/right2.svg";
import regionalTopTeamsText from "../assets/leaderboard/regionalTopTeamsText.svg";

import Navbar from "../components/Navbar";
const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundImage: `url(${omenBg})`,
    minHeight: 417,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  },
  container: {
    // height: 1260,
    backgroundColor: "white",
    zIndex: -1,
  },
  text: {
    position: "absolute",
    top: 50,
    left: 126,
  },
  underlinedOption: {
    fontFamily: "Mark Pro",
    fontSize: 20,
    textDecoration: "underline",
    cursor: "pointer",
    color: "#DA515C",
  },
  invisButton: {
    backgroundColor: "white",
    border: 0,
    paddingLeft: 80,
    paddingRight: 80,
  },
  option: {
    fontFamily: "Mark Pro",
    fontSize: 20,
    cursor: "pointer",
  },
  options: {
    display: "flex",
    justifyContent: "center",
    alignItmes: "center",
    marginTop: 53,
  },
  leaderboardBanner: {
    width: 833,
    margin: "auto",
  },
  table: {
    width: 832,
    margin: "auto",
    borderCollapse: "collapse",
    borderBottom: 0,
    marginTop: -20,
  },
  tableRow: {
    borderBottom: "solid #ACACAC",
    textAlign: "center",
    verticalAlign: "middle",
    height: 77,
  },
  tableHeader: {
    textAlign: "left",
    fontFamily: "Cairo",
    fontSize: 20,
  },
  regionalTopTeams: {
    zIndex: 30,
    // position: "absolute",
    marginLeft: 365,
    marginBottom: -50,
  },
  backgroundDiv: {
    width: 500,
    height: 928,
    backgroundColor: "#E5E5E5",
    marginTop: -100,
    marginLeft: 685,
    zIndex: 0,
    padding: 10,
  },
  teams: {
    textAlign: "right",
    fontFamily: "Mark Pro",
    color: "#565656",
    fontSize: 30,
    paddingTop: 28,
    paddingRight: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  buttons: {
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
    marginTop: 20,
  },
  button: {
    backgroundColor: "white",
    border: 0,
    cursor: "pointer",
    padding: 0,
    marginTop: 3,
    marginLeft: -1,
  },
  regionOptions: {
    backgroundColor: "rgba(19, 31, 42, 0.96)",
    borderRadius: 30,
    border: 0,
    width: 1245,
    height: 78,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 150,
    marginLeft: -590,
  },

  regionButton: {
    fontSize: 30,
    fontFamily: "Mark Pro",
    backgroundColor: "rgba(0,0,0,0)",
    border: 0,
    color: "#E5E5E5",
    cursor: "pointer",
    padding: 15,
  },

  highlightedButton: {
    fontSize: 30,
    fontFamily: "Mark Pro",
    backgroundColor: "rgba(0,0,0,0)",
    borde: 0,
    color: "#FF4655",
    cursor: "pointer",
    padding: 20,
  },

  regionalTeamsTable: {
    width: 1245,
    height: 600,
    margin: "auto",
    borderCollapse: "collapse",
    marginTop: 20,
    marginLeft: -590,
    backgroundColor: "rgba(196, 196, 196, 0.6)",
  },
}));

function RenderTable(list, givenIndex) {
  const classes = useStyles();
  let index = givenIndex * 5;
  return list.map((x) => {
    index++;
    return (
      <tr className={classes.tableRow}>
        <td
          style={{
            fontSize: 55,
            fontFamily: "Tungsten Bold",
            backgroundColor: "#E5E5E5",
            width: 122,
          }}
        >
          {x.name ? index : ""}
        </td>
        <td
          style={{
            fontSize: 30,
            fontFamily: "Mark Pro",
            color: "#565656",
            backgroundColor: "#C4C4C4",
            width: 585,
          }}
        >
          {x.name?.toLowerCase()}
        </td>
        <td
          style={{
            fontSize: 30,
            fontFamily: "Mark Pro",
            color: "#565656",
            backgroundColor: "#E5E5E5",
            width: 122,
          }}
        >
          {x.wins}
        </td>
      </tr>
    );
  });
}
export default function Leaderboard() {
  const [agentsList, setAgentsList] = useState([
    { name: "Sage", wins: 10 },
    { name: "Brimstone", wins: 9 },
    { name: "Reyna", wins: 8 },
    { name: "Omen", wins: 7 },
    { name: "Cypher", wins: 6 },
    { name: "Chamber", wins: 5 },
    { name: "Sova", wins: 4 },
  ]);
  const [playersList, setPlayersList] = useState([
    { name: "Sager", wins: 10 },
    { name: "Brimstoner", wins: 9 },
    { name: "Reynar", wins: 8 },
    { name: "Omenr", wins: 7 },
    { name: "Cypherrr", wins: 6 },
    { name: "Chamberrr", wins: 5 },
    { name: "Sovar", wins: 4 },
    { name: "teamAwesomeeee", wins: 3 },
    { name: "teamAwesomer", wins: 3 },
  ]);
  const [teamsList, setTeamsList] = useState([
    { name: "Sageee", wins: 10 },
    { name: "Brimstoneee", wins: 9 },
    { name: "Reynaee", wins: 8 },
    { name: "Omenee", wins: 7 },
    { name: "Cypheree", wins: 6 },
    { name: "Chamberee", wins: 5 },
    { name: "Sovaee", wins: 4 },
    { name: "teamAwesome", wins: 3 },
    { name: "Sageee", wins: 10 },
    { name: "Brimstoneee", wins: 9 },
    { name: "Reynaee", wins: 8 },
    { name: "Omenee", wins: 7 },
    { name: "Cypheree", wins: 6 },
    { name: "Chamberee", wins: 5 },
    { name: "Sovaee", wins: 4 },
    { name: "teamAwesome", wins: 3 },
    { name: "Sageee", wins: 10 },
    { name: "Brimstoneee", wins: 9 },
    { name: "Reynaee", wins: 8 },
    { name: "Omenee", wins: 7 },
  ]);
  const [undefeatedTeams, setDefeatedTeams] = useState([
    { name: "GrannySmithApples" },
    { name: "GameOfCones" },
    { name: "SingleBelles" },
    { name: "BoysThatCriedWolf" },
  ]);

  const [currentList, setCurrentList] = useState("Agents");
  const [indexRef, setIndexRef] = useState(0);
  const totalPages = useRef(1);
  const classes = useStyles();
  const [currentListItems, setCurrentListItems] = useState([]);

  //calculate total pages everytime current list changes
  useEffect(() => {
    if (currentList === "Agents") {
      totalPages.current = Math.ceil(agentsList.length / 5);
    } else if (currentList === "Teams") {
      totalPages.current = Math.ceil(teamsList.length / 5);
    } else {
      totalPages.current = Math.ceil(playersList.length / 5);
    }
    setIndexRef(0);
  }, [currentList]);

  //update list every time page changes
  useEffect(() => {
    let temp = [];

    if (currentList === "Agents") {
      for (let i = indexRef * 5; i < 5 * (indexRef + 1); i++) {
        if (agentsList[i]) {
          temp.push(agentsList[i]);
        } else {
          temp.push("");
        }
      }
    } else if (currentList === "Teams") {
      for (let i = indexRef * 5; i < 5 * (indexRef + 1); i++) {
        if (teamsList[i]) {
          temp.push(teamsList[i]);
        } else {
          temp.push("");
        }
      }
    } else {
      for (let i = indexRef * 5; i < 5 * (indexRef + 1); i++) {
        if (playersList[i]) {
          temp.push(playersList[i]);
        } else {
          temp.push("");
        }
      }
    }
    setCurrentListItems(temp);
  }, [indexRef, currentList]);
  return (
    <>
      <Navbar />
      <div className={classes.bg}>
        <img src={txt} alt="leaderboard" className={classes.text} />
      </div>
      <div className={classes.container}>
        <div className={classes.options}>
          <button
            className={classes.invisButton}
            onClick={() => {
              setCurrentList("Agents");
            }}
          >
            <h3
              className={
                currentList === "Agents"
                  ? classes.underlinedOption
                  : classes.option
              }
            >
              AGENTS
            </h3>
          </button>
          <button
            className={classes.invisButton}
            onClick={() => {
              setCurrentList("Teams");
            }}
          >
            <h3
              className={
                currentList === "Teams"
                  ? classes.underlinedOption
                  : classes.option
              }
            >
              TEAMS
            </h3>
          </button>
          <button
            className={classes.invisButton}
            onClick={() => {
              setCurrentList("Players");
            }}
          >
            <h3
              className={
                currentList === "Players"
                  ? classes.underlinedOption
                  : classes.option
              }
            >
              PLAYERS
            </h3>
          </button>
        </div>
        <div className={classes.leaderboardBanner}>
          <img src={leaderboardBanner} alt="banner" />
        </div>
        <div>
          <table className={classes.table}>
            <th className={classes.tableHeader}>RANK</th>
            <th className={classes.tableHeader}>PLAYER NAME</th>
            <th className={classes.tableHeader}>WINS </th>
            {RenderTable(currentListItems, parseInt(indexRef))}
          </table>
        </div>
        <div className={classes.buttons}>
          {/* <button>Log in to view rank</button> */}
          <button
            className={classes.button}
            disabled={indexRef === 0}
            onClick={() => {
              setIndexRef(0);
            }}
          >
            <img src={leftBig} alt="left" />
          </button>
          <button
            className={classes.button}
            disabled={indexRef === 0}
            onClick={() => {
              setIndexRef(indexRef - 1);
            }}
          >
            <img src={leftSmall} alt="left" />
          </button>
          <div
            style={{
              backgroundColor: "#131F2A",
              width: 680,
              height: 39,
              textAlign: "center",
              color: "white",
              fontFamily: "Cairo",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            {indexRef + 1} of {totalPages.current}
          </div>
          <button
            className={classes.button}
            disabled={indexRef === totalPages.current - 1}
            onClick={() => {
              setIndexRef(indexRef + 1);
            }}
          >
            <img src={rightSmall} alt="right" />
          </button>
          <button
            className={classes.button}
            disabled={indexRef === totalPages.current - 1}
            onClick={() => {
              setIndexRef(totalPages.current - 1);
            }}
          >
            <img src={rightBig} alt="right" />
          </button>
        </div>
        <div className={classes.regionalTopTeamsTextDiv}>
          <img
            src={regionalTopTeamsText}
            alt="regional"
            className={classes.regionalTopTeams}
          />
          <div
            style={{
              width: "100%",
              height: "auto",
              backgroundColor: "#E5E5E5",
            }}
          >
            <div className={classes.backgroundDiv}>
              <div className={classes.regionOptions}>
                <button
                  className={classes.regionButton}
                  style={{ marginRight: 70, marginLeft: 10 }}
                  /*className={
                    currentRegion === "Korea"
                    ? classes.highlightedButton
                    : classes.regionButton
                  }*/
                >
                  KOREA
                </button>
                <button
                  className={classes.regionButton}
                  style={{ marginRight: 95 }}
                  /*className={
                    currentRegion === "Na"
                    ? classes.highlightedButton
                    : classes.regionButton
                  }*/
                >
                  NA
                </button>
                <button
                  className={classes.regionButton}
                  style={{ marginRight: 60 }}
                  /*className={
                    currentRegion === "Sa"
                    ? classes.highlightedButton
                    : classes.regionButton
                  }*/
                >
                  SA
                </button>
                <button
                  className={classes.regionButton}
                  style={{ marginRight: 30 }}
                  /*className={
                    currentRegion === "Oceania"
                    ? classes.highlightedButton
                    : classes.regionButton
                  }*/
                >
                  OCEANIA
                </button>
                <button
                  className={classes.regionButton}
                  style={{ marginRight: 30 }}
                  /*className={
                    currentRegion === "Se Asia"
                    ? classes.highlightedButton
                    : classes.regionButton
                  }*/
                >
                  SE ASIA
                </button>
                <button
                  className={classes.regionButton}
                  style={{ marginRight: 35 }}
                  /*className={
                    currentRegion === "Europe"
                    ? classes.highlightedButton
                    : classes.regionButton
                  }*/
                >
                  EUROPE
                </button>
                <button
                  className={classes.regionButton}
                  style={{ marginRight: 10 }}
                  /*className={
                    currentRegion === "China"
                    ? classes.highlightedButton
                    : classes.regionButton
                  }*/
                >
                  CHINA
                </button>
              </div>
              <div>
                <table className={classes.regionalTeamsTable}></table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
