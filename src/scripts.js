import headerTemplate from './components/header/header.hbs';
import footerTemplate from './components/footer/footer.hbs';
import constructionModalTemplate from './components/modal/construction-modal.hbs';
import * as MiniCart from './components/mini-cart/mini-cart';
import * as GlobalNav from './components/header/global-navigation';
import * as Modal from './components/modal/modal';

// Global templating
const headerDOM = document.querySelector('[data-template="global-header"]');
const footerDOM = document.querySelector('[data-template="footer"]');
const constructionModalDOM = document.querySelector('[data-template="construction-modal"]');
if (headerDOM) headerDOM.outerHTML = headerTemplate();
if (footerDOM) footerDOM.outerHTML = footerTemplate();
if (constructionModalDOM) constructionModalDOM.outerHTML = constructionModalTemplate();

// Global components
GlobalNav.init();
MiniCart.init();
Modal.init("construction-modal");
