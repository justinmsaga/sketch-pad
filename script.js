const processBtn = document.getElementsByClassName("process");

function crossout(id) {
  let ing = document.getElementById(id);
  ing.classList.add("crossout");

  if (id === "main") {
    let full = document.getElementById("full");
    full.classList.remove("hide");
  }

  if (id === "full") {
    let full = document.getElementById("bake");
    full.classList.remove("hide");
  }
}

for (let b of processBtn) {
  b.addEventListener("click", () => {
    crossout(b.name);
    b.innerHTML = "done";
    b.classList.add("done");
  });
}
