//func to add self styling
const updateSelf = (id) => {
  let selfLink = document.getElementById(id);
  selfLink.classList.add("self");
  selfLink.innerText = "me in a haiku"
  let haiku = document.getElementById("haiku");
  haiku.classList.remove("hide");
}

//add event listener to button
const buttons = document.getElementsByClassName("selfBtn");
for (let b of buttons) {
  b.addEventListener("click", () => {
    updateSelf("addSelf");
  });
};

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
};

//today update
const today = document.getElementById("today");
today.addEventListener("click", () => {
  setShow(today.name);
  today.innerText = "current idea: media player";
})

//display media
const tracks = [
  {
    name: "track 1",
    length: "00:00",
    source: "",
    desc: "one"
  },
  {
    name: "track 2",
    length: "00:00",
    source: "",
    desc: "two"
  },
  {
    name: "track 3",
    length: "00:00",
    source: "",
    desc: "three"
  },
  {
    name: "track 4",
    length: "00:00",
    source: "",
    desc: "four"
  },
  {
    name: "track 5",
    length: "00:00",
    source: "",
    desc: "five"
  },
  {
    name: "track 6",
    length: "00:00",
    source: "",
    desc: "six"
  },
  {
    name: "track 7",
    length: "00:00",
    source: "",
    desc: "seven"
  }
]

const vids = [
  {
    name: "let there be light",
    length: "2:36",
    source: "6DUxyflSM_8UEMGslYRLCJaQQXCuNks_iIOH1EOJ1Fk",
    desc: "initial spark"
  },
  {
    name: "if alive",
    length: "0:11",
    source: "RTRXhvNqhvm4jRf_Q6V1wtorg9nYs9c4zW_euxL_kRk",
    desc: "filosofie"
  },
  {
    name: "welcome",
    length: "26:43",
    source: "GtRAbq8kKz_aO6PEqvngsMnBW_l3X4kN0nOAK5y8Y4M",
    desc: "algo"
  }
]

const mediaSection = document.getElementById("displayMedia");
const audioBtn = document.getElementById("audio");
const videoBtn = document.getElementById("video");

const showMedia = (id) => {
  setShow("displayMedia");

  //clear media section
  while (mediaSection.hasChildNodes()) {
    mediaSection.removeChild((mediaSection.firstChild));
  }

  //update buttons to select media
  let selectSection = document.createElement("div");
  selectSection.setAttribute("class", "mediaShow");
  mediaSection.appendChild(selectSection);

  //add media description
  let mediaDesc = document.createElement("p");
  mediaDesc.innerHTML = `select media below`;
  mediaDesc.setAttribute("class", "mediaDesc");
  mediaSection.appendChild(mediaDesc);

  //set media file to audio
  if (id === "field recordings") {

    //add audio element
    let audio = document.createElement("audio");
    audio.setAttribute("controls", "controls");
    audio.setAttribute("class", "mediaFile");
    mediaSection.appendChild(audio);

    //select audio buttons
    for (let i = 0; i < tracks.length; i++) {
      let medBtn = document.createElement("button");
      medBtn.innerHTML = `${tracks[i].name} <br> ${tracks[i].length}`;
      medBtn.setAttribute("name", i);
      
      medBtn.addEventListener("click", () => {
        audio.src = tracks[i].source;
        mediaDesc.innerHTML = tracks[i].desc;
      });

      selectSection.appendChild(medBtn);
    }

    //set video style to default
    videoBtn.classList.remove("clicked");
    videoBtn.innerHTML = "video";
  }

  //set media file to video
  if (id === "live from the deerverse") {

    //add video element
    let video = document.createElement("video");
    video.setAttribute("controls", "controls");
    video.setAttribute("class", "mediaFile");
    mediaSection.appendChild(video);

    //add select video buttons
    for (let i = 0; i < vids.length; i++) {
      let medBtn = document.createElement("button");
      medBtn.innerHTML = `${vids[i].name} <br> ${vids[i].length}`;
      medBtn.setAttribute("name", i);

      //event listener to update video and desc when
      medBtn.addEventListener("click", () => {
        video.src = `https://arweave.net/${vids[i].source}`;
        mediaDesc.innerHTML = vids[i].desc;
      });

      //add button to select media section
      selectSection.appendChild(medBtn);
    }

    //set audio style to default
    audioBtn.classList.remove("clicked");
    audioBtn.innerHTML = "audio";
  }
}

const mediaBtns = document.getElementsByClassName("media");
for (let b of mediaBtns) {
  b.addEventListener("click", () => {
    showMedia(b.name);
    b.classList.add("clicked");
    b.innerHTML = b.name;
  });
};