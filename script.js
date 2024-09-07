const processBtn = document.getElementsByClassName("process");

function crossout(id) {
  let ing = document.getElementById(id);
  ing.classList.add("crossout");
}

for (let b of processBtn) {
  b.addEventListener("click", () => {
    crossout(b.name);
    b.innerHTML = "done";
    b.classList.add("done");
  });
}
