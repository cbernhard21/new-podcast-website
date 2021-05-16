import { getFooterHtml, getHeaderHtml } from './displayHtmlElements.js';
import { slideNav } from './slideNav.js';
import { getEpisodeDetails } from './getEpisodeDetails.js';

getHeaderHtml(slideNav);
getFooterHtml();

const sitePath = window.location.pathname;
if (sitePath === '/episodes.html') {
  getEpisodeDetails();
}