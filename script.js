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
  today.innerText = "current idea: playlist archive";
});

//display playlists

const playlists = [
  {
    name: "low end theory 1",
    length: "01:11:24",
    songs: "16 songs",
    links: {
      spotify:
        "https://open.spotify.com/playlist/6UGN6oWn6LYcIXRgMshPVU?si=61d7db7d6c8a45e8",
      tidal:
        "https://tidal.com/browse/playlist/289f34e0-af7f-49a6-a9a8-a9e9ea47aa5d",
    },
  },
  {
    name: "low end theory 2",
    length: "39:42",
    songs: "13 songs",
    links: {
      spotify:
        "https://open.spotify.com/playlist/5lYybba1KUo07RHhHYUevt?si=c0ea351936aa4eaf",
      tidal:
        "https://tidal.com/browse/playlist/9db9d175-4ecd-427b-a99e-9eda0d8f1cce",
    },
  },
  {
    name: "low end theory 3",
    length: "32:08",
    songs: "9 songs",
    links: {
      spotify:
        "https://open.spotify.com/playlist/7kgEEYOZzXqHydQ3xHuo1P?si=4fbf32084aad4bcf",
      tidal:
        "https://tidal.com/browse/playlist/828556f0-18b8-42dd-bdeb-fdb9901764b7",
    },
  },
];

//section to display playlists
const display = document.getElementById("playlists");

//hide playlist details
function clearSection() {
  let sect = document.getElementsByClassName("section");
  for (let s of sect) {
    s.classList.add("hide");
  }
}

//create link elements to playlists
function createLink(link, name) {
  let linkEl = document.createElement("a");
  linkEl.setAttribute("href", link);
  linkEl.innerHTML = name;
  return linkEl;
}

//add select buttons for each playlist
for (let i = 0; i < playlists.length; i++) {
  //create button with playlist text
  let playBtn = document.createElement("button");
  playBtn.innerHTML = `${playlists[i].name} <br> ${playlists[i].length}`;

  //add display section for when playlist is selected
  let dispSect = document.createElement("div");
  dispSect.setAttribute("id", i);
  dispSect.innerHTML = `${playlists[i].songs}`;
  dispSect.classList.add("hide", "section");

  dispSect.appendChild(createLink(playlists[i].links.spotify, "spotify"));
  dispSect.appendChild(createLink(playlists[i].links.tidal, "tidal"));

  //handler to display playlist details in section
  playBtn.addEventListener("click", () => {
    clearSection();
    dispSect.classList.remove("hide");
  });

  //add button and display section to playlist div
  display.appendChild(playBtn);
  display.appendChild(dispSect);
}
