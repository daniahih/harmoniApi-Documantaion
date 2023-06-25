import React from "react";
import "./Songs.css";
import getSong from "./getSong.png";
import ErrorGetSong from "./errorgetSong.PNG";

export default function Songs() {
  return (
    <div className="container">
      <h1>Songs API</h1>
      <p>The Songs API allows you to retrieve and create songs.</p>
      <h1>Get Songs</h1>
      <p>Retrieve a list of songs.</p>
      <h2>URL: /api/v1/songs</h2>
      <p>
        <b>Method</b>: GET
      </p>
      <p>Parameters: None</p>
      <p>
        <h2>Success Response:</h2>
      </p>
      <p>Content:</p>
      <img src={getSong} alt="Song" />
      <h2>Error Response:</h2>
      <img src={ErrorGetSong} alt="ErrorGetSong" />
    </div>
  );
}
