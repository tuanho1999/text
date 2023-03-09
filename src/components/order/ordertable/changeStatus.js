import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";


function ChangeStatus({ order }) {
  const [newStatus, setNewStatus] = useState(order);

  const handleChangeStatus = () => {
    if (
      window.confirm("Bạn có chắc chắn muốn xác nhận đơn hàng này?") == true
    )
    switch (newStatus) {
      case "Đang giao": {
        setNewStatus("Đã giao");
        toast.success("Đơn hàng đã giao!")
        break;
      }
    }
   
  };

  return (
    <div>
      <ToastContainer/>
      <button
        type="button"
        data-toggle="tooltip"
        data-placement="right"
        title="Chuyển đổi trạng thái"
        class="btn btn-info btn-sm"
        onClick={handleChangeStatus}>
        {newStatus}
      </button>
    </div>
  );
}

export default ChangeStatus;
