import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    paddedLine: {
      padding: 2
    },
    contentWindow: {},
    seperator: {
      transition: "border-bottom 1s",

      "$contentWindow:hover &": {
        borderBottom: "1px solid rgb(36 210 235)"
      }
    }
  },
  {
    name: "SinglePlayer"
  }
);

export default useStyles;
