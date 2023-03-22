import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function HandleChangeStatus() {
  const [newStatus, setNewStatus] = useState("Duyệt");
  const handleChange = () => {
    if (
        window.confirm("Bạn có chắc chắn muốn duyệt bình luận này không?") == true
      )
    switch (newStatus) {
      case "Duyệt": 
        setNewStatus("Đã duyệt");
        toast.success("Đã duyệt bình luận thành công!")
        break;
    }
    
  };

  return (
    <div>
        <ToastContainer/>
      <button
        type="button"
        class="btn btn-success"
        onClick={handleChange}
      >
        {newStatus}
      </button>
    </div>
  );
}

export default HandleChangeStatus;
