import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { useNavigate } from "react-router-dom";

function Orders({orderId,cusname,prodname,quantity,total,status}) {
  let navigate= useNavigate();
  const handleSwitch = () =>{
      let pathes = '/admin/editorder';
      navigate(pathes)
  }
  return (
    <div className="container-fluid">
      <div id="product-table">
        <table>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Khách hàng</th>
            <th>Đơn hàng</th>
            <th>Số lượng </th>
            <th>Tổng tiền</th>
            <th>Tình trạng</th>
            <th>Chỉnh sửa</th>
          </tr>
          <tr>
            <td>{orderId}</td>
            <td>{cusname}</td>
            <td>{prodname}</td>
            <td>{quantity}</td>
            <td>{total}</td>
            <td>
              <em id="status">{status}</em>
            </td>
            <td id="edit">
              <em class="fa fa-trash"></em>
              <em onClick={handleSwitch} class="fa fa-pencil-square"></em>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders;
