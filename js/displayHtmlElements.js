'use strict'

export async function getFooterHtml() {
  const response = await fetch('./components/footer.html');
  const footerHtml = await response.text();
  document.querySelector('#footer-wrapper').innerHTML = footerHtml;
}

export async function getHeaderHtml(navSlideFunc) {
  const response = await fetch('./components/header.html');
  const headerHtml = await response.text();
  document.querySelector('#header-wrapper').innerHTML = headerHtml;
  navSlideFunc();

  const path = window.location.pathname;

  const navItems = document.querySelectorAll('.nav-item-link');
  navItems.forEach(item => {
    console.log(item)

    if (path === '/index.html' && item.innerText === 'Home') {
      item.classList.add('active');
    } else if (path === '/episodes.html' && item.innerText === 'Episodes') {
      item.classList.add('active');
    } else if (path === '/about.html' && item.innerText === 'About Us') {
      item.classList.add('active');
    } else if (path === '/contact.html' && item.innerText === 'Contact Us') {
      item.classList.add('active');
    }
  })


}