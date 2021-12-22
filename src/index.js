// functions
import { renderPage } from './pageRender.js';

import { renderMenu } from './menuPage.js';
import { renderAbout } from './aboutPage.js';
import { renderContact } from './contactPage.js';

// css
import './style.css';

renderPage();

aboutButtonLink.addEventListener('click', renderAbout);
menuButtonLink.addEventListener('click', renderMenu);
contactButtonLink.addEventListener('click', renderContact);