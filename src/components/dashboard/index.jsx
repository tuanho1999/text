import React, { useEffect, useState } from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { CanvasJSChart } from "canvasjs-react-charts";
import { Link } from "react-router-dom";
import orderApis from "../../apis/order/orderApis";
import userApis from "../../apis/user/userApis";
import productApis from "../../apis/product/productApis";

function DashBoard(props) {
  const option2 = {
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: "Total number of tasks completed",
    },

    axisY: {
      title: "",
      prefix: "%",
    },
    data: [
      {
        type: "spline",
        dataPoints: [
          { x: 2, y: 20 },
          { x: 8, y: 42 },
          { x: 12, y: 30 },
          { x: 16, y: 71 },
          { x: 20, y: 63 },
          { x: 24, y: 10 },
          { x: 28, y: 50 },
          { x: 32, y: 25 },
          { x: 36, y: 57 },
          { x: 40, y: 90 },
        ],
      },
    ],
  };

  const options = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "",
    },
    axisY: {
      title: "Doanh Thu (triệu VNĐ)",
      suffix: "",
    },
    data: [
      {
        type: "column",
        dataPoints: [
          { label: "Tháng 1", y: 240 },
          { label: "Tháng 2", y: 140 },
          { label: "Tháng 3", y: 202 },
          { label: "Tháng 4", y: 185 },
          { label: "Tháng 5", y: 279 },
          { label: "Tháng 6", y: 320 },
        ],
      },
    ],
  };

  const option = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "light2",
    title: {
      text: "",
    },
    axisY: {
      title: "Phần Trăm",
      suffix: "%",
    },
    axisX: {
      title: "",
      prefix: "Tháng",
      interval: 1,
    },
    data: [
      {
        type: "line",
        toolTipContent: "Tháng {x}: {y}%",
        dataPoints: [
          { x: 1, y: 66 },
          { x: 2, y: 56 },
          { x: 3, y: 62 },
          { x: 4, y: 59 },
          { x: 5, y: 67 },
          { x: 6, y: 70 },
        ],
      },
    ],
  };

  const [orders, setOrders] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/comment")
      .then((res) => res.json())
      .then((data) => setComment(data));
  }, []);

  const getProductData = async () => {
    try {
      const response = await productApis.getProduct();
      if (response.status == 200) {
        setProducts(response.data);
      }
    } catch (error) {}
  };

  const getUserData = async () => {
    try {
      const response = await userApis.getUser();
      if (response.status == 200) {
        setCustomers(response.data);
      }
    } catch (error) {}
  };

  const getOrderData = async () => {
    try {
      const response = await orderApis.getOrder();
      if (response.status == 200) {
        setOrders(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getOrderData();
    getUserData();
    getProductData();
  }, []);

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="container-fluid">
      <div id="header-bar1">
        <div id="task">
          <b>Bảng điều khiển</b>
        </div>
        <div>
          <p id="demos">
            {time} {date}
          </p>
        </div>
      </div>
      <div id="dashboard-body">
        <div id="total">
          <Link to="/admin/listcustom" id="guest-link">
            <div id="cus-total">
              <div id="icon-cus">
                <em class="fa fa-user"></em>
              </div>

              <div>
                <h1 id="guest-total">Tổng số khách hàng</h1>
                <h5 id="word-line">{customers.length} khách hàng</h5>
                <p id="line1"></p>
                <p id="descrip">Tổng số khách hàng được quản lý</p>
              </div>
            </div>
          </Link>
          <Link to="/admin/table" id="pro-link">
            <div id="pro-total">
              <div id="icon-pro">
                <em class="fa fa-shopping-basket"> </em>
              </div>
              <div>
                <h1 id="product-total">Tổng sản phẩm</h1>
                <h5 id="word-line">{products.length} sản phẩm</h5>
                <p id="line1"></p>
                <p id="descrip">Tổng số sản phẩm nhập kho</p>
              </div>
            </div>
          </Link>
        </div>
        <div id="total1">
          <Link to="/admin/order" id="order-link">
            <div id="ord-total">
              <div id="icon-ord">
                <em class="fa fa-shopping-cart"></em>
              </div>
              <div>
                <h1 id="order-total">Tổng đơn hàng</h1>
                <h5 id="word-line">{orders.length} đơn hàng</h5>
                <p id="line1"></p>
                <p id="descrip">Tổng số đơn hàng đã bán</p>
              </div>
            </div>
          </Link>
          <Link to="/admin/comment" id="sold-link">
            <div id="sold-total">
              <div id="icon-sold">
                <em class="fa fa-commenting"></em>
              </div>
              <div>
                <h1 id="soldout-total">Tổng số bình luận</h1>
                <h5 id="word-line">{comment.length} bình luận</h5>
                <p id="line1"></p>
                <p id="descrip">Tổng số lượt bình luận</p>
              </div>
            </div>
          </Link>
        </div>
        <div id="task-report">
          <CanvasJSChart options={option2} />
        </div>
        <div id="content">
          <div id="revenue-report">
            <h1 id="title-head">Bảng doanh thu sau 6 tháng đầu năm 2022</h1>
            <p id="line2"></p>
            <CanvasJSChart options={options} />
          </div>
          <div id="data-report">
            <h1 id="title-head">Số người truy cập website 6 tháng đầu </h1>
            <p id="line2"></p>
            <CanvasJSChart options={option} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
