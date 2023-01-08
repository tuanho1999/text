import React from "react";
import PropTypes from "prop-types";
import TableProduct from "./product";
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import productApis from "../../../apis/product/productApis";

function Table(props) {
  const [product, setProduct] = useState([]);
  const getProductData = async () => {
    try {
      const response = await productApis.getProduct();
      if (response.status == 200) {
        setProduct(response.data);
      }
    } catch (error) {}
  };
  getProductData();
  return (
    <div className="container-fluid">
      <div id="header">
        <div id="task3">
          <b>Danh sách sản phẩm</b>
        </div>
        <div></div>
      </div>
      <div id="productlist">
        <div id="btnProduct">
          <Link to="/admin/addprod">
            <button id="btnAdd">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm sản phẩm
              mới
            </button>
          </Link>
          <button id="btnDelete">
            <em class="fa fa-trash"></em> Xoá tất cả
          </button>
        </div>
        <div id="display-parents">
          <p id="display">
            Hiện
            <select id="list-option">
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>40</option>
              <option>50</option>
              <option>60</option>
              <option>70</option>
              <option>80</option>
              <option>90</option>
              <option>100</option>
            </select>
            danh mục
          </p>

          <form id="search">
            <label id="search-list" for="search">
              <b>Tìm Kiếm: </b>
            </label>
            <input type="search" />
          </form>
        </div>
        <div id="product-table">
          <table>
            {product &&
              product.map((item, index) => (
                <TableProduct
                  productId={item.productId}
                  name={item.name}
                  quantities={item.quantities}
                  status={item.status}
                  price={item.price}
                  images={item.images}
                  category={item.category}
                />
              ))}
          </table>
        </div>
      </div>
      <div id="prod-table">
        <h1>SẢN PHẨM BÁN CHẠY</h1>
        <p id="line2"></p>
        <div id="prod-table1">
          <table>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Tên sản phẩm</th>
              <th>Giá tiền</th>
              <th>Danh mục </th>
            </tr>
            <tr>
              <td>24564365</td>
              <td>Lego robot car</td>
              <td>900,000 đ</td>
              <td>Lego</td>
            </tr>

            <tr>
              <td>53463743</td>
              <td>Feeding frogs</td>
              <td>400,000 đ</td>
              <td>Đồ chơi trẻ em </td>
            </tr>
          </table>
        </div>
      </div>
      <div id="out-table">
        <h1>SẢN PHẨM ĐÃ HẾT</h1>
        <p id="line2"></p>
        <div id="out-table2">
          <table>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Tên sản phẩm</th>
              <th>Ảnh</th>
              <th>Số lượng </th>
              <th>Tình trạng </th>
              <th>Giá tiền </th>
              <th>Danh mục </th>
            </tr>
            <tr>
              <td>264728</td>
              <td>Lego robot car</td>
              <td>
                <img
                  id="rem-car"
                  src="https://shopdochoitreem.net/wp-content/uploads/2022/04/anh-bia-do-choi-cho-be-o-to-dieu-khien-tu-xa-cho-tre-em-bien-hinh-robot-otbh-do-choi-mo-hinh-cho-be-trai-thong-minh-giai-tri-5.jpg"
                />
              </td>
              <td>0</td>
              <td>
                <p id="sold-out">Hết hàng</p>
              </td>
              <td>340.000 đ</td>
              <td>Đồ chơi trẻ em</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Table;
