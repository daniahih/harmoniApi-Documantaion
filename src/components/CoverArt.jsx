import React from "react";
import "./Songs.css";
import parmetariesReq from "../photo/parmetariesReq.PNG";
import coverREQ from "../photo/coverREQ.PNG";
import coverRES from "../photo/coverRES.PNG";
import covererror from "../photo/covererror.PNG";

export default function CoverArt() {
  return (
    <div className="container">
      <h1 className="title">Cover Art API</h1>
      <p className="doc">
        The Cover Art API allows you to retrieve cover art for a song based on
        the song name and artist name.
      </p>
      <hr></hr>
      <div className="section">
        <div className="section1">
          <h1>Get Cover Art</h1>
          <p>Description: Get the cover art for a song.</p>
          <h2>URL: /api/v1/cover/:songName/:artistName</h2>
          <p>
            <b>Method</b>: GET
          </p>
          <h2>URL Parameters</h2>
          <img src={parmetariesReq} alt="parmetariesReq" />

          <h2>Request Body:</h2>
          <img src={coverREQ} alt="coverREQ" />
          <p>
            <h2>Success Response:</h2>
          </p>
          <img src={coverRES} alt="coverRES" />
          <p>Content:</p>

          <h2>Error Response:</h2>
          <img src={covererror} alt="covererror" />
        </div>
      </div>
    </div>
  );
}
