import ContactSoup from './soup3.jpg';
import { renderStamp } from './renderStamp.js';

function renderContact() {
    cardContent.innerHTML = "";

    const contactUsHeader = document.createElement('h2');
    contactUsHeader.classList.add("cardHeader");
    contactUsHeader.id = "contactUsHeader";
    contactUsHeader.innerText = "Contact Us";
    cardContent.appendChild(contactUsHeader);

    const locationHeader = document.createElement('h3');
    locationHeader.id = "locationHeader";
    locationHeader.innerText = "Location"
    cardContent.appendChild(locationHeader);

    const locationText = document.createElement('div');
    locationText.id = "locationText";
    locationText.classList.add("locationText");
    locationText.innerHTML = "<p>Located at 123a - 456 st<br>Tundratown, Alberta</p>"
    cardContent.appendChild(locationText);

    const hoursHeader = document.createElement('h3');
    hoursHeader.id = "hoursHeader";
    hoursHeader.innerText = "Hours";
    cardContent.appendChild(hoursHeader);

    const hoursText = document.createElement('div');
    hoursText.id = "hoursText";
    hoursText.classList.add("cardText");
    hoursText.innerHTML = 
    "Monday to Friday: 10:00 - 20:00<br>Saturday: 12:00 - 18:00<br>Sunday: Closed"
    cardContent.appendChild(hoursText);

    const contactHeader = document.createElement('h3');
    contactHeader.id = "contactHeader";
    contactHeader.innerText = "Contact Us";
    cardContent.appendChild(contactHeader);

    const contactText = document.createElement('div');
    contactText.id = "contactText";
    contactText.innerHTML = "<p>780-999-9999<br>contact@souppdjour.net</p>"
    cardContent.appendChild(contactText);

    renderStamp();

    cardImage.src = ContactSoup;
}   

export { renderContact };