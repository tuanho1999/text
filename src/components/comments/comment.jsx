import React from "react";
import "./index.css";

function CommentCard(ava, nickname, text) {
  return (
    <div className="container-fluid">
      <div id="first-row">
        <div id="first-comment">
          <div id="ava">
            <img id="ava-img" src={ava} />
          </div>
          <div id="note">
            <h5>{nickname}</h5>
            <p id="rate">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i> 10 Dec 2022
            </p>
            <p>{text}</p>
            <button id="comment-status">New</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
