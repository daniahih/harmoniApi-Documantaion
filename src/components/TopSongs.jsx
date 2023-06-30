import React from "react";
import "./Songs.css";
import topsongReq from "../photo/topsongReq.PNG";
import topSongRes from "../photo/topSongRes.PNG";
import errorSearchRes from "../photo/errorSearchRes.PNG";

export default function TopSongs() {
  return (
    <div className="container">
      <h1 className="title">Top Songs API</h1>
      <p className="doc">
        This API provides an endpoint to retrieve top songs data
      </p>
      <hr></hr>
      <div className="section">
        <div className="section1">
          <h1>Get Top Songs</h1>
          <p>Description:Retrieve the top songs in Arabic and Hebrew.</p>
          <h2>URL: /api/v1/topSongs</h2>
          <p>
            <b>Method</b>: GET
          </p>
          <h2>Request Body:</h2>
          <img src={topsongReq} alt="topsongReq" />
          <p>
            <h2>Success Response:</h2>
          </p>
          <p>Content:</p>
          <img src={topSongRes} alt="topSongRes" />
          <h2>Error Response:</h2>
          <img src={errorSearchRes} alt="errorSearchRes" />
        </div>
      </div>
    </div>
  );
}
