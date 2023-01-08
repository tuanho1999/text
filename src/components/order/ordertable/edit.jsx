import React from "react";
import { Link } from "react-router-dom";

function EditOrder(props) {
  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Chỉnh sửa đơn hàng</b>
        </div>
        <div></div>
      </div>
      <div id="edit-body">
        <label for="name">Mã đơn hàng: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter product id..."
          id="cusId"
        ></input>
        <br></br>
        <label for="name">Khách hàng: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter customer name..."
          id="cusId"
        ></input>
        <br></br>
        <label for="prod-name">Tên sản phẩm: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter product..."
          id="cusId"
        ></input>
        <br></br>
        <label for="quantity">Số lượng: </label>
        <input
          type="number"
          required="required"
          placeholder="Enter quantity..."
          id="cusId"
        ></input>
        <br></br>
        <label for="status">Tình trạng: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter status..."
          name="fullName"
          id="cusId"
        ></input>
        <br></br>
        <br></br>

        <Link to="" id="btnSave">
          Save
        </Link>
        <Link to="/admin/order" id="btnCancel">
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default EditOrder;
