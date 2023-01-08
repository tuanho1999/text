import React from "react";
import "./index.css";
import CommentCard from "./comment";

function Comment(props) {
  // const [comment, setComment] = useState([]);
  //   useEffect(()=> {fetch("http://localhost:8000/comment").then((res)=> res.json())
  //   .then((data) => setComment(data))},
  //   [])
  return (
    <div className="container-fluid">
      <div id="header-bar">
        <div id="task5">
          <b>Quản lý bình luận</b>
        </div>
        <div></div>
      </div>

      <div id="comment-parents">
        {/* {comment.map((item, index) => (
                <CommentCard ava={item.ava} nickname={item.nickname} text={item.text} />
            ))
            } */}
        <div id="first-row">
          <div id="first-comment">
            <div id="ava">
              <img
                id="ava-img"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div id="note">
              <h5>Hiền Nhi</h5>
              <p id="rate">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i> 10 Dec 2022
              </p>
              <p>
                Đồ chơi rất đẹp phù hợp với giá tiền, giao hàng nhanh và nguyên
                vẹn
              </p>
              <button id="comment-status">New</button>
            </div>
          </div>
          <div id="first-comment">
            <div id="ava">
              <img
                id="ava-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveLaxnbN6a8moLPkVQZCngzS4q6KvThhw3w&usqp=CAU"
              />
            </div>
            <div id="note">
              <h5>Quốc Anh</h5>
              <p id="rate">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i> 12 Dec 2022
              </p>
              <p>
                Đồ chơi rất đẹp phù hợp với giá tiền, giao hàng nhanh và nguyên
                vẹn, sẽ ủng hộ cho shop vào lần sau
              </p>
              <button id="comment-status">New</button>
            </div>
          </div>
        </div>
        <div id="first-row">
          <div id="first-comment">
            <div id="ava">
              <img
                id="ava-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSveLaxnbN6a8moLPkVQZCngzS4q6KvThhw3w&usqp=CAU"
              />
            </div>
            <div id="note">
              <h5>Đình Bảo</h5>
              <p id="rate">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i> 16 Dec 2022
              </p>
              <p>
                Đồ chơi rất đẹp phù hợp với giá tiền, giao hàng nhanh và nguyên
                vẹn, sẽ ủng hộ cho shop vào lần sau
              </p>
              <button id="comment-status">Pending</button>
            </div>
          </div>
          <div id="first-comment">
            <div id="ava">
              <img
                id="ava-img"
                src="data:image/jpeg;base64,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"
              />
            </div>
            <div id="note">
              <h5>Hữu Tuấn</h5>
              <p id="rate">
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i>
                <i class="fa fa-star" aria-hidden="true"></i> 20 Dec 2022
              </p>
              <p>
                Đồ chơi rất đẹp phù hợp với giá tiền, giao hàng nhanh và nguyên
                vẹn
              </p>
              <button id="comment-status">New</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
