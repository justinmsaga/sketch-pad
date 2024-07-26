//highlight self in where to

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
for(let b of highBtn){
  b.addEventListener("click", () => { 
    setShow(b.name);
  });
};

//today update

const today = document.getElementById("today");
today.addEventListener("click", () =>{
  today.innerText = "current idea: haiku introductions";
  setShow("playlistIntro");
})
