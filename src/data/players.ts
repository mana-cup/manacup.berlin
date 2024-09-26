import type { DeckId, EventId } from "./index.types";

export interface Player {
  isTeamCFM: boolean;
  name: string;
  slug: string;
  events: EventId[];
  decks: DeckId[];
}

export interface Players {
  [id: string]: Player;
}

export const players: Players = {};
// example import, this should be pulled from a DB or api

// export const players: Players = {
//   "Sadie-Braun": {
//     name: "Sadie Braun",
//     slug: "Sadie-Braun",
//     isTeamCFM: true,
//     events: [
//       "2023-05-05-FNM-with-Style",
//       "2023-07-14-FNM-with-Style",
//       "2023-11-17-FNM-with-Style",
//       "2023-12-15-FNM-with-Style"
//     ],
//     decks: [
//       "2023-05-05-Scam-Sadie-Braun",
//       "2023-07-14-Scam-Sadie-Braun",
//       "2023-11-17-Scam-Sadie-Braun",
//       "2023-12-15-Scam-Sadie-Braun"
//     ]
//   }
// };
