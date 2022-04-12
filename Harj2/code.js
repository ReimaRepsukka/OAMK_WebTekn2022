//a
document.querySelector("h2").textContent="Let's manipulate some DOM again!";


//b
let content = document.getElementById("content");
content.lastElementChild.remove();

//c
let article = document.querySelector("article");

let fChild = article.firstElementChild;
let lChild = article.lastElementChild;

let temp = fChild.textContent;
fChild.textContent = lChild.textContent;
lChild.textContent = temp;

//d
let ul = document.createElement("ul");

for (let i = 1; i < 6; i++) {
    let li = document.createElement("li");
    li.textContent = "Number " + i;
    ul.appendChild(li);
}
content.appendChild(ul);

//e
function createRow(colType, col1, col2){
    let tr = document.createElement("tr");
    let c1 = document.createElement(colType);
    let c2 = document.createElement(colType);
    c1.textContent = col1;
    c2.textContent = col2;
    tr.append(c1,c2);
    return tr;
}

let table = document.createElement("table");
table.appendChild( createRow("th","Last name", "First name") )
table.appendChild( createRow("td", "John", "Doe"));
table.appendChild( createRow("td", "Reima", "Riihimäki"));
table.appendChild( createRow("td", "Lisa", "Simpson"));
content.appendChild(table);

//f
let contentChildren = document.querySelectorAll("#content>*");

/**@type{Element} */
let elem;
for(elem of contentChildren){
    let hr = document.createElement("hr");
    elem.parentElement.insertBefore(hr, elem);
}