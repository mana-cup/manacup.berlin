import type { Data, Deck } from "../data";

export interface ArchetypeListProps {
  data: Data;
  setModal: (modalType: string | null, slug: string | null) => void;
}

export interface DecksByArchetype {
  [archetype: string]: Deck[];
}
