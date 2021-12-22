import MyLogo from './logo.png';
import AboutSoup from './soup1.jpg';
import { renderMenu } from './menuPage.js';
import { renderAbout } from './aboutPage.js';
import { renderContact } from './contactPage.js';

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
        aboutButtonHolder.appendChild(aboutButtonLink);

        aboutButtonLink.addEventListener('click', renderAbout);

    const menuButtonHolder = document.createElement('li');
        navLinks.appendChild(menuButtonHolder);
        const menuButtonLink = document.createElement('div');
        menuButtonLink.innerText = "Menu";
        menuButtonHolder.appendChild(menuButtonLink);
        
        menuButtonLink.addEventListener('click', renderMenu);

    const contactButtonHolder = document.createElement('li');
        navLinks.appendChild(contactButtonHolder);
        const contactButtonLink = document.createElement('a');
        contactButtonLink.innerText = "Contact";
        contactButtonHolder.appendChild(contactButtonLink);

        contactButtonLink.addEventListener('click', renderContact);
        
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