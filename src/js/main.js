const burger = document.querySelector(".burger");
const sidebar=document.querySelector(".sidebar");
const logo=document.querySelector(".logo");

burger.addEventListener("click", showMenu);
logo.addEventListener("click", hideMenu);

function showMenu(){
  sidebar.classList.toggle("show");
}
function hideMenu(){
  sidebar.classList.remove("show");
}