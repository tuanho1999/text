import React from "react";

function WaitingTable({ waiting }) {
  return (
    <div class="dropdown-content">
      <a href="#">
        {waiting.cusname} đã đặt {waiting.quantity} đơn hàng
      </a>
    </div>
  );
}

export default WaitingTable;