import React from "react";
import "./Songs.css";
import SearchREQ from "../photo/searchreq.PNG";
import SearchRes from "../photo/searchres.PNG";
import errorSearchRes from "../photo/errorSearchRes.PNG";

export default function Search() {
  return (
    <div className="container">
      <h1 className="title">Search API</h1>
      <p className="doc">
        The Search API allows you to search for songs and artists based on a
        search term.
      </p>
      <hr></hr>
      <div className="section">
        <div className="section1">
          <h1>Search</h1>
          <p>Description: Search for songs and artists.</p>
          <h2>URL: /api/v1/search</h2>
          <p>
            <b>Method</b>: POST
          </p>
          <h2>Request Body:</h2>
          <img src={SearchREQ} alt="SearchREQ" />
          <p>
            <h2>Success Response:</h2>
          </p>
          <p>Content:</p>
          <img src={SearchRes} alt="SearchRes" />
          <h2>Error Response:</h2>
          <img src={errorSearchRes} alt="errorSearchRes" />
        </div>
      </div>
    </div>
  );
}
