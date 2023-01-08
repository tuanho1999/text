import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import userApis from "../../../apis/user/userApis";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./index.css"

function AddCustom(props) {
  let Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: Date.now(),
      name: '',
      address: '',
      birth: '',
      phone: '',
      gender: '',
      buy: '',
      point: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().min(5, 'Tên khách hàng phải ít nhất 5 kí tự!')
      .max(25, 'Tên khách hàng phải dưới 25 kí tự!')
      .required('Vui lòng điền tên của khách hàng!'),
      address: Yup.string().required('Vui lòng điền địa chỉ của khách hàng vào đây!'),
      birth: Yup.string().required('Vui lòng điền ngày sinh của khách hàng vào đây!'),
      phone: Yup.string().min(10, 'Yêu cầu 10 số!')
      .max(10, 'Yêu cầu 10 số!')
      .required('Vui lòng điền số điện thoại vào đây!'),
      gender: Yup.string().required('Vui lòng điền giới tính vào đây'),
      buy: Yup.string().required('Vui lòng điền vào đây!'),
      point: Yup.string().required('Vui lòng điền vào đây!'),
    }),
    onSubmit: values => {
      console.log(values);
      let path = '/admin/listcustom';
      Navigate(path);
      const postDataUser = async () => {
        try {
          const response = await userApis.postUser(values);
          return response.data;
        }catch(error) {}
      };
      postDataUser();
    },
  })
  const handleBack = () =>{
    let path1 = '/admin/listcustom';
      Navigate(path1);
  }

  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Thêm khách hàng mới</b>
        </div>
        <div></div>
      </div>
      <div id="add-cus">
        <form onSubmit={formik.handleSubmit}>
        <label for="name">Họ và Tên: </label>
        <input
          value={formik.values.name}
          type="text"
          placeholder="Enter name..."
          name="name"
          id="cusId"
          onChange={formik.handleChange}
        />
        <br></br>
        {formik.errors.name && formik.touched.name && (
          <p id="error">*{formik.errors.name}</p>
        )} 
        <label for="address">Địa chỉ: </label>
        <input
          value={formik.values.address}
          type="text"
          placeholder="Enter address..."
          name="address"
          id="cusId"
          onChange={formik.handleChange}

        />
        <br></br>
        {formik.errors.address && formik.touched.address && (
          <p id="error">*{formik.errors.address}</p>
        )} 
        <label for="birth">Ngày Sinh: </label>
        <input
          value={formik.values.birth}
          type="date"
          placeholder="Enter birth..."
          name="birth"
          id="cusId"
          onChange={formik.handleChange}

        />
        <br></br>
        {formik.errors.birth && formik.touched.birth && (
          <p id="error">*{formik.errors.birth}</p>
        )} 
        <label for="phone">Số điện thoại: </label>
        <input
          value={formik.values.phone}
          type="text"
          placeholder="Enter phone..."
          name="phone"
          id="cusId"
          onChange={formik.handleChange}

        />
        <br></br>
        {formik.errors.phone && formik.touched.phone && (
          <p id="error">*{formik.errors.phone}</p>
        )} 
        <label for="gender">Giới tính: </label>
        <input
          value={formik.values.gender}
          type="text"
          placeholder="Enter gender..."
          name="gender"
          id="cusId"
          onChange={formik.handleChange}

        />
        <br></br>
        {formik.errors.gender && formik.touched.gender && (
          <p id="error">*{formik.errors.gender}</p>
        )} 
        <label for='buy'>Số lần mua: </label>
        <input
          value={formik.values.buy}
          type="number"
          placeholder="Enter number of buy..."
          name="buy"
          id="cusId"
          onChange={formik.handleChange}

        />
        <br></br>
        {formik.errors.buy && formik.touched.buy && (
          <p id="error">*{formik.errors.buy}</p>
        )} 
        <label for='point'>Điểm: </label>
        <input
          value={formik.values.point}
          type="number"
          placeholder="Enter point..."
          name="point"
          id="cusId"
          onChange={formik.handleChange}
        />
        <br></br>
        {formik.errors.point && formik.touched.point && (
          <p id="error">*{formik.errors.point}</p>
        )} 
        <br></br>
        <input type='submit' id="btnSave" value='Save'/>
        <input onClick={handleBack} type='button' id="btnCancel" value='Cancel'/>
        </form>
      </div>
    </div>
  );
}

export default AddCustom;
