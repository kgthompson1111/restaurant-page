import MyLogo from './logo.png';
import AboutSoup from './soup1.jpg';
import { renderAbout } from './aboutPage.js';


function renderPage() {
    const content = document.getElementById('content');
    // header bar
    const navHeader = document.createElement('div');
    navHeader.id = "navHeader";
    content.appendChild(navHeader);

    //logo, header and nav
    const headerLogo = document.createElement('div');
    headerLogo.id = "headerLogo";
    //append logo box
    navHeader.appendChild(headerLogo);

    const logo = document.createElement('img');
    logo.id = "logo";
    logo.src = MyLogo;
    // //append logo
    headerLogo.appendChild(logo);

    const headerText = document.createElement('h1');
    headerText.id = "headerText";
    headerText.innerText = "Soup d\'Jour";
    //append header
    headerLogo.appendChild(headerText);

    // navigation list/links
    const navLinks = document.createElement('ul');
    const aboutButtonHolder = document.createElement('li');
        navLinks.appendChild(aboutButtonHolder);
        const aboutButtonLink = document.createElement('a');
        aboutButtonLink.innerText = "About";
        aboutButtonLink.href = "#"
        aboutButtonLink.id = "aboutButtonLink";
        aboutButtonHolder.appendChild(aboutButtonLink);

    const menuButtonHolder = document.createElement('li');
    navLinks.appendChild(menuButtonHolder);
        const menuButtonLink = document.createElement('a');
        menuButtonLink.innerHTML = "Menu";
        menuButtonLink.href = "#"
        menuButtonLink.id = "menuButtonLink";
        menuButtonHolder.appendChild(menuButtonLink);

    const contactButtonHolder = document.createElement('li');
        navLinks.appendChild(contactButtonHolder);
        const contactButtonLink = document.createElement('a');
        contactButtonLink.innerText = "Contact";
        contactButtonLink.href = "#";
        contactButtonLink.id = "contactButtonLink";
        contactButtonHolder.appendChild(contactButtonLink);
        
    //append ul
    navHeader.appendChild(navLinks);

    //body container
    const contentBody = document.createElement('div');
    contentBody.id = "contentBody";
    content.appendChild(contentBody);

    const card = document.createElement('div');
    card.id = "card";
    contentBody.appendChild(card);

    const cardContent = document.createElement('div');
    cardContent.id = "cardContent";
    card.appendChild(cardContent);

    const cardImage = document.createElement('img');
    cardImage.id = "cardImage";
    card.appendChild(cardImage);

    renderAbout();

    //footer
    const footer = document.createElement('div');
    footer.id = "footer";
    footer.innerHTML = "&copy; 2021  Kelly Thompson";

    content.appendChild(footer);
}

export { renderPage };