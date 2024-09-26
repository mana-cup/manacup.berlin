import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    separator: {
      height: 1,
      margin: "35px 5%",
      width: "90%",
      borderBottom: "1px solid rgb(36 210 235)"
    }
  },
  {
    name: "Seperator"
  }
);

export default useStyles;
