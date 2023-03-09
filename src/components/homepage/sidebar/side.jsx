import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

import "./side.css";

function Side(props) {
  return (
    <div className="sidebar">
      <nav id="nav-menu">
        <ul>
          <Link to="/admin/dash">
            <li>
              <em className="fa fa-tachometer"></em>
              BẢNG ĐIỀU KHIỂN
            </li>
          </Link>
          <Link to="/admin/listcustom">
            <li>
              <em className="fa fa-users"></em>
              KHÁCH HÀNG
            </li>
          </Link>
          <Link to="/admin/table">
            <li>
              <em className="fa fa-shopping-bag"></em>
              SẢN PHẨM
            </li>
          </Link>
          <Link to="/admin/order">
            <li>
              <em className="fa fa-list-alt"></em>
              ĐƠN HÀNG
            </li>
          </Link>
          <Link to="/admin/comment">
            <li>
              <em className="fa fa-comments"></em>
              PHẢN HỒI
            </li>
          </Link>
          <Link to="/admin/rev">
            <li>
              <em className="fa fa-usd"></em>
              DOANH THU
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Side;
