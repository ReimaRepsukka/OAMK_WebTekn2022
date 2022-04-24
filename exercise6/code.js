//Lisätään form-elementtiin submit kuuntelija
//Eventin aiheuttaa napin painallus formin sisällä
document.querySelector("form").addEventListener("submit", calc);


/**
 * @param {Event} event 
 */
function calc(event){
    //Estetään oletustoiminta (sivun päivitys)
    event.preventDefault();

    //Luodaan form data -olio form-elementistä eli tämän eventin targetista
    let formData = new FormData(event.currentTarget);

    //Haetaan numerot (valuet) formista nimen perusteella
    let num1 = formData.get("num1");
    let num2 = formData.get("num2");

    //Haetaan result div
    let res = document.getElementById("result");

    //Haetaan formin radiobutton value
    let arit = formData.get("arit");

    //Riippuen radiobuttonin arvosta lasketaan numeroiden summa tai erotus.
    if(arit == "sum"){
        res.textContent = "Lukujen summa on " + (Number(num1) + Number(num2));
    }else{
        res.textContent = "Lukujen erotus on " + (Number(num1) - Number(num2));
    }
 
}