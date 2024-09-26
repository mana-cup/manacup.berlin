import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    card: {
      padding: 2
    },
    noTopMargin: {
      marginTop: 0
    }
  },
  {
    name: "SingleDeck"
  }
);

export default useStyles;
