import playlists from "./playlist.js";

//display element from doc
const displayArea = document.getElementById("dataList");

//create html element
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

//add playlists to display area data list
for (let p of playlists) {
  const playTitle = createElem("dt", p.title);
  const div = createElem("div", "", true, p.title);
  const playDesc = createElem("dd", p.desc);
  const playNum = createElem("dd", `${p.total} playlists`);
  addToTag(div, [playDesc, playNum]);
  addToTag(displayArea, [playTitle, div]);
}

//hide all descriptors
function hideAll() {
  const allDiv = document.querySelectorAll("div");
  for (let d of allDiv) {
    d.classList.add("hidden");
  }
}

//add event handlers to playlist titles
const titles = document.getElementsByTagName("dt");
for (let t of titles) {
  //display selected descriptors
  t.addEventListener("click", () => {
    hideAll();
    const sect = document.getElementById(t.textContent);
    sect.classList.remove("hidden");
  });
}
