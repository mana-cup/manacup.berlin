import type { DeckId, EventId } from "./index.types";

interface EventResult {
  [name: string]: number;
}

interface EventRound {
  results: EventResult[];
  notes?: string;
}

interface FinalRecord {
  slug: string;
  result: `${number}-${number}-${number}`;
}
export interface EventObject {
  finished: boolean;
  format: string;
  slug: string;
  name: string;
  venue: string;
  venueSlug: string;
  date: string;
  players: {
    [name: string]: DeckId;
  };
  final: FinalRecord[];
  rounds: EventRound[];
}

export interface Events {
  [date: EventId]: EventObject;
}
export const events: Events = {};
// example import, this should be pulled from a DB or api

// export const events: Events = {
//   "2023-05-05-FNM-with-Style": {
//     finished: true,
//     format: "modern",
//     slug: "2023-05-05-FNM-with-Style",
//     name: "FNM with Style",
//     venue: "Cafe Style",
//     venueSlug: "Cafe-Style",
//     date: "2023-05-05",
//     players: {
//       "Sadie-Braun": "2023-05-05-Scam-Sadie-Braun",
//       "Kaia-Hamilton": "2023-05-05-4c-Rhinos-Kaia-Hamilton",
//       "Golo-Stillger": "2023-05-05-Gruul-Shamans-Golo-Stillger",
//       "David-Amadu": "2023-05-05-Grixis-Midrange-David-Amadu"
//     },
//     final: [
//       {
//         slug: "Kaia-Hamilton",
//         result: "2-1-0"
//       },
//       {
//         slug: "David-Amadu",
//         result: "2-1-0"
//       },
//       {
//         slug: "Golo-Stillger",
//         result: "2-1-0"
//       },
//       {
//         slug: "Sadie-Braun",
//         result: "0-3-0"
//       }
//     ],
//     rounds: [
//       {
//         results: [
//           {
//             "Sadie-Braun": 0,
//             "Kaia-Hamilton": 2
//           },
//           {
//             "Golo-Stillger": 0,
//             "David-Amadu": 2
//           }
//         ]
//       },
//       {
//         results: [
//           {
//             "Golo-Stillger": 2,
//             "Sadie-Braun": 1
//           },
//           {
//             "Kaia-Hamilton": 2,
//             "David-Amadu": 1
//           }
//         ]
//       },
//       {
//         results: [
//           {
//             "Golo-Stillger": 2,
//             "Kaia-Hamilton": 1
//           },
//           {
//             "David-Amadu": 2,
//             "Sadie-Braun": 1
//           }
//         ]
//       }
//     ]
//   },
// };
