import React from "react";
import "./index.css";
import { useState } from "react";
import { useEffect } from "react";
import CommentCard from "./comment";
import { ToastContainer, toast } from "react-toastify";
import commentApis from "../../apis/comment/commentApis";

function Comment(props) {
  const [comments, setComments] = useState([]);

  const getCommentData = async () => {
    try {
      const response = await commentApis.getComment();
      if (response.status == 200) {
        setComments(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getCommentData();
  }, []);

  const handleDelete = (commentId) => {
    if (
      window.confirm("Bạn có chắc chắn muốn xoá bình luận này không?") == true
    ) {
      const newComment = [...comments];
      const index = comments.findIndex((comment) => comment.id === commentId);
      console.log(index);
      newComment.splice(index, 1);
      setComments(newComment);
      toast.success("Xoá bình luận thành công!");
    }
  };

  const deleteCommentData = async (id) => {
    if (
      window.confirm("Bạn có chắc chắn muốn xoá bình luận này không?") == true
    )
      try {
        const responses = await commentApis.deleteComment(id);
        if (responses.status == 200) {
          setComments(responses.data);
          window.location.reload();
        }
      } catch (error) {}
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="container-fluid">
      <ToastContainer />
      <div id="header-bar">
        <div id="task5">
          <b>Quản lý bình luận</b>
        </div>
        <div>
          <p id="demos">
            {time} {date}
          </p>
        </div>
      </div>

      <div id="comment-parents">
        {comments.map((item, index) => (
          <CommentCard
            comment={item}
            key={index}
            handleDelete={() => deleteCommentData(item.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default Comment;
