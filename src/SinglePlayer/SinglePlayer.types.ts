import type { Player, Data } from "../data";

export interface SinglePlayerProps {
  activePlayer: Player | null;
  data: Data;
  setModal: (modalType: string | null, slug: string | null) => void;
}
