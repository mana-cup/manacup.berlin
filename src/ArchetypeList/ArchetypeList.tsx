import React, { useCallback, useMemo } from "react";
import RowLink from "../common/RowLink";
import ContentWindow from "../common/ContentWindow";
// import useStyles from "./ArchetypeList.styles";

import type { Deck } from "../data";
import type {
  ArchetypeListProps,
  DecksByArchetype
} from "./ArchetypeList.types";

/**
 * The list of all decks
 */
const ArchetypeList = (props: ArchetypeListProps): JSX.Element => {
  const { data, setModal } = props;
  const { decks } = data;

  // const classes = useStyles();

  const onClick = useCallback(
    (archetypeSlug: string) => () => setModal("deckslist", archetypeSlug),
    []
  );

  const decksByArchetype = useMemo(() => {
    const decksObject: DecksByArchetype = {};

    Object.values(decks).forEach((d: Deck) => {
      if (decksObject[d.archetypeSlug]) {
        decksObject[d.archetypeSlug].push(d);
      } else {
        decksObject[d.archetypeSlug] = [d];
      }
    });

    return decksObject;
  }, [decks]);

  const deckArchetypeKeys = useMemo(
    () =>
      Object.keys(decksByArchetype).sort((a: string, b: string) => {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }),
    [decksByArchetype]
  );

  return (
    <ContentWindow>
      <h2>Deck Archtypes</h2>
      {deckArchetypeKeys.map((archetypeSlug, i) => (
        <RowLink key={i} onClick={onClick(archetypeSlug)}>
          <h3>{decksByArchetype[archetypeSlug][0].archetype}</h3>
          <span>
            {decksByArchetype[archetypeSlug].length} deck
            {decksByArchetype[archetypeSlug].length === 1 ? "" : "s"}
          </span>
        </RowLink>
      ))}
    </ContentWindow>
  );
};

export default ArchetypeList;
