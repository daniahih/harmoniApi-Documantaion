import React from "react";
import "./Songs.css";
import lyricsREQ from "../photo/lyricsREQ.PNG";
import lyricsError from "../photo/lyricsError.PNG";
export default function CoverArt() {
  return (
    <div className="container">
      <h1 className="title">Lyrics API</h1>
      <p className="doc">
        The Lyrics API allows you to fetch song lyrics based on a search term.
      </p>
      <hr></hr>
      <h1 className="old-version">OLD VERSION WE DON'T USE IT ANYMORE</h1>
      <div className="section">
        <div className="section1">
          <h1>Fetch Lyrics</h1>
          <p>
            Retrieves the lyrics of a song based on the provided search term.
          </p>
          <h2>URL: /api/v1/lyrics/:searchTerm</h2>
          <p>
            <b>Method</b>: GET
          </p>

          <p>
            <h2>Success Response:</h2>
          </p>
          <img src={lyricsREQ} alt="lyricsREQ" />
          <p>Content:</p>

          <h2>Error Response:</h2>
          <img src={lyricsError} alt="lyricsError" />
        </div>
      </div>
    </div>
  );
}
