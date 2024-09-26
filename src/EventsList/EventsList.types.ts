import type { Events } from "../data";

export interface EventsListProps {
  events: Events;
  setModal: (modalType: string | null, slug: string | null) => void;
}
