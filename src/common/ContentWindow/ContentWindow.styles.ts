import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    wrapperWindow: {
      width: "calc(80% - 200px)",
      marginLeft: "calc(200px + 10%)",
      paddingLeft: 30,

      "& > div > span": {
        width: "100%"
      }
    }
  },
  {
    name: "ContentWindow"
  }
);

export default useStyles;
