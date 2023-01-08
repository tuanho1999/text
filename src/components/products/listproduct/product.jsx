import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { useNavigate } from "react-router-dom";

function TableProduct({productId, name,quantities, images,status, price, category}) {
  let navigate= useNavigate();
  const handleSwitch = () =>{
      let pathes = '/admin/editprod';
      navigate(pathes)
  }
  return (
    <div className="container-fluid">
      <div id="product-table">
        <table>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Số lượng</th>
            <th>Hình ảnh</th>
            <th>Tình trạng</th>
            <th>Giá tiền</th>
            <th>Danh mục</th>
            <th>Chỉnh sửa</th>
          </tr>
          <tr>
            <td>{productId}</td>
            <td>{name}</td>
            <td>{quantities}</td>
            <td>
              <img id="product-image" src={images} />
            </td>
            <td>
              <em id="status">{status}</em>
            </td>
            <td>{price}</td>
            <td>{category}</td>
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

export default TableProduct;
