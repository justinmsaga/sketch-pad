class archiveItem {
  constructor(item) {
    //year of creation
    this.creation = item[0];

    //item title
    this.curation = item[1];

    //medium
    this.desc = item[2];

    //item location
    this.source = `https://arweave.net/${item[3]}`;

    //source file type
    this.fType = item[4];
  }
}

// key = year
// value = [curation, craft, source, file type]

const crate = {
  2018: [
    [
      "collected",
      "made this during my uni gradiation ceremony on my phone, from pure feel no headphones or speakers involved",
      "0jTwYB_b9XurW-hqVJOxuhQhKK8mkFFh1MFNDa9yvVw",
      "audio",
    ],
    [
      "chanel remix",
      "my version of chanel by frank ocean",
      "qwEMejlP9FZ5terhB7iAHUUWx4BMQE-QcHOo3i8k6oI",
      "audio",
    ],
    [
      "feel the forest",
      "an audio representation of my train of thought",
      "S2kjRTpqYE27CwsjhBFE3HbqjVVP0kJ5VOuEuIRz8pU",
      "img",
    ],
  ],
  2017: [
    [
      "feed you tom toms",
      "a playground of tom toms",
      "kwFFYuwlSXiLt-XF2_GOLqOUSatYnL9wDQrkVz6FmSI",
      "audio",
    ],
    [
      "room to room",
      "moving between soundscapes",
      "_tjNsloyhJ8qtYjX1x_lkxfN4RkO4NkljGEOGxbJ_RU",
      "audio",
    ],
    [
      "fear",
      "Fear and anger are two sides of the same coin. A coin we flip when faced with uncertainty. I am throwing my coin into the fountain of optimism",
      "_tjNsloyhJ8qtYjX1x_lkxfN4RkO4NkljGEOGxbJ_RU",
      "audio",
    ],
    [
      "free",
      "search for space to play",
      "coG8ZBbEdOEbc-jedjGATNdYdQe2KafqdtsQvoob430",
      "audio",
    ],
  ],
  2016: [
    [
      "found the drums",
      "expermients with drum arrangements",
      "bXsicQdUUGoV-kfU22aC5Dq6qsggx-94JM1e_lr_5r0",
      "audio",
    ],
  ],
  getFromYear(year) {
    //return items from year
    return this[year];
  },
};

function curate() {
  let year = "";
  const box = crate;
  function getCurated(curationYear) {
    year = curationYear;
    return box
      .getFromYear(year)
      .map((c) => [`${year}`, ...c])
      .map((c) => new archiveItem(c));
  }
  return getCurated;
}

const curator = curate();

export default curator;
