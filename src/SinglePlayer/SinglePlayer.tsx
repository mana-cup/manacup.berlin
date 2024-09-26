import React, { useCallback } from "react";
import RowLink from "../common/RowLink";
import Separator from "../common/Separator";
import ContentWindow from "../common/ContentWindow";

import useStyles from "./SinglePlayer.styles";

import type { SinglePlayerProps } from "./SinglePlayer.types";
import type { DeckId, EventId } from "../data";

/**
 * A single deck
 */
const SinglePlayer = (props: SinglePlayerProps): JSX.Element => {
  const { data, activePlayer, setModal } = props;

  if (activePlayer === null) {
    setModal(null, null);

    return <></>;
  }

  const { decks, events, name } = activePlayer;

  const classes = useStyles();

  const onDeckClick = useCallback(
    (deck: DeckId) => () => setModal("deck", deck),
    []
  );

  const onEventClick = useCallback(
    (eventId: EventId) => () => setModal("event", eventId),
    []
  );

  return (
    <ContentWindow className={classes.contentWindow}>
      <h2>{name}</h2>
      <Separator />
      <h3>Decks</h3>
      <div>
        {decks.map((deck, i) => {
          const { archetype } = data.decks[deck];

          return (
            <RowLink
              className={classes.paddedLine}
              key={i}
              onClick={onDeckClick(deck)}
            >
              {archetype}
            </RowLink>
          );
        })}
      </div>
      <Separator className={classes.seperator} />
      <h3>Events</h3>
      <div>
        {events.map((event, i) => {
          const { date, name: eventName } = data.events[event];

          return (
            <RowLink
              className={classes.paddedLine}
              key={i}
              onClick={onEventClick(event)}
            >
              {date} - {eventName}
            </RowLink>
          );
        })}
      </div>
    </ContentWindow>
  );
};

export default SinglePlayer;
