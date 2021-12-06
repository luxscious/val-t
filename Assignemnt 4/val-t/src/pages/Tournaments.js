import { mergeClasses } from "@material-ui/styles";
import { useParams } from "react-router";
import { makeStyles } from "@material-ui/core";
import bg from "../assets/bg_tourney.svg"; 
import { useState } from "react";
import "../index.css";
import { AutoComplete } from "material-ui";


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
    flexDirection: "row",
    justifyContent: "space-between",
  },

  h1: 
  {
    fontFamily: "Tungsten Bold", 
    fontSize: 180, 
    color: "white", 
    marginLeft: 1150,
    marginTop: 350
  }, 
  h2: 
  {
    color: "white",
    fontFamily: "Mark Pro", 
    fontSize: 32,
    textAlign: "right",
    margin: 0,
    marginRight: 0,
  }

})); 

export default function Tournaments() {
  const classes = useStyles(); 
  return (<>
  <div className = {classes.page}>  
  <div> 
    <h1 className={classes.h1}>TOURNAMENTS</h1>
      <h2 className={classes.h2} style={{marginTop:-130}}>SELECT REGION TO</h2>
      <h2 className={classes.h2}>PARTICIPATE IN TOURNAMENT </h2>

  </div>


  </div>
  
 
  </>); 
}
