import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    header: {
      marginTop: 0
    },
    frame: {
      '& path[data-name="bg"]': {
        color: "rgb(6 26 45 / 50%)"
      },
      '& path[data-name="line"]': {
        transition: "color 1s",
        color: "rgb(36 210 235)",
        filter: "drop-shadow(0 0 4px rgb(36 210 235))"
      }
    },
    wrapper: {
      margin: 50,
      padding: 20,
      position: "relative",
      marginTop: 30,

      // applies width to the text field
      "& > span > span, & > span": {
        width: "100%"
      },

      width: "calc(80% - 200px)",
      marginLeft: "calc(200px + 10%)",
      paddingLeft: 30,

      "& > div > span": {
        width: "100%"
      },

      "&:hover $frame path[data-name=line]": {
        color: "rgb(235 36 235)",
        filter: "drop-shadow(0 0 4px rgb(235 36 235))"
      }
    },
    rsvpFooter: {
      marginTop: 16
    }
  },
  {
    name: "NextEvent"
  }
);

export default useStyles;
