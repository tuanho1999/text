import React from "react";
import "./index.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import accountApis from "../../apis/account/account";
import { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";

function Register(props) {
  const [compare,setCompare] = useState([])

  const getAccountData = async () => {
    try {
      const response = await accountApis.getAccount();
      if (response.status == 200) {
        setCompare(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getAccountData();
  }, []);

  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
<<<<<<< HEAD
      fullname:"",
      birth: "",
      phone: "",
      address: "",
=======
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
<<<<<<< HEAD
      fullname: Yup.string()
      .required("Vui lòng điền tên!"),
      birth: Yup.string()
      .required("Vui lòng điền chọn ngày sinh!"),
      phone: Yup.string()
      .min(10, "Yêu cầu 10 số!")
      .max(10, " Yêu cầu 10 số!")
      .required("Vui lòng điền số điện thoại!"),
      address: Yup.string()
      .required("Vui lòng điền địa chỉ!"),
=======
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
      email: Yup.string()
        .email("Email không đúng!")
        .required("Vui lòng điền email!"),
      password: Yup.string()
        .min(8, "Yêu cầu 8 kí tự trở lên!")
        .required("Vui lòng điền password!"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Mật khẩu không khớp!")
        .required("Vui lòng xác nhận mật khẩu!"),
    }),
    onSubmit: (values) => {
      let path2 = "/login";
      navigate(path2);
      console.log(values);
      const postDataAccount = async () => {
        try {
          const response = await accountApis.postAccount(values);
          
          return response.data;
         
        }catch(error) {}
      };
      postDataAccount();

      const findUser = compare.find((value)=>{return value.email === values.email})

      if(findUser.email === values.email){
        toast.error("Tài khoản đã tồn tại!")
      }else{
        
      }
     
    },
  });
  const handleSwitch = () => {
    let paths = "/login";
    navigate(paths);
  };

  return (
    <div id="container2">
      <div id="left">
        <img
          id="login-img"
          src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
        />
      </div>
      <div id="right">
        <h1 id="login">ĐĂNG KÝ HỆ THỐNG</h1>

        <form onSubmit={formik.handleSubmit}>
        <div class="form-group">
            <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
            <input
              id="emails"
              placeholder="Enter Fullname..."
              name="fullname"
              type="text"
              value={formik.values.fullname}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.fullname && formik.touched.fullname && (
            <p id="error">*{formik.errors.fullname}</p>
          )}
          <div class="form-group">
            <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
<<<<<<< HEAD
            <input
              id="emails"
              placeholder="Enter birthday..."
              name="birth"
              type="date"
              value={formik.values.birth}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.birth && formik.touched.birth && (
            <p id="error">*{formik.errors.birth}</p>
          )}
          <div class="form-group">
          <i class="fa fa-phone" aria-hidden="true"></i>
            <input
              id="emails"
              placeholder="Enter phone number..."
              name="phone"
              type="number"
              value={formik.values.phone}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.phone && formik.touched.phone && (
            <p id="error">*{formik.errors.phone}</p>
          )}
          <div class="form-group">
          <i class="fa fa-home" aria-hidden="true"></i>
            <input
              id="emails"
              placeholder="Enter address..."
              name="address"
              type="text"
              value={formik.values.address}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.address && formik.touched.address && (
            <p id="error">*{formik.errors.address}</p>
          )}
          <div class="form-group">
          <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
=======
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
            <input
              id="emails"
              placeholder="Enter E-mail..."
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.email && formik.touched.email && (
            <p id="error">*{formik.errors.email}</p>
          )}
          <div class="form-group">
            <i class="fa fa-key" aria-hidden="true"></i>{" "}
            <input
              id="passwords"
              placeholder="Enter Password..."
              name="password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.password && formik.touched.password && (
            <p id="error">*{formik.errors.password}</p>
          )}
          <div class="form-group">
            <i class="fa fa-key" aria-hidden="true"></i>{" "}
            <input
              id="passwords"
              placeholder="Confirm Password..."
              name="confirmPassword"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.confirmPassword && formik.touched.confirmPassword && (
            <p id="error">*{formik.errors.confirmPassword}</p>
          )}
          <input type="submit" id="linked" value="Đăng Kí" />
          <input
            onClick={handleSwitch}
            type="button"
            id="signup1"
            value="Trở Lại"
          />
        </form>
      </div>
    </div>
  );
}

export default Register;