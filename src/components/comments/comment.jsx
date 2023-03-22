import React from "react";
import HandleChangeStatus from "./change";
import "./index.css";

function CommentCard({ comment, handleAccept, handleDelete }) {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <div className="container-fluid">
      <div id="first-row">
        <div id="first-comment">
          <div id="ava">
            <img id="ava-img" src={comment.ava} />
          </div>
          <div id="note">
            <h5 id="comment-user">{comment.nickname}</h5>
            <p id="rate">
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i>
              <i class="fa fa-star" aria-hidden="true"></i> {date}
            </p>
            <p>{comment.text}</p>
            <div id="image-comment">
              <img id="comment-img" src={comment.image} />
              <img id="comment-img" src={comment.image2} />
              <img id="comment-img" src={comment.image3} />
              <img id="comment-img" src={comment.image4} />
              <img id="comment-img" src={comment.image5} />
            </div>
            <div id="btnComment">
              <HandleChangeStatus />
              <button className="btn btn-danger" onClick={handleDelete}>
                Xoá
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
