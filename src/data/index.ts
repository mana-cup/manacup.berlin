import type { Deck, Decks } from "./decks";
import type { Player, Players } from "./players";
import type { EventObject, Events } from "./events";
import type { Venue, Venues } from "./venues";

export { decks } from "./decks";
export { players } from "./players";
export { events } from "./events";
export { venues } from "./venues";

export type { DateString, EventId, DeckId } from "./index.types";

export type {
  Deck,
  Decks,
  Player,
  Players,
  EventObject,
  Events,
  Venue,
  Venues
};

export interface Data {
  decks: Decks;
  events: Events;
  players: Players;
  venues: Venues;
}
