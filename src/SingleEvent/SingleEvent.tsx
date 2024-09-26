import React, { useCallback } from "react";
import RowLink from "../common/RowLink";
import Link from "../common/Link";
import Separator from "../common/Separator";
import ContentWindow from "../common/ContentWindow";
import { venues } from "../data";

import useStyles from "./SingleEvent.styles";

import type { SingleEventProps } from "./SingleEvent.types";
import type { DeckId } from "../data";

/**
 * A single deck
 */
const SingleEvent = (props: SingleEventProps): JSX.Element => {
  const { data, activeEvent, setModal } = props;

  if (activeEvent === null) {
    setModal(null, null);

    return <></>;
  }

  const { final, name, players, rounds, date } = activeEvent;
  const location = venues[activeEvent.venueSlug];

  const classes = useStyles();

  const onPlayerClick = useCallback(
    (player: string) => () => setModal("player", player),
    []
  );

  const onDeckClick = useCallback(
    (deck: DeckId) => () => setModal("deck", deck),
    []
  );

  const roundCount = rounds.length;

  return (
    <>
      <ContentWindow className={classes.contentWindow}>
        <div className={classes.inlineAllChildren}>
          <h1>{name}</h1> at{" "}
          <h3>
            <Link href={location.mapsLink} target="_blank">
              {location.name}
            </Link>
          </h3>
          <h3>{new Date(date).toDateString()}</h3>
        </div>
      </ContentWindow>
      <ContentWindow className={classes.contentWindow}>
        <h3>Players & Decks</h3>
        <div>
          {Object.keys(players).map((playerSlug, i) => {
            const { name: playerName } = data.players[playerSlug];
            const deckSlug = players[playerSlug];
            const { archetype: deckName } = data.decks[deckSlug];

            return (
              <span key={`${i}-player`}>
                <RowLink
                  className={classes.inlinePaddedLine}
                  onClick={onPlayerClick(playerSlug)}
                >
                  {playerName}
                </RowLink>
                <RowLink
                  className={classes.inlinePaddedLine}
                  onClick={onDeckClick(deckSlug)}
                >
                  playing {deckName}
                </RowLink>
              </span>
            );
          })}
        </div>
      </ContentWindow>
      <ContentWindow className={classes.contentWindow}>
        <h3>Final Results</h3>
        <div>
          {final.map((finalRecord, f) => (
            <div key={f}>
              <span>{f + 1}. </span>
              <RowLink
                className={classes.inlinePaddedLine}
                onClick={onPlayerClick(finalRecord.slug)}
              >
                {data.players[finalRecord.slug].name}
              </RowLink>
              <span>{finalRecord.result}</span>
            </div>
          ))}
        </div>
      </ContentWindow>
      <ContentWindow className={classes.contentWindow}>
        <h3>
          Results ({roundCount} round{roundCount !== 1 ? "s" : ""})
        </h3>
        <div>
          {rounds.map((round, i) => (
            <div className={classes.roundResultWrapper} key={i}>
              {i !== 0 && <Separator className={classes.seperator} />}
              <div>Round {i + 1}</div>
              <div className={classes.roundResult}>
                {round.results.map((result, j) => (
                  <div key={j} className={classes.match}>
                    {Object.keys(result).map((playerSlug, k) => {
                      const { name: playerName } = data.players[playerSlug];

                      return (
                        <div key={k}>
                          <span className={classes.roundResultPlayerName}>
                            {playerName}
                          </span>{" "}
                          - {result[playerSlug]}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ContentWindow>
    </>
  );
};

export default SingleEvent;
