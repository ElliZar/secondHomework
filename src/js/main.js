const headerHamburger = document.querySelector(".hamburger");
let isClosed = true;
const sidebar = document.querySelector(".sidebar");

headerHamburger.addEventListener("click", burgerTime);

function burgerTime(){
  if(isClosed== true){
    headerHamburger.classList.remove("is-open");
    headerHamburger.classList.add("is-closed");
    isClosed = false;
    sidebar.classList.add("sidebar--active");
  }
  else{
    headerHamburger.classList.remove("is-closed");
    headerHamburger.classList.add("is-open");
    isClosed = true;
    sidebar.classList.remove("sidebar--active");
  }
}