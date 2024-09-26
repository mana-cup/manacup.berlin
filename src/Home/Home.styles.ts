import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    contentWindow: {},
    seperator: {
      transition: "border-bottom 1s",

      "$contentWindow:hover &": {
        borderBottom: "1px solid rgb(235 36 235)"
      }
    }
  },
  {
    name: "Rules"
  }
);

export default useStyles;
