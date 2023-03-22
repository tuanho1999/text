import React from "react";
import "./index.css";
import TableCustomers from "./table";


function ListCustom(customer) {
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
      <div id="bar-header2">
        <div id="task1">
          <b>Danh sách khách hàng</b>
        </div>
        <div>
          <p id="demoss">
            {time} {date}
          </p>
        </div>
      </div>
      <div id="productlist1">
        <div id="custom-table">
          <TableCustomers />
        </div>
      </div>
    </div>
  );
}
<<<<<<< HEAD
export default ListCustom;
=======
export default ListCustom;
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
