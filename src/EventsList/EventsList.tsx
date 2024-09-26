import React, { useCallback } from "react";
import ContentWindow from "../common/ContentWindow";
import RowLink from "../common/RowLink";

import type { EventObject } from "../data";
import type { EventsListProps } from "./EventsList.types";

/**
 * The list of all events
 */
const EventsList = (props: EventsListProps): JSX.Element => {
  const { events, setModal } = props;

  // const classes = useStyles();
  const onClick = useCallback(
    (event: EventObject) => () => setModal("event", event.slug),
    []
  );

  return (
    <ContentWindow>
      <h2>Past Events</h2>
      {Object.values(events)
        .filter((e) => e.finished)
        .reverse()
        .map((event: EventObject, i) => (
          <RowLink key={i} onClick={onClick(event)}>
            <h3>{event.name}</h3>
            <span>{new Date(event.date).toDateString()}</span>
            <span>at {event.venue}</span>
            <span>{Object.keys(event.players).length} players</span>
          </RowLink>
        ))}
    </ContentWindow>
  );
};

export default EventsList;
