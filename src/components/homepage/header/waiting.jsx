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

<<<<<<< HEAD
export default WaitingTable;
=======
export default WaitingTable;
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
