document.getElementById("menubutton").addEventListener("click", showMenu);
let menu = document.querySelector("#menubutton div");

function showMenu(event){
    event.preventDefault();
    menu.classList.toggle("invisible");

}