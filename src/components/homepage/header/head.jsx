import React from "react";
import "./head.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import waitingApis from "../../../apis/waitinglist/watting";
import { useEffect } from "react";

function Head(props) {
  let navigate = useNavigate();
  const [waitings, setWaitings] = useState([]);

  const getWaitingData = async () => {
    try {
      const response = await waitingApis.getWaiting();
      if (response.status == 200) {
        setWaitings(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getWaitingData();
  }, []);

  const deleteWaiting = async (id) => {
    try {
      const responses = await waitingApis.deleteWaiting(id);
      setWaitings(responses.data);
    } catch (error) {}
    let path = "/admin/order";
    navigate(path);
    window.location.reload();
  };

  return (
    <div className="navbar">
      <b id="noti-number">{waitings.length}</b>
      <div id="logo">
        <h1 id="brand">
          <em id="kid">KIDs</em>SHOP
        </h1>
      </div>
      <div id="nav-list">
        <ul>
          <li>
            <div class="dropdown">
              <i class="fa fa-bell" aria-hidden="true"></i>
              <div class="dropdown-content">
                {waitings.map((waiting) => (
                  <a href="#" onClick={() => deleteWaiting(waiting.id)}>
                    <i class="fa fa-circle" aria-hidden="true"></i>{" "}
                    {waiting.cusname} đã đặt {waiting.quantity} đơn hàng
                  </a>
                ))}
              </div>
            </div>
          </li>
          <li>
            <b id="admin-name">Hồ Hữu Tuấn</b>
          </li>
          <li>
            <div class="dropdown">
              <img
                id="logo-img"
                src="C:\Users\hohuu\OneDrive\Desktop\105898585_2748361218783040_2142583222949156089_n.jpg"
              />
              <div class="dropdown-contents">
                <Link to="/admin/information">
                  <a href="#">Thông tin cá nhân</a>
                </Link>
                <Link to="/admin/changePassword">
                  <a href="#">Đổi mật khẩu</a>
                </Link>
                <Link to="/login">
                  <a href="#">Đăng xuất</a>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Head;
