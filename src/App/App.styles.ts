import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        fontFamily: "monospace",
        width: "100vw",
        margin: 0
      }
    },
    backgroundWrapper: {
      position: "fixed",
      top: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#343030",
      backgroundImage:
        "radial-gradient(85% 85% at 50% 50%, hsla(185, 100%, 25%, 0.25) 0%, hsla(185, 100%, 25%, 0.12) 50%, hsla(185, 100%, 25%, 0) 100%)"
    },
    homeLink: {
      padding: "16px 8px"
    },
    titleWindow: {
      width: 150,
      height: 40,
      marginBottom: 50,
      paddingBottom: 40
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
