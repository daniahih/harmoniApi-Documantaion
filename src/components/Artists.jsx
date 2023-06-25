import React from "react";
import "./Songs.css";
import artistBody from "./artistBode.PNG";
import Artist from "./artist.PNG";
import ErrorArtist from "./errorArtist.PNG";
import CreateArtist from "./createArtist.PNG";
import ArtistCreated from "./artistCreated.PNG";
import errorcreateArtist from "./errorartist2.PNG";
import SearchArtist from "./searchArtist.PNG";
import SearchArtistSucess from "./searchArtistSuccess.PNG";
import ErrorSearch from "./errorSearch.PNG";
export default function Songs() {
  return (
    <div className="container">
      <h1 className="title">Artists API</h1>
      <p className="doc">
        The Artists API allows you to retrieve and create Artist.
      </p>
      <hr></hr>
      <div className="section">
        <div className="section1">
          <h1>Get Artists</h1>
          <p>Description: Get a list of all artists.</p>
          <h2>URL:/api/v1/artists</h2>
          <p>
            <b>Method</b>: GET
          </p>
          <h2>Request Body:</h2>
          <img src={artistBody} alt="Song" />
          <p>
            <h2>Success Response:</h2>
          </p>
          <p>Content:</p>
          <img src={Artist} alt="Song" />
          <h2>Error Response:</h2>
          <img src={ErrorArtist} alt="ErrorGetSong" />
        </div>
        <div className="section2">
          <h1>Create an Artist</h1>
          <p>Description: Create a new artist.</p>
          <h2>URL: /api/v1/artists</h2>
          <p>
            <b>Method</b>: POST
          </p>
          <h2>Request Body:</h2>
          <img src={CreateArtist} alt="CreateArtist" />
          <p>
            <h2>Success Response:</h2>
          </p>
          <img src={ArtistCreated} alt="ArtistCreated" />
          <h2>Error Response:</h2>
          <img src={errorcreateArtist} alt="errorCreate" />
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Search Artist</h1>
        <p>Description: Search for an artist by name.</p>
        <h2>URL: /api/v1/artists/searchArtist</h2>
        <p>
          <b>Method</b>: GET
        </p>

        <h2>Request Query:</h2>
        <img src={SearchArtist} alt="SearchArtist" />
        <p>
          <h2>Success Response:</h2>
        </p>
        <img src={SearchArtistSucess} alt="Song" />
        <h2>Error Response:</h2>
        <img src={ErrorSearch} alt="errorCreate" />
      </div>
    </div>
  );
}
