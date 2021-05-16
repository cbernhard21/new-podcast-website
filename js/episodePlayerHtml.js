'use strict'

const path = window.location.pathname;

async function getEpisodeDetails(path) {
  const response = await fetch('db/db.json');
  const data = await response.json();
  let seasonOneEpisodes = data.season1.episodes;

  seasonOneEpisodes.forEach(item => {

    let episodeNumber = item.number.slice(2);
    let newPath = path.slice(9, 12)

    if (item.number === newPath) {
      console.log(`this is episode ${episodeNumber} page`)

      let timeStampsList = item.timeStamps.map(timeStamp => {
        let li = `<li>${timeStamp}</li>`
        return li;
      }).join('')

      episodePageHtml(item, episodeNumber, timeStampsList);

    }

  })

}
getEpisodeDetails(path);

function episodePageHtml(item, epNum, list) {
  let pageHtml = '';

  pageHtml = `
              <div class="show-title-group">
                <h1>${item.title}</h1>
                <h2>Season ${item.season} Ep. ${epNum} </h2>
                <p>Released ${item.releaseDate}</p>
              </div>
                <figure>${item.webPlayer}</figure>
              <div class="row">
                <article class="summary">
                  <h2 class="subtitle">Episode Summary</h2>
                  <p>${item.summary}</p>
                </article>
                <article class="time-stamps">
                  <h2 class="subtitle">Time Stamps</h2>
                  <ul>${list}</ul>
                </article>             
              </div>
            `

  const sectionContainer = document.querySelector('#episode-container');

  sectionContainer.innerHTML = pageHtml;


}