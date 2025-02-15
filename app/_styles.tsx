import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "rgb(0,0,0)",
    alignItems: "center",
  },
  image: {
    borderRadius: 12,
    width:"60%",
    height: "60%",
  },
  heading: {
    color: "rgb(6, 147, 198)",
    textAlign: "center",
    fontWeight: 800,
    fontSize: 28,
    padding:10,
  },
  text : {
    color: "rgb(120, 200, 240)",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 18,
    padding:10,
  },
  nav : {
    backgroundColor: "rgb(20, 137, 209)",
    borderRadius: 16,
    padding: 12,
    margin: 12,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: 600,
    minWidth: 100,
  },
  navContainer : {
    backgroundColor: "rgb(0,0,0)",
    alignItems: "center",
    position: "fixed",
    left: 0,
  },
  row : {
    display: "flex",
    flexDirection: "row",
    textAlign: "center",
    alignItems: "center",
    justifyContent:"space-evenly"
  },
  col : {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems:"center",
  },
  // Games
  hand : {
    display: "flex",
    flexDirection: "row",
    maxWidth:"100%",
    maxHeight: "100%",
  },
  card: {
    margin: 8,
    borderRadius: 6,
    height:100,
    width:75,
  },
});

export default css;