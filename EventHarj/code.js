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

function checkValidity(event){
    let elem = event.currentTarget;

    let text = elem.value;

    if(text.length == 11){
        elem.classList.remove("invalid")
    }else{
        elem.classList.add("invalid");
    }
}

//Harj 4
let button = document.createElement("button");
let buttonWidth = 100;
button.textContent = "OK";
//Asetetaan inline-tyylillä napin leveys
button.style.width = buttonWidth+"px";
//Lisätään click-kuuntelija
button.addEventListener("click", addWidth);
//Lisätään nappi bodyyn
document.querySelector("body").appendChild(button);

function addWidth(){
    //Lisätään napin leveyttä aina 10 pikselillä
    buttonWidth+=10;
    button.style.width = buttonWidth+"px";
}
