import React from "react";
import "./Songs.css";

import translate_request from "../photo/translate_request.png";
import TranslateBody from "../photo/TranslateBody.PNG";
export default function Translation() {
  return (
    <div className="container">
      <h1 className="title">Translation API</h1>
      <p className="doc">
        <h4>Translate Lyrics by Request</h4>
        The Translate Lyrics API allows you to translate song lyrics from one
        language to another.
      </p>
      <hr></hr>
      <div className="section">
        <div className="section1">
          <h2>URL: /api/v1/translate</h2>
          <p>
            <b>Method</b>: POST
          </p>
          <h2>Request Body:</h2>
          <img src={TranslateBody} alt="Song" />
          <p>
            <h2>Success Response:</h2>
          </p>
          <p>Content:</p>
          <img src={translate_request} alt="translate_request" width="800px" />
        </div>
      </div>
      <hr></hr>
    </div>
  );
}
