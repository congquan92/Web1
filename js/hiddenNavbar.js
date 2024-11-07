
let prevScrollPos = window.scrollY;
const header = document.querySelector(".header");

window.onscroll = function(){
  let currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }
  prevScrollPos = currentScrollPos;
};
