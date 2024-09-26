import React from "react";
import ContentWindow from "../common/ContentWindow";
import Separator from "../common/Separator";
import useStyles from "./Home.styles";

/**
 * Homepage info box
 */
const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <ContentWindow className={classes.contentWindow}>
        <h2>Mana Cup Season 1</h2>
        <Separator className={classes.seperator} />
        <div>No events yet</div>
      </ContentWindow>
    </>
  );
};

export default Home;
