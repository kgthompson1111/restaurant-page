import MyLogo from './logo.png';

function renderStamp() {
    const cardContentFooterLogo = document.createElement('img');
    cardContentFooterLogo.id = "footerLogo";
    cardContentFooterLogo.src = MyLogo;
    cardContent.appendChild(cardContentFooterLogo);
}

export  { renderStamp }