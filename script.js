const descriptions = {
  forest: "you are here",
  msaga: "the human",
  msga: "a digital graffiti wall",
  sk8: " an open studio",
  baked: "a bakery in the cloud",
};
const btns = document.getElementsByClassName("section");

function updateBtn(children, name) {
  for (let child of children) {
    let innerChild = child.children;
    for (let inner of innerChild) {
      inner.innerHTML = inner.innerHTML + "👈🏿";
    }

    child.classList.add("selected");
    let desc = document.createElement("p");
    desc.innerHTML = `${name}`;
    child.appendChild(desc);

    if (name === descriptions["msaga"]) {
      let who = document.createElement("p");
      who.innerHTML = `msaga + bushsk8r = ms@ga`;
      child.appendChild(who);
    }
  }
}

for (let b of btns) {
  b.addEventListener("click", () => {
    updateBtn(b.children, descriptions[b.name]);
    b.setAttribute("disabled", "disabled");
  });
}
