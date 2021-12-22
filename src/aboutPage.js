import AboutSoup from './soup1.jpg';

function renderAbout() {
    cardContent.innerHTML = "";

    const aboutHeader = document.createElement('h2');
    aboutHeader.id = "aboutHeader";
    aboutHeader.innerText = "About"
    cardContent.appendChild(aboutHeader);

    const aboutText = document.createElement('div');
    aboutText.id = "aboutText";
    aboutText.classList.add("cardText");
    aboutText.innerHTML = "<p>There's <em>nothing</em> better than a bowl of hot, savoury soup on a cold winter's day.</p><p>That's why we opened our cozy caf&eacute; in the middle of the Canadian tundra</p><p>Feed the body <em>and</em> the soul at Soup D'Jour."
    cardContent.appendChild(aboutText);

    cardImage.src = AboutSoup;
}

export { renderAbout };