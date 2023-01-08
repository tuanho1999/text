import React from "react";
import { Link } from "react-router-dom";

function EditCustom(props) {
  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Chỉnh sửa khách hàng</b>
        </div>
        <div></div>
      </div>
      <div id="edit-body">
        <label for="name">Họ và Tên: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter name..."
          name="fullName"
          id="cusId"
        ></input>
        <br></br>
        <label for="address">Địa chỉ: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter address..."
          name="address"
          id="cusId"
        ></input>
        <br></br>
        <label for="birth">Ngày Sinh: </label>
        <input
          type="date"
          required="required"
          placeholder="Enter birth..."
          name="birth"
          id="cusId"
        ></input>
        <br></br>
        <label for="phone">Số điện thoại: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter phone..."
          id="cusId"
        ></input>
        <br></br>
        <label for="name">Giới tính: </label><br></br>
          <input type="radio" name='gender' id="gender1"/> Nam
          <input type="radio" name='gender' id="gender2"/> Nữ
        <br></br>
        <br></br>

        <Link to="" id="btnSave">
          Save
        </Link>
        <Link to="/admin/listcustom" id="btnCancel">
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default EditCustom;
