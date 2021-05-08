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
}