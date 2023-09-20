const menu = document.querySelector(".btn-group-vertical");
const buttonMenu = document.querySelector(".btn");
const jumbo = document.querySelector(".jumbotron");
const jumboTitle = document.querySelector(".display-4");
const jumboSubtitle = document.querySelector("p.lead");
const jumboText = document.querySelector("p:nth-child(4)");
const jumboButton = document.querySelector("a.btn-primary");
const rowCards = document.querySelector("div:nth-child(6)");
const cardList = document.querySelectorAll("div.col-lg-3");
const listMenu = document.querySelectorAll("ul.list-group");
const itemTexts = ["Quarto Item", "Quinto Item"];

menu.className = "btn-group-horizontal";
buttonMenu.className = "btn btn-secondary btn-rounded";
jumbo.className = "jumbotron flex flex-col gray-dark text-white";
jumboTitle.className = "display-4 text-right";
jumboSubtitle.className = "lead text-right";
jumboText.className = "text-right";
jumboButton.className = "btn btn-primary btn-lg self-end bg-green";

let cardListSort = [];

for (var i = 0, j = cardList.length; i < j; i++) {
  if (i % 2 !== 0) {
    cardListSort[i > 1 ? 0 : 3] = cardList[i];
  } else {
    cardListSort[i > 1 ? 2 : 1] = cardList[i];
  }
}

cardListSort[1].querySelector("a.btn").className =
  "btn btn-success btn-rounded btn-block";

for (var i = 0, j = cardListSort.length; i < j; i++) {
  rowCards.appendChild(cardListSort[i]);
}

for (var i = 0, j = itemTexts.length; i < j; i++) {
  const newLi = document.createElement("li");
  newLi.className = "list-group-item";
  newLi.appendChild(document.createTextNode(itemTexts[i]));
  listMenu[0].appendChild(newLi);
}

for (var i = 0, j = listMenu.length; i < j; i++) {
  listMenu[i].querySelector("li:first-child").classList.remove("active");
  listMenu[i].querySelector("li:nth-child(4)").classList.add("active");
}
