class projectItem {
  constructor(proj) {
    //title
    this.name = proj[0];

    //creation range
    this.range = proj[1];

    //desctiption
    this.desc = proj[2];

    //tracks
    this.tracks = proj[3].map((t) => new track(t));
  }
}

class track {
  constructor(item) {
    //year of creation
    this.creation = item[0];

    //item title
    this.curation = item[1];

    //item location
    this.source = `https://arweave.net/${item[2]}`;

    //source file type
    this.fType = item[3];

    //description
    this.desc = item[4];
  }
}

// value = [creation date, title, source, file type, description]

const crate = {
  "soundcloud era": {
    range: "august 2016 - march 2020",
    description: "when soundcloud was a thing (it might stil be)",
    tracks: [
      ["290816", "found the drums", "", "audio", ""],
      ["150617", "room to room", "", "audio", ""],
      ["160617", "foundation", "", "audio", ""],
      ["200617", "space", "", "audio", ""],
      ["210617", "party", "", "audio", ""],
      ["230917", "bit", "", "audio", ""],
      ["201017", "fear", "", "audio", ""],
      ["120418", "life = true", "", "audio", ""],
      ["120418", "bread", "", "audio", ""],
      ["120718", "", "", "audio", ""],
      ["130718", "", "", "audio", ""],
      ["140718", "", "", "audio", ""],
      ["160718", "", "", "audio", ""],
      ["170718", "", "", "audio", ""],
      ["180718", "", "", "audio", ""],
      ["190718", "", "", "audio", ""],
      ["200718", "", "", "audio", ""],
      ["210718", "", "", "audio", ""],
      ["220718", "", "", "audio", ""],
      ["240718", "", "", "audio", ""],
      ["250718", "", "", "audio", ""],
      ["260718", "", "", "audio", ""],
      ["270718", "", "", "audio", ""],
      ["280718", "", "", "audio", ""],
      ["290718", "", "", "audio", ""],
      ["300718", "", "", "audio", ""],
      ["310718", "", "", "audio", ""],
      ["010818", "", "", "audio", ""],
      ["030818", "", "", "audio", ""],
      ["050818", "", "", "audio", ""],
      ["060818", "", "", "audio", ""],
      ["070818", "", "", "audio", ""],
      ["080818", "", "", "audio", ""],
      ["090818", "", "", "audio", ""],
      ["130818", "", "", "audio", ""],
      ["140818", "", "", "audio", ""],
      ["150818", "", "", "audio", ""],
      ["160818", "", "", "audio", ""],
      ["170818", "", "", "audio", ""],
      ["180818", "murder on the dancefloor", "", "audio", ""],
      ["190818", "", "", "audio", ""],
      ["200818", "", "", "audio", ""],
      ["250818", "", "", "audio", ""],
      ["251118", "audio log 0", "", "audio", ""],
      ["091218", "audio log 1", "", "audio", ""],
      ["191218", "", "", "audio", ""],
      ["241218", "", "", "audio", ""],
      ["251218", "", "", "audio", ""],
      ["261218", "", "", "audio", ""],
      ["271218", "collected", "", "audio", ""],
      ["281218", "head in cloud", "", "audio", ""],
      ["291218", "chanel remix", "", "audio", ""],
      ["301218", "", "", "audio", ""],
      ["311218", "", "", "audio", ""],
      ["010119", "", "", "audio", ""],
      ["020119", "", "", "audio", ""],
      ["030119", "", "", "audio", ""],
      ["040119", "", "", "audio", ""],
      ["050119", "", "", "audio", ""],
      ["060119", "", "", "audio", ""],
      ["070119", "", "", "audio", ""],
      ["080119", "", "", "audio", ""],
      ["100119", "", "", "audio", ""],
      ["110119", "", "", "audio", ""],
      ["120119", "", "", "audio", ""],
      ["140119", "", "", "audio", ""],
      ["160119", "", "", "audio", ""],
      ["170119", "", "", "audio", ""],
      ["180119", "pushing through", "", "audio", ""],
      ["190119", "", "", "audio", ""],
      ["200119", "", "", "audio", ""],
      ["210119", "", "", "audio", ""],
      ["220119", "", "", "audio", ""],
      ["230119", "", "", "audio", ""],
      ["240119", "", "", "audio", ""],
      ["250119", "", "", "audio", ""],
      ["260119", "", "", "audio", ""],
      ["270119", "", "", "audio", ""],
      ["300119", "", "", "audio", ""],
      ["310119", "", "", "audio", ""],
      ["020219", "call", "", "audio", ""],
      ["020219", "response", "", "audio", ""],
      ["030219", "call", "", "audio", ""],
      ["030219", "response", "", "audio", ""],
      ["040219", "call", "", "audio", ""],
      ["040219", "response", "", "audio", ""],
      ["050219", "call", "", "audio", ""],
      ["050219", "response", "", "audio", ""],
      ["060219", "call", "", "audio", ""],
      ["060219", "response", "", "audio", ""],
      ["070219", "call", "", "audio", ""],
      ["070219", "response", "", "audio", ""],
      ["080219", "call", "", "audio", ""],
      ["090219", "", "", "audio", ""],
      ["100219", "", "", "audio", ""],
      ["110219", "call", "", "audio", ""],
      ["120219", "call and response", "", "audio", ""],
      ["130219", "", "", "audio", ""],
      ["140219", "fur elise", "", "audio", ""],
      ["150219", "call", "", "audio", ""],
      ["160219", "", "", "audio", ""],
      ["170219", "", "", "audio", ""],
      ["180219", "", "", "audio", ""],
      ["190219", "", "", "audio", ""],
      ["200219", "issa bird", "", "audio", ""],
      ["210219", "call", "", "audio", ""],
      ["210219", "response", "", "audio", ""],
      ["220219", "", "", "audio", ""],
      ["230219", "", "", "audio", ""],
      ["240219", "", "", "audio", ""],
      ["250219", "call", "", "audio", ""],
      ["250219", "response", "", "audio", ""],
      ["260219", "", "", "audio", ""],
      ["270219", "call", "", "audio", ""],
      ["280219", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0319", "", "", "audio", ""],
      ["0419", "", "", "audio", ""],
      ["", "", "", "audio", ""],
    ],
  },
  "let there be light": {
    range: "october 2017 - january 2018",
    description: "curation as craft prototype 0",
    tracks: [
      [
        "061017",
        "youth",
        "NZ-uvmLlsVwLgLvNr4Tn3zniMTr66z1p27PL0KDuHQc",
        "audio",
        "",
      ],
      [
        "171017",
        "daydream",
        "gdC9NOIdueTnstI46nhuL5FrsR-qvCwAULuJ5Dv3Fyo",
        "audio",
        "",
      ],
      [
        "311017",
        "fear",
        "Ck5EJrlzpsImNvDJaKYcY7ZPGKH3ZDd9cSEqAnjXaag",
        "audio",
        "",
      ],
      [
        "071117",
        "growth",
        "wbsXR5YcLqvRvBp-JXnk72UEFTwd5CRRmpbv9agj7GY",
        "audio",
        "",
      ],
      [
        "??0117",
        "free",
        "coG8ZBbEdOEbc-jedjGATNdYdQe2KafqdtsQvoob430",
        "audio",
        "bonus track",
      ],
    ],
  },
  "mind palace": {
    range: "april 2019",
    description: "soundscape architechture - creating space with sound",
    tracks: [
      [
        "080419",
        "intro",
        "pVKVszbJHFsW1UJ1OZsWoSw-C12RqHA9eajEfmsun_Y",
        "audio",
        "",
      ],
      [
        "080419",
        "entrance",
        "JgUBcowICrIcByWDM1Vxqvei1hKmJG_qKxMHAnASfpY",
        "audio",
        "",
      ],
      [
        "080419",
        "house",
        "lMCkwsG65UfxXmDYcIxB7uAkmUVi6GUDdjsm0VkmFjk",
        "audio",
        "",
      ],
      [
        "080419",
        "pool",
        "jY0BeQLJa1q8eaB3nZdylNCF-p2yPTdXhnlEnbuuOL4",
        "audio",
        "",
      ],
      [
        "080419",
        "skate park",
        "ZO3QwyeviM2jL_zBuWMCuk6p8dSTG2tjMUE5PF99cNQ",
        "audio",
        "",
      ],
      [
        "080419",
        "half pipe with bowl at the end",
        "x7sCZNFFfclKgNr4ow6IJcfIkxbALiVEUbLPchycaqY",
        "audio",
        "",
      ],
      [
        "080419",
        "studio",
        "3QPgKLgIU6zoYe_8hhnhZJmHROIcw1zzqFZ7x_ZgxgE",
        "audio",
        "",
      ],
      [
        "080419",
        "meditation",
        "ein4Cqwl75rONXarmtJWzqcg5Y_6rFZHHb0wTrNGyog",
        "audio",
        "",
      ],
    ],
  },
  "feel the forest": {
    range: "may 2019 - august 2019",
    description: "synth explorations",
    tracks: [
      [
        "240519",
        "testing",
        "k8N8tYhjqi1FGdtL9FjdLuUu6uB9F_bHkh1dpBAMkxs",
        "audio",
        "starting point",
      ],
      [
        "250519",
        "response",
        "gBU46VSqeMtwMvbryKRg2n8-GSnDUjsEPnHVWqSMaJ8",
        "audio",
        "",
      ],
      [
        "260519",
        "signs",
        "RCQKSXI7A7jXEwImMiyfDfHKb_NzKjNEw7VOPJuDP34",
        "audio",
        "",
      ],
      [
        "270519",
        "below",
        "xXYUdX_e_kWNsmAK_Ct4gCpQt_-TDjPhOrQLbi-X3Io",
        "audio",
        "",
      ],
      [
        "280519",
        "live wires",
        "1WdbBmxv7t20waOgw9Tp_kcYUvJHx77CxPXhnvBdI6g",
        "audio",
        "",
      ],
      [
        "290519",
        "shortbread",
        "50YlvGxm1RTF1URQHpK9pXulUPIk7DSO_AWx4GuJVUg",
        "audio",
        "",
      ],
      [
        "300519",
        "untitled 1",
        "zytc7DGydkHiNQ-aBnpa1YZKmvYqNAlBw9xbzIQsNKw",
        "audio",
        "",
      ],
      [
        "010619",
        "untitled 2",
        "S3PuVvbKvhM2nrq_y-wANZIw_EXPBy2e-2B_tPDmwr4",
        "audio",
        "",
      ],
      [
        "020619",
        "homework",
        "beqs16Ddot6aJv-PJcRIhZ4OpGV0Ru0bm9mGjohG5xg",
        "audio",
      ],
      [
        "030619",
        "untitled 3",
        "YKw_bSFXxqGxFB95N2R9r4z8OYciYcM9uFYgS8vMe4g",
        "audio",
        "",
      ],
      [
        "060619",
        "untitled 4",
        "8L0zzMMmZ3V1_2TqgN1fXWVX2rBZkpQPdjGcyDKeqqE",
        "audio",
        "",
      ],
      [
        "100619",
        "wet bass",
        "l8JY32Rlj_c1GL-hGPf5rqSszZMrQ9C_lSYrSNc6eRw",
        "audio",
        "",
      ],
      [
        "110619",
        "untitled 5",
        "1-u1nil_HFV8v6lJDDD46KFQI7qWnxXOZ1o6JcrAwvk",
        "audio",
        "",
      ],
      [
        "140619",
        "interlude",
        "FMA-dWAaW-in3rcAT1WZbHyOAbcXT0LdJMR-O7HWw9g",
        "audio",
        "",
      ],
      [
        "180619",
        "a bit dark",
        "JKcjbFRPsmCl46lsdPpz0wb25rdkyUBhv_n5tscTiS8",
        "audio",
        "",
      ],
      [
        "200619",
        "untitled 6",
        "OrctClJto1huGmxafHwW97OIARGQQXvzq3bG06o7O_Y",
        "audio",
        "",
      ],
      [
        "230619",
        "choo choo",
        "KKLNK1xvS9Uj-sqECZz2EqcC8V_ttm74KKlb1xksvpc",
        "audio",
        "",
      ],
      [
        "260619",
        "untitled 7",
        "f1_34JCl6bNGKoC5-DY_y6VYlpGpCI_SkFFeSXlBuGk",
        "audio",
        "",
      ],
      [
        "280619",
        "untitled 8",
        "f_SVOHB8MxRVHJYGuI_aK-8EmPe30CyLIh7G7eHfiGo",
        "audio",
        "",
      ],
      [
        "290619",
        "untitled 9",
        "1OZtX8YmrnPTPhUaPtHprAkNm_Ky93QI6brf3m2x4FY",
        "audio",
        "",
      ],
      [
        "020719",
        "1 step forward, 2 steps back",
        "LRDLtdXwopfJ9sH7PwZ9jtwouorTKVdxECukeH49NuM",
        "audio",
        "regression",
      ],
      [
        "030819",
        "untitled 10",
        "BZTVIJRyVNluXJPPuCUu0qt-1TOB_rDFvMPzR6wMmwg",
        "audio",
        "",
      ],
      [
        "050819",
        "the forest after dark",
        "-39nDgmrHglb6enrjf-AEv5hBRipyQE4MjTyGjVN1QA",
        "audio",
        "",
      ],
      [
        "150819",
        "the marathon continues",
        "K5BV5hS-AVfDTNVxdfseEX-UihJVGX7_TqJQmnE5trQ",
        "audio",
        "",
      ],
      [
        "280819",
        "untitled 11",
        "L-ooQsgu7-FEF_a26VCLPyOTmv-5QTb-BvALmy94kGg",
        "audio",
        "",
      ],
    ],
  },
  "echo chamber 1.0": {
    range: "january 2022 -  july 2022",
    description: "flying flute - woodwind explorations",
    tracks: [
      [
        "",
        "flying flute 0",
        "sGODBvlAnamWIdy-Op_hW14fKBTPWlZSZk4c3uibGos",
        "audio",
        "vol 1",
      ],
      [
        "110122",
        "flying flute 1",
        "zPh_E6tv72MWOYhmPKHitWzTQ1oglNNqrPAoWo9YR98",
        "audio",
        "vol 1",
      ],
      [
        "120122",
        "flying flute 2",
        "wiaAF-WKOcFoRIkFGAroDHOh30yFiaNQR8Ww95D3Tgg",
        "audio",
        "vol 1",
      ],
      [
        "170122",
        "flying flute 3",
        "UkG1ehwEsfKFdyPqCWTO9BqyP5ezSKog_bdY1va8NGo",
        "audio",
        "vol 1",
      ],
      [
        "210122",
        "flying flute 4",
        "RxFRhA_X10gfBbQYE2U18ZJEPCqkIXDvChMnhIdDcao",
        "audio",
        "vol 1",
      ],
      [
        "270122",
        "flying flute 5",
        "cyL9PXWc4JgLKRfHgHTduBAJdRv0yB4465omez1bb9M",
        "audio",
        "vol 1",
      ],
      [
        "010222",
        "flying flute 6",
        "lnGd-P8-VBC2J090JPeP-94t5JMTeGa-QZen_CzUd4k",
        "audio",
        "vol 1",
      ],
      [
        "110222",
        "flying flute 7",
        "tLbsk2FoX8SXCRxWNyOmrz_007J4zsaI_fYaSLCpIlE",
        "audio",
        "vol 1",
      ],
      [
        "160222",
        "flying flute 8",
        "EzDeMFbJe2QsRSoY0kLpW2qEsDdbLlZ7Q_hJ1r-rbwA",
        "audio",
        "vol 1",
      ],
      [
        "230222",
        "flying flute 9",
        "YCPPlo-cvaEahS62NwJd_qCcbimvGKTDe___l5eEDmg",
        "audio",
        "vol 1",
      ],
      [
        "040322",
        "flying flute 10",
        "Zfap3yM_RE67ocuFfnK0L5eZnBGG4F7h4gjeN5TmIog",
        "audio",
        "vol 1",
      ],
      [
        "190522",
        "flying flute 11",
        "0pBgFbAFQvs8MZ3IkdTdSbAwTP7g9faUJw9iQnirwA8",
        "audio",
        "vol 1",
      ],
      [
        "090622",
        "flying flute 12",
        "X6XDfLQ1oPgyAnRFGDueznQcKHCF7K_75rv-YOXcWWw",
        "audio",
        "vol 1",
      ],
      [
        "??0722",
        "flying flute 13",
        "cKeqsgVTFHz8PGdX5fVSw4VHPxI5iIgqisyV-2MP5lc",
        "audio",
        "vol 2 - live from graffiti heaven",
      ],
    ],
  },
  "echo chamber 2.0": {
    range: "january 2023 - june 2023",
    description: "wailing ocarina - ",
    tracks: [
      [
        "240123",
        "ocarina 0",
        "75mWvhFXsG57AcxDA9yBmRAkAk1Sojk6H47c7jbkQ7o",
        "audio",
        "",
      ],
      [
        "270123",
        "ocarina 1",
        "VOLHUzYh-gB9DUL-EmkRxs9oj5nNB5kHED2foSD3aYg",
        "audio",
        "",
      ],
      [
        "050223",
        "ocarina 2",
        "lzEW3jgoZgIucCklPBm0s1ZM0ySwLQh6ueGOHLjANxo",
        "audio",
        "breathing exercise",
      ],
      [
        "110223",
        "ocarina 3",
        "ickjkIxc13nSO9C21CF6p0WrFWERc4aWwoWZWZtu-lA",
        "audio",
        "simple melody",
      ],
      [
        "160223",
        "ocarina 4",
        "6gkdJK3hdGbm2gHI113yG62u00EmQ2pPOJQrE9zKEmI",
        "audio",
        "forest echo",
      ],
      [
        "",
        "ocarina 5",
        "zaAHZHAfr_oMRs--bf4cuhPj5P64y5UpTghd5jM-Rlk",
        "audio",
        "breath and note clarity",
      ],
      [
        "",
        "ocarina 6",
        "jxqWicnTtuKiDecr6DG2kVOcoDkjqfEMSkkXaFbn7CY",
        "audio",
        "bird jam session",
      ],
      [
        "280523",
        "ocarina 7",
        "",
        "audio",
        "a melodic wall (prairie interlude)",
      ],
      ["", "ocarina 8", "", "audio", "melodic musing next to the echo chamber"],
    ],
  },
  "wind recording": {
    range: "",
    description: "",
    tracks: [],
  },
  "human in the loop": {
    range: "december 2020",
    description:
      "somewhere between yesterday and tomorrow, recorded on the unceded land of the Coast Salish, səl̓ilwətaɁɬ təməxʷ (Tsleil-Waututh), Skwxwú7mesh-ulh Temíx̱w (Squamish), S’ólh Téméxw (Stó:lō), Stz'uminus, and xʷməθkʷəy̓əm",
    tracks: [
      [
        "231220",
        "intro",
        "B2nYw9URD4fYF_CSCLdMKWA5_CCjnRrDdC95cMogaUk",
        "audio",
        "hello, from the human",
      ],
      [
        "231220",
        "untitled 1",
        "WOXcBMl9wVA0a1NUeWvBKVUlhWhz410u3Kncn-j4cxc",
        "audio",
        "finding the ground",
      ],
      [
        "231220",
        "untitled 2",
        "fwPsuZKkfyefZtMxkZ8FrfdQWJhcTFyk7Hp6hxIVBrE",
        "audio",
        "on the ground running",
      ],
      [
        "231220",
        "untitled 3",
        "Y5t2fYzTbDZOHe1WmdT3ET5mhq-wwWn41vAxnMkVt18",
        "audio",
        "echo",
      ],
      [
        "231220",
        "untitled 4",
        "HkpVan2xQrpcikz0GouDkO8lnoO3ofZyrRLqQaneSp4",
        "audio",
        "reset",
      ],
      [
        "231220",
        "untitled 5 (flute solo)",
        "LStr9j3icr9cka4mfHQHBbKe5-IBDAazCSf6zoNfN-U",
        "audio",
        "reverb, unlocked",
      ],
      [
        "231220",
        "untitled  6 (flute solo)",
        "2IvMGSjScC1jYmV53H_nvHj8oGA007g8qE-zhOIcKKE",
        "audio",
        "a breaking heart",
      ],
      [
        "231220",
        "untitled  7 (flute solo)",
        "NrxOATRqSTi52sT7GniSBRRTwJ7Jq8NoEsEaXQNmsu8",
        "audio",
        "hello from the loop",
      ],
      [
        "231220",
        "untitiled 8",
        "AcENTCeXhEvHkS6xqWpbeSGoOp3ypHMarHOLLV9TIsA",
        "audio",
        "the drums wanted to go home",
      ],
    ],
  },
  getProject(project) {
    //return items from year
    return this[project];
  },

  getList() {
    const projectsList = [
      "soundcloud era",
      "let there be light",
      "mind palace",
      "feel the forest",
      "echo chamber 1.0",
      "echo chamber 2.0",
      "wind recording",
      "human in the loop",
    ];
    return projectsList;
  },
};

function curate() {
  const box = crate;
  function getCreated(proj) {
    if (proj === "list") {
      return box.getList();
    }
    const project = box.getProject(proj);
    return new projectItem([
      proj,
      project.range,
      project.description,
      project.tracks,
    ]);
  }
  return getCreated;
}

const curator = curate();

export default curator;
