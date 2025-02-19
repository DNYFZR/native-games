import { StyleSheet } from "react-native";

const css = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "rgb(0,0,0)",
  },
  app : {
    flex: 1,
    backgroundColor: "rgb(0,0,0)",
    alignItems: "center",
  },
  navbar : {
    backgroundColor: "rgb(20, 130, 200)",
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    position: "fixed",
    bottom: 0,
    width:"100%",
    justifyContent:"space-evenly"
  },
  navButton : {
    borderBottomColor: "rgb(0,0,0)",
    borderBottomWidth: 2,
    backgroundColor: "rgb(20, 130, 200)",
    padding: 10,
    margin: 2,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: 600,
    minWidth: 100,
  },
  image: {
    borderRadius: 12,
    width:"60%",
    height: "60%",
  },
  heading: {
    color: "rgb(6, 140, 200)",
    textAlign: "center",
    fontWeight: 800,
    fontSize: 24,
    padding:2,
  },
  text : {
    color: "rgb(120, 200, 240)",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 16,
    padding:4,
  },
  button : {
    backgroundColor: "rgb(20, 130, 200)",
    // borderBottomWidth: 2,
    borderRadius: 16,
    padding: 10,
    margin: 2,
    textAlign: "center",
    justifyContent: "center",
    fontWeight: 600,
    minWidth: 100,
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
  card: {
    margin: 8,
    borderRadius: 6,
    height:120,
    width:85,
  },
});


export default css;