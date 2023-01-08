import React from "react";
import "./index.css";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Link, useNavigate } from "react-router-dom";

function Login(props) {
  let navigate=useNavigate();
  const formik = useFormik({
    initialValues:{
        email:'',
        password:'',
    },
    validationSchema:Yup.object({
      email:Yup.string().email('Email không đúng!').required('Vui lòng điền email!'),
      password:Yup.string().min(8, 'Yêu cầu 8 kí tự trở lên!')
      .required('Vui lòng điền password!')
    }),
    onSubmit: values => {
      let path2='/admin/dash';
      navigate(path2);
      console.log(values);
    }
  })
  const handleSwitch = () => {
    let paths = '/register';
    navigate(paths);
  }
  
  return (
    <div id="container2">
      <div id="left">
        <img
          id="login-img"
          src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
        />
      </div>
      <div id="right">
        <h1 id="login">ĐĂNG NHẬP HỆ THỐNG</h1>

        <form onSubmit={formik.handleSubmit}>
          <div class="form-group">
              <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
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
          <input type='submit' id="linked" value='Đăng Nhập'/> 
          <input onClick={handleSwitch} type='button' id="signup" value='Đăng Kí' />
        </form>
      </div>
    </div>
  );
}

export default Login;
