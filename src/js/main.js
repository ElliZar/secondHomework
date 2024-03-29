const headerHamburger = document.querySelector(".hamburger");
const sidebar = document.querySelector(".sidebar");
const sidebarLogo = document.querySelector(".sidebar__logo");


function switchBurger(){
  headerHamburger.classList.remove("is-open");
  headerHamburger.classList.add("is-closed");
  sidebar.classList.add("sidebar--active");
}

function closeSidebar(){
  sidebar.classList.remove("sidebar--active");
  headerHamburger.classList.remove("is-closed");
  headerHamburger.classList.add("is-open");
}

headerHamburger.addEventListener("click", switchBurger);
sidebarLogo.addEventListener("click",closeSidebar);