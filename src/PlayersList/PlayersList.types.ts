import type { Players } from "../data";

export interface PlayersListProps {
  players: Players;
  setModal: (modalType: string | null, slug: string | null) => void;
}
