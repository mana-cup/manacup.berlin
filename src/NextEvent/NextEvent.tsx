import React from "react";
import { FrameSVGCorners } from "@arwes/react-frames";
import { Text } from "@arwes/react-text";
import Link from "../common/Link";
import { venues } from "../data";

import useStyles from "./NextEvent.styles";

import type { NextEventProps } from "./NextEvent.types";

/**
 * The next event happening
 */
const NextEvent = (props: NextEventProps): JSX.Element => {
  const { nextEvents } = props;
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Text as="div">
        <h2 className={classes.header}>
          Next Event{nextEvents.length !== 1 ? "s" : ""}
        </h2>
        <ul>
          {nextEvents.reverse().map((e, i) => {
            const location = venues[e.venueSlug];

            return (
              <li key={i}>
                {new Date(e.date).toDateString()}: {e.name} at{" "}
                <Link href={location.mapsLink}>{location.name}</Link>
              </li>
            );
          })}
        </ul>
        <div className={classes.rsvpFooter}>
          RSVP now by emailing the required deck info to{" "}
          <Link href="mailto:fnm@knoblau.ch">fnm@knoblau.ch</Link>
        </div>
        <div className={classes.rsvpFooter}>
          In case there are more than one, be sure to mention which event you're
          RSVPing to!
        </div>
      </Text>
      <FrameSVGCorners className={classes.frame} />
    </div>
  );
};

export default NextEvent;
