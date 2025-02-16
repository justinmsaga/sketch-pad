import curator from "./audioArchive.js";

//------selector button setup

//document
const selectors = document.querySelector(".selectors");

//curator creation
const projects = curator("list");

projects.forEach((p) => {
  const btn = createElem("button", p);
  selectors.appendChild(btn);
});

//event handler to project button
const buttons = document.querySelectorAll(".selectors button");
buttons.forEach((b) => {
  b.addEventListener("click", () => {
    projectDetails.innerHTML = "";
    displayProject(b.textContent);
    clickedProject(b);
    audioPlayer.removeAttribute("controls");
  });
});

//------html element helpers

//set styling on clicked button
function btnClick() {
  let click = "";
  function updateClk(btn) {
    if (btn != click) {
      click ? click.classList.remove("clicked") : "";
      click = btn;
      btn.classList.add("clicked");
    }
  }
  return updateClk;
}

//styling update for project btns
let clickedProject = btnClick();

//styling update for track btns
let clickedTrack = btnClick();

//inputs(element type, text context, hidden if true, element name)
function createElem(type, text, hide, name) {
  const elem = document.createElement(type);
  elem.textContent = text;
  if (name) {
    elem.setAttribute("id", name);
    elem.classList.add("desc");
  }
  if (hide) {
    elem.classList.add("hidden");
  }
  return elem;
}

//add children to html element
function addToTag(tag, comps) {
  for (let c of comps) {
    tag.appendChild(c);
  }
}

//------update project details
const projectDetails = document.querySelector(".projectDetails");
function displayProject(pName) {
  //get project from curator
  const project = curator(pName);

  //create element with project details
  addToTag(projectDetails, [
    createElem("p", project.name),
    createElem("p", project.range),
  ]);

  //add tracks to page
  updateTracks(project.tracks);
}

//------update tracks
const tracksSection = document.querySelector(".tracks");
function updateTracks(trackList) {
  tracksSection.innerHTML = "";

  //from track list create track buttons and event listener to update audio
  let trackBtn = trackList.map((track) => {
    let btn = createElem("button", track.curation);
    btn.addEventListener("click", () => {
      audioPlayer.removeAttribute("controls");
      updateAudio(track.source);
      clickedTrack(btn);
    });
    return btn;
  });

  //add buttons to page
  addToTag(tracksSection, trackBtn);
}

//------update player
const audioPlayer = document.querySelector(".player audio");
const playerSection = document.querySelector(".player");
function updateAudio(trackSource) {
  //set audio source
  audioPlayer.setAttribute("src", trackSource);

  //after file has loaded
  audioPlayer.onloadeddata = () => {
    audioPlayer.setAttribute("controls", "controls");
  };
}
