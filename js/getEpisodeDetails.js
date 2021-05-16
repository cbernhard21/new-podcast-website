'use strict'

export async function getEpisodeDetails() {
  const response = await fetch('./db/db.json');
  const data = await response.json();

  let seasonOneEpisodes = data.season1.episodes;
  // let seasonTwoEpisodes = data.season2.episodes;

  let episodeCardHtml = '';
  const episodeContainer = document.querySelector('#episode-container');

  let seasonOneEpisodesHtml = seasonOneEpisodes.map(episode => {
    let episodeNumber = episode.number.slice(2);
    episodeCardHtml = `<article class="episode-card">
          
                        <div class="episode-card-content">
                          <h2 class="episode-card-title"><a href="episode-${episode.number}.html">${episode.title}</a></h2>
                          <h3 class="episode-card-season">Season 1 - Ep. ${episodeNumber}</h3>
                          <p class="episode-card-release">Released - ${episode.releaseDate}</p>

                          <p class="episode-card-summary">
                            ${episode.summary}
                          </p>
                          <a class="listen-link"href="episode-${episode.number}.html">Listen</a>
                          
                        </div>

                       </article>`

    return episodeCardHtml;
  }).join('')

  episodeContainer.innerHTML = seasonOneEpisodesHtml;

}