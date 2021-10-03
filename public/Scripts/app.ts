(function () {
  function Start() {
    console.log("Application started!");
  }
  //when the window loads we will run the start function
  window.addEventListener("load", Start);
})();

window.onscroll = function () {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    (<HTMLElement>document.querySelector(".fixed-bottom")).style.zIndex = "-1";
  } else {
    (<HTMLElement>document.querySelector(".fixed-bottom")).style.zIndex = "10";
  }
};