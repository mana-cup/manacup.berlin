import type { Deck, Data } from "../data";

export interface SingleDeckProps {
  activeDeck: Deck | null;
  data: Data;
  setModal: (modalType: string | null, slug: string | null) => void;
}
