import React from "react";
import { Link } from "react-router-dom";
import "./index.css"

function EditProd(props) {
  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Chỉnh sửa sản phẩm</b>
        </div>
        <div></div>
      </div>
      <div id="edit-body">
        <label for="prodId">Mã sản phẩm: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter name..."
          id="cusId"
        ></input>
        <br></br>
        <label for="name-prod">Tên sản phẩm: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter product name..."
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
        <label for="img">Hình ảnh: </label>
        <input
          type="url"
          required="required"
          placeholder="Enter image..."
          id="cusId"
        ></input>
        <br></br>
        <label for="status">Tình trạng: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter status..."
          id="cusId"
        ></input>
        <br></br>
        <label for="price">Giá tiền: </label>
        <input
          type="number"
          required="required"
          placeholder="Enter price..."
          id="cusId"
        ></input>
        <br></br>
        <label for="category">Danh mục: </label>
        <input
          type="text"
          required="required"
          placeholder="Enter category..."
          id="cusId"
        ></input>
        <br></br>
        <br></br>

        <Link to="" id="btnSave">
          Save
        </Link>
        <Link to="/admin/table" id="btnCancel">
          Cancel
        </Link>
      </div>
    </div>
  );
}

export default EditProd;
