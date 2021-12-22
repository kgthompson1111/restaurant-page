function renderPage() {
    // header bar
    const navHeader = document.createElement('div');
    nav-header.id = "nav-header";
    content.appendChild(navHeader);

    //logo, header and nav
    const headerLogo = document.createElement('div');
    headerLogo.id = "header-logo";
    //append logo box
    navHeader.appendChild(headerLogo);

    const logo = document.createElement('img');
    logo.id = logo;
    logo.setAttribute('src', 'logo.png');
    //append logo
    headerLogo.appendChild(logo);

    const headerText = document.createElement('h1');
    headerText.innerText = "Soup D\'Jour";
    //append header
    headerLogo.appendChild(headerText);

    // navigation list/links
    const navLinks = document.createElement('ul');
    const homeButton = document.createElement('li');
        homeButton.innerHTML = "<a href="">Home</a>";
        navLinks.appendChild(homeButton);
    const menuButton = document.createElement('li');
        menuButton.innerHTML = "<a href="">Menu</a>";
        navLinks.appendChild(menuButton);
    const contactButton = document.createElement('li');
        contactButton.innerHTML = "<a href="">Contact</a>";
        navLinks.appendChild(contactButton);
    //append ul
    nav-header.appendChild(navLinks);

    //body container
    const contentBody = document.createElement('div');
    content.appendChild(contentBody);

    const card = document.createElement('div');
    card.id = "card";
    contentBody.appendChild(card);

    const cardContent = document.createElement('div');
    cardText.id = "card-content";
    card.appendChild(cardText);

    const cardHeader = document.createElement('h2');
    cardHeader.id = "card-header";
    cardContent.appendChild(h2);

    const cardText = document.createElement('div');
    cardText.id = "card-text";
    cardText.innerHTML = "<p>There's nothing better than a hot bowl of soup on a cold day</p><br><p>Feed the body <em>and<em> the soul at Soup D'Jour."
    cardContent.appendChild(cardText);

    const cardImage = document.createElement('img');
    cardImage.id = "card-image";
    cardImage.setAttribute.src = "soup.jpeg";
    card.appendChild(cardImage);

    //footer
    const footer = document.createElement('div');
    footer.id = "footer";
    footer.innerHTML = "&copy; 2021  Kelly Thompson";

    content.appendChild(footer);
}