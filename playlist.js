class playlist {
  constructor(play) {
    this.title = play[0];
    this.desc = play[1];
    this.total = play[2];
  }
}

const crate = [
  ["cul de sac vibes", "a suburban pirate radio station", 2],
  ["war ready", "the art of war", 2],
  ["vibes", "audio waves to surf", 8],
  ["moon sets and skate parks", "songs to sk8 with", 21],
  ["home bakers music club", "songs to bake with", 33],
  ["study", "notes", 6],
  ["ego death", "death of bushsk8r", 5],
  ["summer", "spicy day vibes", 3],
  ["throwback thursday", "timecapsules", 5],
  ["low end theory", "a study of the bottom end of the frequency spectrum", 3],
  ["let there be light", "birth of bushsk8r", 4],
  ["ms_ga", "a space to just be", 14],
  ["same same, but different", "but still same", 3],
  ["elevate", "temporary vacations", 4],
  ["soundtrack to the week", "the beginning", 16],
];

const playlists = crate.map((c) => new playlist(c));

export default playlists;
