class archiveItem {
  constructor(item) {
    //year of creation
    this.creation = item[0];

    //item title
    this.curation = item[1];

    //medium
    this.craft = item[2];

    //item location
    this.source = `https://arweave.net/${item[3]}`;

    //source file type
    this.fType = item[4];
  }
}

// key = year
// value = [curation, craft, source, file type]

const crate = {
  //[start year, end year]
  range: [2013, 2024],
  2018: [
    [
      "marisol",
      "character design",
      "6PqtBb2Aa-CpWLEGvt6ODIq4zG8PMmdNDjpL-mk6sd0",
      "video",
    ],
    [
      "life = true",
      "animation",
      "RTRXhvNqhvm4jRf_Q6V1wtorg9nYs9c4zW_euxL_kRk",
      "video",
    ],
    [
      "head in the cloud",
      "animation",
      "8_jxOoiyBImgCLmXNBDtsdP_mwO1A0_PNqm8tjIedvM",
      "video",
    ],
    [
      "collected",
      "animation",
      "EV4Ks4PYNbT_03vfYjsJGnClKqDFxSlXcS7nrsfObPI",
      "video",
    ],
    [
      "baked chronicles",
      "playlist / zine",
      "S2kjRTpqYE27CwsjhBFE3HbqjVVP0kJ5VOuEuIRz8pU",
      "img",
    ],
  ],
  2017: [
    [
      "let there be light",
      "mixtape",
      "BOGArivNqK0SjBl-HztcoFfFEXIX3joXM5nNfMLz5Jo",
      "video",
    ],
  ],
  2016: [
    [
      "poly punk",
      "low poly graphics",
      "goE9lQYG-HwQPTi0nF8xZCku_TILhg_nwOvU1iROGvQ",
      "img",
    ],
    [
      "welcome",
      "algorithmic composition",
      "goE9lQYG-HwQPTi0nF8xZCku_TILhg_nwOvU1iROGvQ",
      "video",
    ],
  ],
  2013: [
    [
      "bushsk8r",
      "character design",
      "4GJuqrg_zxEnSISGc-djC40eN3li_OoZFUtv2xlLr9Y",
      "img",
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
