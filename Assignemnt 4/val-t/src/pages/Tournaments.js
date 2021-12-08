import { makeStyles } from "@material-ui/core";
import bg from "../assets/bg_tourney.svg";
import { useState, useEffect } from "react";
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
    zIndex: -1,
  },

  h1: {
    fontFamily: "Tungsten Bold",
    fontSize: 180,
    color: "white",
    padding: 0,
    margin: 0,
  },
  h2: {
    color: "white",
    fontFamily: "Mark Pro",
    fontSize: 32,
    textAlign: "right",
    margin: 0,
    marginRight: 0,
  },
  tournamentText: {
    position: "absolute",
    left: 760,
    top: 199,
    zIndex: 30,
  },
  tournamentTable: {
    width: 700,
    height: 560,
    marginLeft: 90,
    marginTop: 110,
    overflow: "auto",
    borderRadius: 5,
  },
  options: {
    backgroundColor: "rgba(196,196,196,.6)",
    borderRadius: 5,
    border: 0,
    width: 700,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  button: {
    fontSize: 18,
    fontFamily: "Mark Pro",
    backgroundColor: "rgba(0,0,0,0)",
    border: 0,
    color: "white",
    cursor: "pointer",
    padding: 15,
  },
  highlightedButton: {
    fontSize: 18,
    fontFamily: "Mark Pro",
    backgroundColor: "rgba(0,0,0,0)",
    border: 0,
    color: "#FF4655",
    cursor: "pointer",
    padding: 15,
  },
  table: {
    backgroundColor: "rgba(220,220,220,.9)",
    width: "100%",
    height: "100%",
    borderCollapse: "collapse",
    borderRadius: 5,
    border: 0,
  },
  tableRow: {
    margin: 0,
    // backgroundColor: "red",
    border: 0,
  },
  idTd: {
    fontFamily: "Tungsten Bold",
    fontSize: 25,
    color: "#111111",
    backgroundColor: "#C4C4C4",
    display: "flex",
    padding: 20,
    justifyContent: "center",
    alignContent: "center",
    borderRight: "1px solid #969696",
  },
  dateTd: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Cairo",
  },
  leagueTd: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Cairo",
  },
  moneyTd: {
    textAlign: "center",
    padding: 20,
    fontFamily: "Cairo",
  },
  tableHeader: {
    textAlign: "center",
    padding: 20,
    fontSize: 25,
    borderBottom: "1px solid #969696",
    fontFamily: "Tungsten Bold",
    color: "#464646",
  },
}));
function RenderTable(list) {
  const classes = useStyles();
  return list.map((x) => {
    const startDate = x.startDate.split("T");
    const endDate = x.endDate.split("T");
    return (
      <tr className={classes.tableRow}>
        <td className={classes.idTd}>{x.tournamentId}</td>
        <td className={classes.dateTd}>{startDate[0]}</td>
        <td className={classes.dateTd}>{endDate[0]}</td>
        <td className={classes.leagueTd}>{x.league}</td>
        <td className={classes.moneyTd}>{x.buyIn}</td>
        <td className={classes.moneyTd}>{x.payOut}</td>
        {/* need to add button to join/sub/sponsor */}
      </tr>
    );
  });
}

export default function Tournaments() {
  const classes = useStyles();

  const [currentRegion, setCurrentRegion] = useState("Europe");
  const [euTournaments, setEuTournaments] = useState([]);
  const [naTournaments, setNaTournaments] = useState([]);
  const [saTournaments, setSaTournaments] = useState([]);
  const [oceTournaments, setOceTournaments] = useState([]);
  const [seTournaments, setSeTournaments] = useState([]);
  const [korTournaments, setKorTournaments] = useState([]);
  const [chTournaments, setChTournaments] = useState([]);
  const [currentList, setCurrentList] = useState([]);
  async function getTournaments(region) {
    const currRegion = region;
    return fetch("http://localhost:5000/getTournaments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ region: region }),
    })
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        if (currRegion === "Europe") {
          setEuTournaments(data);
        } else if (currRegion === "North America") {
          setNaTournaments(data);
        } else if (currRegion === "South America") {
          setSaTournaments(data);
        } else if (currRegion === "Oceania") {
          setOceTournaments(data);
        } else if (currRegion === "South East Asia") {
          setSeTournaments(data);
        } else if (currRegion === "Korea") {
          setKorTournaments(data);
        } else {
          setChTournaments(data);
        }
      });
  }
  useEffect(() => {
    //setTournamenets
    getTournaments("Europe");
    getTournaments("North America");
    getTournaments("South America");
    getTournaments("South East Asia");
    getTournaments("Oceania");
    getTournaments("Korea");
    getTournaments("China");
  }, []);
  useEffect(() => {
    //set current list
    if (currentRegion === "Europe") {
      setCurrentList(euTournaments);
    } else if (currentRegion === "Na") {
      setCurrentList(naTournaments);
    } else if (currentRegion === "Sa") {
      setCurrentList(saTournaments);
    } else if (currentRegion === "Oceania") {
      setCurrentList(oceTournaments);
    } else if (currentRegion === "Se Asia") {
      setCurrentList(seTournaments);
    } else if (currentRegion === "Korea") {
      setCurrentList(korTournaments);
    } else {
      setCurrentList(chTournaments);
    }
  }, [
    chTournaments,
    currentRegion,
    euTournaments,
    korTournaments,
    naTournaments,
    oceTournaments,
    saTournaments,
    seTournaments,
  ]);

  return (
    <>
      <Navbar />
      <div className={classes.page}>
        <div className={classes.tournamentText}>
          <h1 className={classes.h1}>TOURNAMENTS</h1>
          <h2 className={classes.h2} style={{}}>
            SELECT REGION TO
          </h2>
          <h2 className={classes.h2}>PARTICIPATE IN TOURNAMENT </h2>
        </div>
        <div className={classes.tournamentTable}>
          <div className={classes.options}>
            <button
              className={
                currentRegion === "Europe"
                  ? classes.highlightedButton
                  : classes.button
              }
              onClick={() => {
                setCurrentRegion("Europe");
              }}
            >
              EUROPE
            </button>
            <button
              className={
                currentRegion === "Na"
                  ? classes.highlightedButton
                  : classes.button
              }
              onClick={() => {
                setCurrentRegion("Na");
              }}
            >
              NA
            </button>
            <button
              className={
                currentRegion === "Sa"
                  ? classes.highlightedButton
                  : classes.button
              }
              onClick={() => {
                setCurrentRegion("Sa");
              }}
            >
              SA
            </button>
            <button
              className={
                currentRegion === "Oceania"
                  ? classes.highlightedButton
                  : classes.button
              }
              onClick={() => {
                setCurrentRegion("Oceania");
              }}
            >
              OCEANIA
            </button>
            <button
              className={
                currentRegion === "Se Asia"
                  ? classes.highlightedButton
                  : classes.button
              }
              onClick={() => {
                setCurrentRegion("Se Asia");
              }}
            >
              SE ASIA
            </button>
            <button
              className={
                currentRegion === "Korea"
                  ? classes.highlightedButton
                  : classes.button
              }
              onClick={() => {
                setCurrentRegion("Korea");
              }}
            >
              KOREA
            </button>
            <button
              className={
                currentRegion === "China"
                  ? classes.highlightedButton
                  : classes.button
              }
              onClick={() => {
                setCurrentRegion("China");
              }}
            >
              CHINA
            </button>
          </div>
          <table className={classes.table}>
            <th
              className={classes.tableHeader}
              style={{
                backgroundColor: "#C4C4C4",
                borderRight: "1px solid #969696",
                borderTopLeftRadius: 5,
              }}
            >
              ID
            </th>
            <th className={classes.tableHeader}>START DATE</th>
            <th className={classes.tableHeader}>END DATE</th>
            <th className={classes.tableHeader}>LEAGUE</th>
            <th className={classes.tableHeader}>BUY IN</th>
            <th className={classes.tableHeader}>PAY OUT</th>
            <th className={classes.tableHeader}>JOIN</th>

            {RenderTable(currentList)}
          </table>
        </div>
      </div>
    </>
  );
}
