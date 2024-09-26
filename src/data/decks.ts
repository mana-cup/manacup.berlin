import type { DeckId, EventId } from "./index.types";

interface CardInDeck {
  amount: number;
  name: string;
}

export interface Deck {
  archetype: string;
  archetypeSlug: string;
  event: EventId;
  format: string;
  main: CardInDeck[];
  pilotSlug: string;
  side: CardInDeck[];
  slug: string;
}

export interface Decks {
  [index: DeckId]: Deck;
}

export const decks: Decks = {};

// example import, this should be pulled from a DB or api

// export const decks: Decks = {
//   "2023-05-05-Scam-Sadie-Braun": {
//     format: "modern",
//     slug: "2023-05-05-Scam-Sadie-Braun",
//     pilotSlug: "Sadie-Braun",
//     archetype: "Scam",
//     archetypeSlug: "Scam",
//     event: "2023-05-05-FNM-with-Style",
//     main: [
//       {
//         amount: 3,
//         name: "Blackcleave Cliffs"
//       },
//       {
//         amount: 2,
//         name: "Blood Crypt"
//       },
//       {
//         amount: 4,
//         name: "Bloodstained Mire"
//       },
//       {
//         amount: 1,
//         name: "Castle Locthwain"
//       },
//       {
//         amount: 4,
//         name: "Marsh Flats"
//       },
//       {
//         amount: 1,
//         name: "Mountain"
//       },
//       {
//         amount: 3,
//         name: "Swamp"
//       },
//       {
//         amount: 1,
//         name: "Takenuma, Abandoned Mire"
//       },
//       {
//         amount: 2,
//         name: "Bloodtithe Harvester"
//       },
//       {
//         amount: 3,
//         name: "Dauthi Voidwalker"
//       },
//       {
//         amount: 4,
//         name: "Fury"
//       },
//       {
//         amount: 4,
//         name: "Grief"
//       },
//       {
//         amount: 4,
//         name: "Ragavan, Nimble Pilferer"
//       },
//       {
//         amount: 4,
//         name: "Seasoned Pyromancer"
//       },
//       {
//         amount: 3,
//         name: "Blood Moon"
//       },
//       {
//         amount: 2,
//         name: "Fable of the Mirror-Breaker"
//       },
//       {
//         amount: 2,
//         name: "Feign Death"
//       },
//       {
//         amount: 3,
//         name: "Lightning Bolt"
//       },
//       {
//         amount: 1,
//         name: "Sheoldred's Edict"
//       },
//       {
//         amount: 2,
//         name: "Terminate"
//       },
//       {
//         amount: 4,
//         name: "Undying Malice"
//       },
//       {
//         amount: 3,
//         name: "Thoughtseize"
//       }
//     ],
//     side: [
//       {
//         amount: 2,
//         name: "Engineered Explosives"
//       },
//       {
//         amount: 2,
//         name: "Fatal Push"
//       },
//       {
//         amount: 1,
//         name: "Kolaghan's Command"
//       },
//       {
//         amount: 1,
//         name: "Magus of the Moon"
//       },
//       {
//         amount: 2,
//         name: "Necromentia"
//       },
//       {
//         amount: 1,
//         name: "Path of Peril"
//       },
//       {
//         amount: 1,
//         name: "Sheoldred, the Apocalypse"
//       },
//       {
//         amount: 1,
//         name: "The Filigree Sylex"
//       },
//       {
//         amount: 2,
//         name: "Tourach, Dread Cantor"
//       },
//       {
//         amount: 2,
//         name: "Unlicensed Hearse"
//       }
//     ]
//   }
// };
