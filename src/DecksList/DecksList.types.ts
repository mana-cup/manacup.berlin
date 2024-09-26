import type { Data } from "../data";

export interface DecksListProps {
  activeArchetype: string | null;
  data: Data;
  setModal: (modalType: string | null, slug: string | null) => void;
}
