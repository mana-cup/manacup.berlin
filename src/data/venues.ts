export interface Venue {
  name: string;
  slug: string;
  url: string | null;
  mapsLink: string;
}

export interface Venues {
  [id: string]: Venue;
}

export const venues: Venues = {};
// example import, this should be pulled from a DB or api

// export const venues: Venues = {
//   "Cafe-Style": {
//     name: "Cafe Style",
//     slug: "Cafe-Style",
//     url: null,
//     mapsLink:
//       "https://www.google.com/maps/place/Caf%C3%A9+Style/@52.51154,13.4339461,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84e472bbaf5eb:0xc6b4c84c014f8a21!8m2!3d52.51154!4d13.436521!16s%2Fg%2F11bc70_z50?entry=ttu"
//   }
// };
