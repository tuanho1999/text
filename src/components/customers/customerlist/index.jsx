import React from "react";
import "./index.css";
import Custom from "./custom";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userApis from "../../../apis/user/userApis";

function ListCustom(customer) {
  const [customers, setCustomers] = useState([]);
  const getUserData = async () => {
    try {
      const response = await userApis.getUser();
      if (response.status == 200) {
        setCustomers(response.data);
      }
    } catch (error) {}
  };
  getUserData();
  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Danh sách khách hàng</b>
        </div>
        <div></div>
      </div>
      <div id="productlist1">
        <div id="btnProduct">
          <Link to="/admin/addcus">
            <button id="btnAdd1">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm khách
              hàng mới
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
          <form id="search">
            <label id="search-list" for="search">
              <b>Tìm Kiếm: </b>
            </label>
            <input type="search" />
          </form>
        </div>
        <div id="custom-table">
          <table>
            {customers &&
              customers.map((item, index) => (
                <Custom
                  name={item.name}
                  address={item.address}
                  birth={item.birth}
                  gender={item.gender}
                  phone={item.phone}
                  buy={item.buy}
                  point={item.point}
                />
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default ListCustom;
