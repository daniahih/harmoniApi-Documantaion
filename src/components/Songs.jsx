import React from "react";
import "./Songs.css";
import getSong from "./getSong.png";
import ErrorGetSong from "./errorgetSong.PNG";
import CreateSong from "./createSong.PNG";
import Song from "./Song.PNG";
import errorCreate from "./errorCreate.PNG";
import UpdateSong from "./updateSong.PNG";
export default function Songs() {
  return (
    <div className="container">
      <h1 className="title">Songs API</h1>
      <p className="doc">
        The Songs API allows you to retrieve and create songs.
      </p>
      <hr></hr>
      <div className="section">
        <div className="section1">
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
        <div className="section2">
          <h1>Create Song</h1>
          <p>Create a new song.</p>
          <h2>URL: /api/v1/songs</h2>
          <p>
            <b>Method</b>: POST
          </p>
          <h3>Parameters:</h3>
          <p>
            <b>name</b> (required): The name of the song.
          </p>
          <p>
            <b>artist </b> (required): The name of the artist.
          </p>
          <p>
            <b>coverArt</b> (required): The cover art of the song.
          </p>
          <h2>Request Body:</h2>
          <img src={CreateSong} alt="CreateSong" />
          <p>
            <h2>Success Response:</h2>
          </p>
          <img src={Song} alt="Song" />
          <h2>Error Response:</h2>
          <img src={errorCreate} alt="errorCreate" />
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Get Full Song Data</h1>
        <p>Retrieve full data for a song.</p>
        <h2>URL: /api/v1/songs</h2>
        <p>
          <b>Method</b>: PUT
        </p>
        <p>Parameters: None</p>

        <h2>Request Body:</h2>
        <img src={UpdateSong} alt="UpdateSong" />
        <p>
          <h2>Success Response:</h2>
        </p>
        <img src={Song} alt="Song" />
        <h2>Error Response:</h2>
        <img src={errorCreate} alt="errorCreate" />
      </div>
    </div>
  );
}
