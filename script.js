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

function clicked() {
  //variables to stored previous selected in closure
  let selected = "";
  let selectedDesc = "";

  function updatedClicked(titleElem) {
    //selected is the same as previous
    if (selected === titleElem) {
      selectedDesc.classList.add("hidden");
      titleElem.classList.remove("selected");
      selected = "";
      selectedDesc = "";
    } else {
      //previous selected is not same as current
      if (selected) {
        selected.classList.remove("selected");
        selectedDesc.classList.add("hidden");
      }
      //update previously selected
      selected = titleElem;
      titleElem.classList.add("selected");
      selectedDesc = document.getElementById(titleElem.textContent);
      selectedDesc.classList.remove("hidden");
    }
  }
  return updatedClicked;
}

let clickedTitle = clicked();

//add event handlers to playlist titles
const titles = document.getElementsByTagName("dt");
for (let t of titles) {
  //display selected descriptors
  t.addEventListener("click", () => {
    clickedTitle(t);
  });
}
