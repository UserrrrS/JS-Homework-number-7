const houses = [
  {
      houseImg: 'AtamanHouse.png',
      header: 'Атаман',
      square: '130 кв.м',
      size: '5x6 м',
      construction: '16 дней',
      roomNumb: '5',
      houseType: 'С панорамными окнами',
      price: '1 780 000'
  },
  {
      houseImg: 'AtamanHouse.png',
      header: 'Вольфгант',
      square: '110 кв.м',
      size: '7x9 м',
      construction: '20 дней',
      roomNumb: '5',
      houseType: 'Одноэтажный',
      price: '2 000 000'
  },
  {
      houseImg: 'AtamanHouse.png',
      header: 'Четкий Домик',
      square: '120 м',
      size: '7x9',
      construction: '18 дней',
      roomNumb: '5',
      houseType: 'С мансардой',
      price: '2 400 000'
  },
  {
      houseImg: 'AtamanHouse.png',
      header: 'Богдан',
      square: '108 м',
      size: '7x9',
      construction: '17 дней',
      roomNumb: '5',
      houseType: 'С цокольным этажом',
      price: '1 780 000'
  },
  {
      houseImg: 'AtamanHouse.png',
      header: 'Пересвет',
      square: '109 м',
      size: '7x9',
      construction: '15 дней',
      roomNumb: '5',
      houseType: 'С гаражом',
      price: '1 780 000'
  },
  {
      houseImg: 'AtamanHouse.png',
      header: 'Папич',
      square: '100 м',
      size: '7x9',
      construction: '19 дней',
      roomNumb: '5',
      houseType: 'Трехэтажные',
      price: '1 780 000'
  },
  {
    houseImg: 'AtamanHouse.png',
    header: 'Огурчик',
    square: '100 м',
    size: '7x9',
    construction: '19 дней',
    roomNumb: '5',
    houseType: 'С цокольным этажем',
    price: '1 780 000'
  },
  {
    houseImg: 'AtamanHouse.png',
    header: 'Малыш Стивен',
    square: '100 м',
    size: '7x9',
    construction: '19 дней',
    roomNumb: '5',
    houseType: 'Двухэтажный',
    price: '1 780 000'
  },
  {
    houseImg: 'AtamanHouse.png',
    header: 'Матушка Ребекка',
    square: '100 м',
    size: '7x9',
    construction: '19 дней',
    roomNumb: '5',
    houseType: 'С гаражом',
    price: '1 780 000'
  }
];
showAllData(houses);


let item = document.querySelectorAll(".ataman_item");
for (let i = 0; i < item.length; i++){
    item[i].addEventListener("click", () => itemClick(item[i]));
}

document.querySelector(".ataman_all").onclick = function(){
    clearBox(document.querySelector(".ataman_projects"));
    showAllData(houses);
};

function showAllData(showHouse){
    let a = null;
    for (let i = 0; i < showHouse.length; i++){
        a = createCard(showHouse[i]);
        document.querySelector(".ataman_projects").appendChild(a);
    }
}

function createCard(cardMaterials){

    const card = document.createElement("div");
    card.className = "card";

    const cardTitle = document.createElement("h3");
    cardTitle.classList.add("card__title");
    cardTitle.innerText = cardMaterials.header;

    const cardImage = document.createElement("img");
    cardImage.className = "card__image";
    cardImage.src = './img/' + cardMaterials.houseImg;

    const cardSquare = document.createElement("p");
    cardSquare.classList.add("card__element");
    cardSquare.innerHTML = 'Площадь: <b>'+ cardMaterials.square + '</b>';

    const cardSize = document.createElement("p");
    cardSize.classList.add("card__element");
    cardSize.innerHTML = 'Размеры: <b>'+ cardMaterials.size +'</b>';

    const cardConstruction = document.createElement("p");
    cardConstruction.classList.add("card__element");
    cardConstruction.innerHTML = 'Срок стройки: <b>'+ cardMaterials.construction +'</b>';

    const cardRoomNumb = document.createElement("p");
    cardRoomNumb.classList.add("card__element");
    cardRoomNumb.innerHTML = 'Комнат: <b>'+ cardMaterials.roomNumb +'</b>';

    const cardBigPrice = document.createElement("ul");
    cardBigPrice.className = "card__price";

    const cardType = document.createElement("li");
    cardType.classList.add("card__li");
    cardType.innerHTML = 'Тип дома: <b>' + cardMaterials.houseType + '</b>'
    cardBigPrice.appendChild(cardType);

    const cardPrice = document.createElement("li");
    cardPrice.classList.add("card__li");
    cardPrice.innerHTML = 'Стоимость: <b>от <span class="card__li_strong">' + cardMaterials.price + '</span> руб</b>';
    cardBigPrice.appendChild(cardPrice);

    const cardBtn = document.createElement("div");
    cardBtn.classList.add("card__button");
    cardBtn.innerText = "СМОТРЕТЬ ПРОЕКТЫ >";

    const cardIndividual = document.createElement("div");
    cardIndividual.className = "card__individual";

    const cardCheck = document.createElement("img");
    cardCheck.className = "card__check_img";
    cardCheck.src = "./img/check.svg";
    cardIndividual.appendChild(cardCheck);

    const cardIndividualItem = document.createElement("p");
    cardIndividualItem.classList.add("card__individual_item");
    cardIndividualItem.innerText = "Индивидуальная планировка дома";
    cardIndividual.appendChild(cardIndividualItem);

    card.appendChild(cardImage);
    card.appendChild(cardTitle);
    card.appendChild(cardSquare);
    card.appendChild(cardSize);
    card.appendChild(cardConstruction);
    card.appendChild(cardRoomNumb);
    card.appendChild(cardBigPrice);
    card.appendChild(cardBtn);
    card.appendChild(cardIndividual);

    return card;
}

function clearBox(box){
    box.innerHTML = "";
}

function searchingHouseType(houseType){
    clearBox(document.querySelector(".ataman_projects"));

    let houseFiltration = houses.filter(function(item){
        return item.houseType == houseType;
    });

    let sub = null;
    for (let i = 0; i < houseFiltration.length; i++){
        sub = createCard(houseFiltration[i]);
        document.querySelector(".ataman_projects").appendChild(sub);
    }
}

function itemClick(dispetcher){
    console.log(dispetcher.innerText);
    searchingHouseType(dispetcher.innerText);
}