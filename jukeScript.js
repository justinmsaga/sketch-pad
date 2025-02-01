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
    clickedBtn(b);
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
let clickedBtn = btnClick();
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
  const projElem = createElem("dl");
  addToTag(projElem, [
    createElem("dt", project.name),
    createElem("dd", project.range),
  ]);

  //add to details section
  projectDetails.appendChild(projElem);
  updateTracks(project.tracks);
}

//------update tracks
const tracksSection = document.querySelector(".tracks");
function updateTracks(trackList) {
  tracksSection.innerHTML = "";
  let trackBtn = trackList.map((track) => {
    let btn = createElem("button", track.curation);
    btn.addEventListener("click", () => {
      audioPlayer.removeAttribute("controls");
      updateAudio(track.source);
      clickedTrack(btn);
    });
    return btn;
  });
  addToTag(tracksSection, trackBtn);
}
//------update player
const audioPlayer = document.querySelector(".player audio");
const playerSection = document.querySelector(".player");
function updateAudio(trackSource) {
  audioPlayer.setAttribute("src", trackSource);
  audioPlayer.onloadeddata = () => {
    audioPlayer.setAttribute("controls", "controls");
  };
}
