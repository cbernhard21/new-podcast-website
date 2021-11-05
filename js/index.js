import { getFooterHtml, getHeaderHtml } from './displayHtmlElements.js';
import { slideNav } from './slideNav.js';
import { getEpisodeDetails } from './getEpisodeDetails.js';

getHeaderHtml(slideNav);
getFooterHtml();

const sitePath = window.location.pathname;
if (sitePath === '/episodes.html') {




    //when the episode page first loads run this season
    getEpisodeDetails('Season 1');

    //get info from the clicked tab and display the correct season's episodes

    const seasonTab = document.querySelectorAll('.season-tab');

    seasonTab.forEach(tab => {

        tab.addEventListener('click', (e) => {
            seasonTab.forEach(item => {
                item.classList.remove('active');
            })
            let seasonNumber = e.target.innerText;
            getEpisodeDetails(seasonNumber)
            tab.classList.add('active');

        })
    })


}