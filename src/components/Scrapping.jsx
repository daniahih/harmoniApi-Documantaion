import React from "react";
import "./Songs.css";
import ScrapTopSong from "../photo/ScrapTopSong.PNG";
import scrapHebrow from "../photo/scrapHebrow.PNG";
import googleScrap from "../photo/googleScrap.PNG";
import ScrapLyrics from "../photo/ScrapLyrics.PNG";
export default function CoverArt() {
  return (
    <div className="container">
      <h1 className="title">Scrapping API </h1>

      <hr></hr>
      <h1 className="old-version">OLD VERSION WE DON'T USE IT ANYMORE</h1>
      <div className="section">
        <div className="section1">
          <h1>Fetch Lyrics</h1>
          <p>
            Retrieves the lyrics of a song based on the provided search term.
          </p>
          <h2>URL: /api/v1/scrap</h2>
          <p>
            <b>Method</b>: GET
          </p>
          <h2>Endpoints</h2>
          <h3> /topArabicSongs</h3>
          <img src={ScrapTopSong} alt="ScrapTopSong" />

          <h2>Scrape Top Hebrew Songs</h2>
          <h2>Endpoints</h2>
          <h3> /topHebrewSongs</h3>
          <img src={scrapHebrow} alt="scrapHebrow" />
          <h2>Scrape Top Arabic Songs Lyrics</h2>
          <h2>Endpoints</h2>
          <h3> POST /topArabicSongsLyrics</h3>
          <img src={ScrapLyrics} alt="ScrapLyrics" />
          <h2>Scrape Google Lyrics</h2>
          <h2>Endpoints</h2>
          <h3> POST /googleLyrics</h3>
          <img src={googleScrap} alt="googleScrap" />
        </div>
      </div>
    </div>
  );
}
