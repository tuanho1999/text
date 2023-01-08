import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Custom({name, address, birth, gender, phone, buy, point}) {
  let navigate= useNavigate();
  const handleSwitch = () =>{
      let pathes = '/admin/editcus';
      navigate(pathes)
  }
  return (
    <div className="container-fluid">
      <div id="custom-table">
        <table>
          <tr id="cus-table">
            <th>Họ và tên</th>
            <th>Địa chỉ</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>SĐT</th>
            <th>Số lần mua</th>
            <th>Điểm</th>
            <th>Chỉnh sửa</th>
          </tr>
          <tr>
            <td>{name}</td>
            <td>{address}</td>
            <td>{birth}</td>
            <td>{gender}</td>
            <td>{phone}</td>
            <td>{buy}</td>
            <td>{point}</td>
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

export default Custom;
