import React from "react";


import "./head.css";

function Head(props) {
  return (
    <div className="navbar">
      <div id="logo">
        <h1>
          <em id="kid">KIDs</em>SHOP
        </h1>
      </div>
      <div id="nav-list">
        <ul>
          <li >
            <img id="logo-img" src="data:image/jpeg;base64,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"/>
          </li>
          <li>
            <b>Hồ Hữu Tuấn</b>
          </li>
          <li>
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Head;
