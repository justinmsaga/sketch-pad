class archiveItem {
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

// key = year
// value = [creation date, title, source, file type, description]

const crate = {
  may: [
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
  ],
  june: [
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
  ],
  july: [
    [
      "020719",
      "1 step forward, 2 steps back",
      "LRDLtdXwopfJ9sH7PwZ9jtwouorTKVdxECukeH49NuM",
      "audio",
      "regression",
    ],
  ],
  august: [
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
  getFromMonth(month) {
    //return items from year
    return this[month];
  },
};

function curate() {
  let month = "";
  const box = crate;
  function getCurated(curationMonth) {
    month = curationMonth;
    return box.getFromMonth(month).map((c) => new archiveItem(c));
  }
  return getCurated;
}

const curator = curate();

export default curator;
