import MenuSoup from './soup2.jpg';

function renderMenu() {
   cardContent.innerHTML = "";

    const menuHeader = document.createElement('h2');
    menuHeader.id = "menuHeader";
    menuHeader.innerText = "Menu"
    cardContent.appendChild(menuHeader);

    const squashSoup = document.createElement('h3');
    squashSoup.id = "squashSoup";
    squashSoup.innerText = "Butternut Squash Soup \- $15";
    cardContent.appendChild(squashSoup);

    const squashSoupDescription = document.createElement('div');
    squashSoupDescription.innerHTML = "<p>Creamy vegan butternut squash soup.</p>"
    squashSoupDescription.classList.add("cardText");
    cardContent.appendChild(squashSoupDescription);

    const carrotSoup = document.createElement('h3');
    carrotSoup.id = "carrotSoup";
    carrotSoup.innerText = "Ginger Carrot Soup \- $15";
    cardContent.appendChild(carrotSoup);

    const carrotSoupDescription = document.createElement('div');
    carrotSoupDescription.innerHTML = "<p>Spicy vegan ginger carrot soup.</p>"
    carrotSoupDescription.classList.add("cardText");
    cardContent.appendChild(carrotSoupDescription);
        
    const tomatoSoup = document.createElement('h3');
    tomatoSoup.id = "tomatoSoup";
    tomatoSoup.innerText = "Heirloom Tomato Soup \- $16";
    cardContent.appendChild(tomatoSoup);

    const tomatoSoupDescription = document.createElement('div');
    tomatoSoupDescription.innerHTML = "<p>Savoury vegan heirloom tomato soup.</p>"
    tomatoSoupDescription.classList.add("cardText");
    cardContent.appendChild(tomatoSoupDescription);

    const potatoSoup = document.createElement('h3');
    potatoSoup.id = "potatoSoup";
    potatoSoup.innerText = "Chunky German Potato Soup \- $16";
    cardContent.appendChild(potatoSoup);

    const potatoSoupDescription = document.createElement('div');
    potatoSoupDescription.innerHTML = "<p>Chunky german potato soup.</p>"
    potatoSoupDescription.classList.add("cardText");
    cardContent.appendChild(potatoSoupDescription);

    const veggieTray = document.createElement('h3');
    veggieTray.id = "veggieTray";
    veggieTray.innerText = "Veggie Tray with Hummus \- $9";
    cardContent.appendChild(veggieTray);

    const veggieTrayDescription = document.createElement('div');
    veggieTrayDescription.id = "veggieTrayDescription";
    veggieTrayDescription.innerHTML = "<p>Seasonal veggies with garlic hummus for dippins</p>";
    cardContent.appendChild(veggieTrayDescription);

    const withToast = document.createElement('div');
    withToast.classList.add("cardText");
    withToast.innerText = "All soup served with local Einkorn sourdough bread and butter";
    cardContent.appendChild(withToast);

    cardImage.src = MenuSoup;
}

export { renderMenu };