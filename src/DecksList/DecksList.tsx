import React, { useCallback, useMemo } from "react";
import RowLink from "../common/RowLink";
import ContentWindow from "../common/ContentWindow";
// import useStyles from "./DecksList.styles";

import type { Deck } from "../data";
import type { DecksListProps } from "./DecksList.types";

/**
 * The list of all decks of a specific archetype
 */
const DecksList = (props: DecksListProps): JSX.Element => {
  const { activeArchetype, data, setModal } = props;
  const { decks } = data;

  // const classes = useStyles();

  const onClick = useCallback(
    (deck: Deck) => () => setModal("deck", deck.slug),
    []
  );
  const decksArray = useMemo(
    () =>
      Object.values(decks).filter((d) => d.archetypeSlug === activeArchetype),
    [activeArchetype]
  );

  return (
    <ContentWindow>
      <h2>{decksArray[0] ? decksArray[0].archetype : "No"} Decks</h2>
      {decksArray.map((deck: Deck, i) => {
        return (
          <RowLink key={i} onClick={onClick(deck)}>
            <h3>{deck.archetype}</h3>
            <span>by {data.players[deck.pilotSlug].name}</span>
            <span>
              in {data.events[deck.event].name} on{" "}
              {new Date(data.events[deck.event].date).toDateString()}
            </span>
          </RowLink>
        );
      })}
    </ContentWindow>
  );
};

export default DecksList;
