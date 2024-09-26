import React, { useCallback, useMemo } from "react";
import ContentWindow from "../common/ContentWindow";
import RowLink from "../common/RowLink";

import type { PlayersListProps } from "./PlayersList.types";
import type { Player } from "../data";

/**
 * The list of all players
 */
const PlayersList = (props: PlayersListProps): JSX.Element => {
  const { players, setModal } = props;

  const onClick = useCallback(
    (player: Player) => () => setModal("player", player.slug),
    []
  );

  /**
   * pulls out the player objects and sorts them by first name
   */
  const playersArray: Player[] = useMemo(() => {
    return Object.values(players).sort((a: Player, b: Player) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
  }, [players]);

  return (
    <ContentWindow>
      <h2>Players</h2>
      {playersArray.map((player: Player, i) => {
        const playerEventCount = player.events.length;
        const playerDeckCount = player.decks.length;

        return (
          <RowLink key={i} onClick={onClick(player)}>
            <h3>{player.name}</h3>
            <span>
              {playerEventCount} Event
              {playerEventCount !== 1 ? "s" : ""}
            </span>
            <span>
              {playerDeckCount} Deck
              {playerDeckCount !== 1 ? "s" : ""}
            </span>
          </RowLink>
        );
      })}
    </ContentWindow>
  );
};

export default PlayersList;
