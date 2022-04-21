//Harj 1
let h1 = document.querySelector("h1");
h1.classList.add("special");
h1.style.width = "80%";


//Harj2
let p = document.querySelector("p");
p.addEventListener("mouseenter", changeColor);
p.addEventListener("mouseleave", changeColor);
p.addEventListener("click", changeBg);

function changeColor(){
    p.classList.toggle("textcolor");
}
function changeBg(){
    p.classList.toggle("textbg");
}

//Harj 3
let sotu = document.getElementById("sotu");
sotu.addEventListener("input", checkValidity);


/**
 * 
 * @param {Event} event 
 */
function checkValidity(event){
    let elem = event.currentTarget;

    let text = elem.value;

    if(text.length == 11){
        elem.classList.remove("invalid")
    }else{
        elem.classList.add("invalid");
    }
}
