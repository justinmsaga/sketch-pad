const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.innerHTML = "this is a clicked button";
  btn.classList.add("clicked");
});
