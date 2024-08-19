//func to add self styling
const updateSelf = (id) => {
  let selfLink = document.getElementById(id);
  selfLink.classList.add("self");
  selfLink.innerText = "me in a haiku";
  let haiku = document.getElementById("haiku");
  haiku.classList.remove("hide");
};

//add event listener to button
const buttons = document.getElementsByClassName("selfBtn");
for (let b of buttons) {
  b.addEventListener("click", () => {
    updateSelf("addSelf");
  });
}

//display highlight

//func to show highlight
const setShow = (id) => {
  let high = document.getElementById(id);
  high.classList.remove("hide");
};

//add eventlistener to show highlight buttons
const highBtn = document.getElementsByClassName("showHigh");
for (let b of highBtn) {
  b.addEventListener("click", () => {
    setShow(b.name);
  });
}

//today update
const today = document.getElementById("today");
today.addEventListener("click", () => {
  setShow(today.name);
  today.innerText = "current idea: media player";
});

//display media

//audio data
const tracks = [
  {
    name: "forest ambient",
    length: "2:43",
    source: "XMYjams6H21In5Dydv9RpbLf7Y8OGeVGHw-jLJfSlAE",
    desc: "live from the deerverse",
  },
  {
    name: "forest ambient",
    length: "3:39",
    source: "b9pTlr81xdUwEsq17Cf45Zmed20DuV_UUEuxVg-V8Yo",
    desc: "live from the deerverse",
  },
  {
    name: "ocarina play",
    length: "1:58",
    source: "_Gf4e51EX5QnDGyVZec6n7CxjiBxGr9mRxTV9Il7FRI",
    desc: "improv",
  },
  {
    name: "forest ambient",
    length: "1:06",
    source: "IIgfgz0eCFPX8z_BY1-Q-bjNzudAfBzcYQ8dBkC7Rro",
    desc: "live from the deerverse",
  },
  {
    name: "ocarina play",
    length: "2:11",
    source: "6HgdrgDyAyb3kVgu7PNvHYmP-ZgRrOSI4ueXp8LfoK4",
    desc: "haiku",
  },
  {
    name: "forest ambient",
    length: "1:17",
    source: "xOlignwX8uEyGY7acFvUe_toORMm6P7TIynhzksvWgo",
    desc: "live from the deerverse",
  },
];
//video data
const vids = [
  {
    name: "home boy",
    length: "0:20",
    source: "OsDcnw9GC0MWUr3_q7MhbiBlu5sAPeSWLSsqnaS5rxU",
    desc: "meals in the hood",
  },
  {
    name: "home girl",
    length: "0:30",
    source: "uKl_QHvtg3K-eifc5FNGDsZnwCumFuMh4IHi9yo4TH8",
    desc: "meals in the park",
  },
  {
    name: "woodpecker",
    length: "1:40",
    source: "cUlcbvNjC9CRsFcOYx-Udk6CSekwNAfJlF0sK5Af4aI",
    desc: "pecking on a clear day",
  },
];

//image data
const pics = [
  {
    name: "dhow",
    length: ".svg",
    source: "8Wi7rBrkBzCVa2jRe9x7GfxtvP7kv46vaVFvqk4RCAU",
    desc: "it's a boat",
  },
  {
    name: "fingerprints",
    length: ".svg",
    source: "kwkRlqk3LUeYBiBPDSkDaMzZRmGK2NeBPxIHaaWmUp0",
    desc: "grains of ego left in time and space",
  },
  {
    name: "giraffe",
    length: ".svg",
    source: "nxO1XJt0iNZYMOCW-4QR04CKTHANuAijEZwnIOvywRg",
    desc: "cheeky bugger",
  },
  {
    name: "blue",
    length: ".svg",
    source: "weZZOn2p6hFdG9yHvYCZqtl2ZJrCxImh07X11Gx0urU",
    desc: "issa race car",
  },
];

//get media elements from page
const mediaSection = document.getElementById("displayMedia");
const audioBtn = document.getElementById("audio");
const videoBtn = document.getElementById("video");
const picBtn = document.getElementById("image");

//remove clicked styling from select media file
function clearBtn() {
  const btns = document.getElementsByClassName("selector");
  for (let b of btns) {
    b.classList.remove("clicked");
  }
}

//removed clicked styling from select media type
function clearMedia() {
  const medBtn = document.getElementsByClassName("media");
  for (let b of medBtn) {
    b.classList.remove("clicked");
    b.innerHTML = b.id;
  }
}

/* add selected media buttons
medfiles - array of media files
media - media element (audio video or image)
desciption - media description element
section - html page element where buttons will be displayed */
function mediaButtons(medFiles, media, description, section) {
  //loop through all media files
  for (let i = 0; i < medFiles.length; i++) {
    //create button elements and set content from media file details
    let medBtn = document.createElement("button");
    medBtn.innerHTML = `${medFiles[i].name} <br> ${medFiles[i].length}`;
    medBtn.setAttribute("name", i);
    medBtn.classList.add("selector");

    //event listener for media button to set source and update description
    medBtn.addEventListener("click", () => {
      media.src = `https://arweave.net/${medFiles[i].source}`;
      mediaSection.appendChild(media);
      description.innerHTML = medFiles[i].desc;
      clearBtn();
      medBtn.classList.add("clicked");
    });

    //add button to display section
    section.appendChild(medBtn);
  }
}

//add media and selection items to media section
const showMedia = (id) => {
  //show media
  mediaSection.classList.remove("hide");

  //clear media section
  while (mediaSection.hasChildNodes()) {
    mediaSection.removeChild(mediaSection.firstChild);
  }

  //update buttons to select media
  let selectSection = document.createElement("div");
  selectSection.setAttribute("class", "mediaShow");
  mediaSection.appendChild(selectSection);

  //add media description
  let mediaDesc = document.createElement("p");
  mediaDesc.setAttribute("class", "mediaDesc");
  mediaSection.appendChild(mediaDesc);

  //set media file to audio
  if (id === "field recordings") {
    //add audio element
    let audio = document.createElement("audio");
    audio.setAttribute("controls", "controls");
    audio.setAttribute("class", "mediaFile");

    // add select audio buttons to html page
    mediaButtons(tracks, audio, mediaDesc, selectSection);

    //set select media to default
    clearMedia();

    mediaDesc.innerHTML = `field recordings`;
  }

  //set media file to video
  if (id === "deerverse") {
    //add video element
    let video = document.createElement("video");
    video.setAttribute("controls", "controls");
    video.setAttribute("class", "mediaFile");

    //add select video buttons to html page
    mediaButtons(vids, video, mediaDesc, selectSection);

    //set select media to default
    clearMedia();

    mediaDesc.innerHTML = `live from the deerverse`;
  }

  //set media file to pic
  if (id === "poly") {
    //add img element
    let pic = document.createElement("img");
    pic.setAttribute("alt", "poly art here");

    //add select image buttons to page
    mediaButtons(pics, pic, mediaDesc, selectSection);

    //set select media to default
    clearMedia();

    //update description
    mediaDesc.innerHTML = "playin' with polygons";
  }
};

//add event handlers to select media type btns
const mediaBtns = document.getElementsByClassName("media");
for (let b of mediaBtns) {
  b.addEventListener("click", () => {
    showMedia(b.name);
    b.classList.add("clicked");
    b.innerHTML = b.name;
  });
}
