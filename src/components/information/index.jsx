<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import accountApis from "../../apis/account/account";
import "./index.css";

function Information(props) {

  var obj = JSON.parse(localStorage.getItem("Infor")); 

=======
import React from "react";
import "./index.css";

function Information(props) {
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
  return (
    <div id="infor-body">
      <div id="infor-title">
        <div>
          <img
            id="admin-ava"
<<<<<<< HEAD
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
=======
            src="https://scontent.xx.fbcdn.net/v/t1.15752-9/327992344_1178018739516356_520082423620408109_n.png?stp=dst-png_p228x119&_nc_cat=101&ccb=1-7&_nc_sid=aee45a&_nc_ohc=4VnT8Q885e8AX9zH9I6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQxF4mvUUUqwWY4v4n-nnMMNC2Ym9_vwK_TSOXncSvdMQ&oe=63FDB00D"
          />
        </div>
        <div id="admin-infor">
          <i class="fa fa-id-card" aria-hidden="true"></i> <b>Họ và tên: </b>Hồ
          Hữu Tuấn<br></br>
          <br></br>
          <i class="fa fa-birthday-cake" aria-hidden="true"></i>{" "}
          <b>Ngày sinh:</b> 16/08/1999<br></br>
          <br></br>
          <i class="fa fa-envelope" aria-hidden="true"></i> <b>Email: </b>
          hohuutuan1999@gmail.com<br></br>
          <br></br>
          <i class="fa fa-phone-square" aria-hidden="true"></i>{" "}
          <b>Số điện thoại: </b>0905831080<br></br>
          <br></br>
          <i class="fa fa-map-marker" aria-hidden="true"></i> <b>Địa chỉ: </b>50
          Lý Đạo Thành, An Hải Bắc, Sơn Trà, Đà Nẵng<br></br>
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
          <br></br>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Information;
=======
export default Information;
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
