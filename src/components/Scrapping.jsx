import React from "react";
import "./Songs.css";

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
          <h2>URL Parameters</h2>
          {/* <img src={parmetariesReq} alt="parmetariesReq" /> */}

          <h2>Request Body:</h2>
          {/* <img src={coverREQ} alt="coverREQ" /> */}
          <p>
            <h2>Success Response:</h2>
          </p>
          {/* <img src={coverRES} alt="coverRES" /> */}
          <p>Content:</p>

          <h2>Error Response:</h2>
          {/* <img src={covererror} alt="covererror" /> */}
        </div>
      </div>
    </div>
  );
}
