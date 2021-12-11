'use strict';

export async function getEpisodeDetails(season) {
    const response = await fetch('./db/db.json');
    const data = await response.json();
    let seasonEpisodes = [];
    let seasonTitle = '';
    const episodeContainer = document.querySelector('#episode-container');

    if (season === 'Season 1') {
        seasonEpisodes = data.season1.episodes;
        seasonTitle = data.season1.seasonTitle;
        episodeHtml();
    }
    if (season === 'Season 2') {
        seasonEpisodes = data.season2.episodes;
        seasonTitle = data.season2.seasonTitle;
        episodeHtml();
        // comingSoon()
    }

    function episodeHtml() {
        let episodeCardHtml = '';

        let seasonEpisodesHtml = seasonEpisodes
            .map((episode) => {
                let episodeNumber = episode.number.slice(2);
                episodeCardHtml = `<article class="episode-card">
            
                          <div class="episode-card-content">
                            <h2 class="episode-card-title"><a href="episode-${episode.number}.html">${episode.title}</a></h2>
                            <h3 class="episode-card-season">Season ${episode.season} - Ep. ${episodeNumber}</h3>
                            <p class="episode-card-release">Released - ${episode.releaseDate}</p>
  
                            <p class="episode-card-summary">
                              ${episode.summary}
                            </p>
                            <a class="listen-link"href="episode-${episode.number}.html">Listen</a>
                            
                          </div>
  
                         </article>`;

                return episodeCardHtml;
            })
            .join('');

        const seasonHeading = `<div class="episode-heading-container">
                                  <h2 class="episode-season-heading">${season}</h2>
                                  <h3 class="episode-season-title">${seasonTitle}</h3>
                              </div>`;

        episodeContainer.innerHTML = seasonHeading + seasonEpisodesHtml;
    }

    function comingSoon() {
        const seasonHeading = `<div class="episode-heading-container">
                                <h2 class="episode-season-heading">${season}</h2>
                                <h3 class="episode-season-title">${seasonTitle}</h3>
                              </div>`;
        const seasonEpisodesHtml = `<p class="big">Coming Soon!</p>`;

        episodeContainer.innerHTML = seasonHeading + seasonEpisodesHtml;
    }
}