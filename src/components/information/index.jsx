import React, { useEffect, useState } from "react";
import accountApis from "../../apis/account/account";
import "./index.css";

function Information(props) {

  var obj = JSON.parse(localStorage.getItem("Infor")); 

  return (
    <div id="infor-body">
      <div id="infor-title">
        <div>
          <img
            id="admin-ava"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3pIAkLnMYhGN8d5LNTjLpm9R1vehK1vSHDg&usqp=CAU"
          />
        </div>
        <div id="admin-infor">
          <i class="fa fa-id-card" aria-hidden="true"></i> <b>Họ và tên: </b>{obj.name}<br></br>
          <br></br>
          <i class="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
          <b>Ngày sinh:</b> {obj.birth} <br></br>
          <br></br>
          <i class="fa fa-envelope" aria-hidden="true"></i> <b>Email: </b>{obj.email}
          <br></br>
          <br></br>
          <i class="fa fa-phone-square" aria-hidden="true"></i>{" "}
          <b>Số điện thoại: </b> {obj.phone}<br></br>
          <br></br>
          <i class="fa fa-map-marker" aria-hidden="true"></i> <b>Địa chỉ:</b> {obj.address}<br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
}

export default Information;