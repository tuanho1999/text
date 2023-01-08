import React from "react";
import PropTypes from "prop-types";
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import Orders from "./order";
import orderApis from "../../../apis/order/orderApis";

function Order(props) {
  const [orders, setOrders] = useState([]);
  const getOrderData = async () =>{
    try{
      const response = await orderApis.getOrder();
      if(response.status == 200){
        setOrders(response.data);
      }
    }catch(error) {}
};
getOrderData();
  return (
    <div className="container-fluid">
      <div id="header-bar2">
        <div id="task2">
          <b>Danh sách đơn hàng</b>
        </div>
        <div></div>
      </div>
      <div id="productlist">
        <div id="btnProduct">
          <Link to="/admin/addorder">      
          <button id="btnAdd1">
            <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm đơn hàng
            mới
          </button>
          </Link>
          <button id="btnDelete1">
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
          <form id="search1">
            <label id="search-list" for="search">
              <b>Tìm Kiếm: </b>
            </label>
            <input type="search" />
          </form>
        </div>
        <div id="product-table">
          <table>
          {orders&&orders.map((item, index) => (
                <Orders orderId={item.orderId} cusname={item.cusname} prodname={item.prodname} quantity={item.quantity} 
                total={item.total} status={item.status} />
            ))
            }
          </table>
        </div>
      </div>
      <div id="prod-table1">
        <h1>TỔNG ĐƠN HÀNG</h1>
        <p id="line2"></p>
        <div id="prod-table2">
          <table>
            <tr>
              <th>Mã đơn hàng</th>
              <th>Khách hàng</th>
              <th>Đơn hàng</th>
              <th>Số lượng </th>
              <th>Tổng tiền </th>
            </tr>
            <tr>
              <td>HT1608</td>
              <td>Nguyễn Thị Hiền Nhi</td>
              <td>Lego robot car</td>
              <td>2</td>
              <td>1.800.000 đ</td>
            </tr>

            <tr>
              <td>TN2307</td>
              <td>Nguyễn Quốc Anh</td>
              <td>Feeding frogs</td>
              <td>11</td>
              <td>4.500.000 đ</td>
            </tr>

            <tr>
              <td>
                <b>Tổng cộng</b>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td>6.300.000 đ</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
