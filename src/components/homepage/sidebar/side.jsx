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
              DASHBOARD
            </li>
          </Link>
          <Link to="/admin/listcustom">
            <li>
              <em className="fa fa-users"></em>
              CUSTOMERS
            </li>
          </Link>
          <Link to="/admin/table">
            <li>
              <em className="fa fa-shopping-bag"></em>
              PRODUCTS
            </li>
          </Link>
          <Link to="/admin/order">
            <li>
              <em className="fa fa-list-alt"></em>
              ORDERS
            </li>
          </Link>
          <Link to="/admin/comment">
            <li>
              <em className="fa fa-comments"></em>
              COMMENTS
            </li>
          </Link>
          <Link to="/admin/rev">
            <li>
              <em className="fa fa-usd"></em>
              REVENUES
            </li>
          </Link>
          
        </ul>
      </nav>
    </div>
  );
}

export default Side;
