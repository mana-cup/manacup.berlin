import type { EventObject, Data } from "../data";

export interface SingleEventProps {
  activeEvent: EventObject | null;
  data: Data;
  setModal: (modalType: string | null, slug: string | null) => void;
}
