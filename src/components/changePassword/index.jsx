import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import "./index.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ChangePassword(props) {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      newPassword:"",
      confirmNewPassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Email không đúng!")
        .required("Vui lòng điền email!"),
      password: Yup.string()
        .min(8, "Yêu cầu 8 kí tự trở lên!")
        .required("Vui lòng điền mật khẩu!"),
        newPassword: Yup.string()
        .oneOf([Yup.ref("password"),"Mật khẩu mới không được trùng mật khẩu cũ!"])
        .min(8, "Yêu cầu 8 kí tự trở lên!")
        .required("Vui lòng điền mật khẩu mới!"),
        confirmNewPassword: Yup.string()
        .oneOf([Yup.ref("newPassword")], "Mật khẩu không khớp!")
        .required("Vui lòng xác nhận mật khẩu!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      toast.success("Đổi mật khẩu thành công!")
    },
  });
  const handleSwitch = () => {
    let paths = "/admin/dash";
    navigate(paths);
  };

  return (
    <div id="container3">
      <ToastContainer/>
      <div id="left">
        <img
          id="login-img"
          src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
        />
      </div>
      <div id="right">
        <h1 id="login">ĐỔI MẬT KHẨU</h1>

        <form onSubmit={formik.handleSubmit}>
          <div class="form-group">
            <i class="fa fa-user-circle" aria-hidden="true"></i>{" "}
            <input
              id="emails"
              placeholder="Nhập E-mail..."
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
              placeholder="Nhập mật khẩu cũ..."
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
              placeholder="Nhập mật khẩu mới..."
              name="newPassword"
              type="password"
              value={formik.values.newPassword}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.newPassword && formik.touched.newPassword && (
            <p id="error">*{formik.errors.newPassword}</p>
          )}
          <div class="form-group">
            <i class="fa fa-key" aria-hidden="true"></i>{" "}
            <input
              id="passwords"
              placeholder="Xác nhận mật khẩu mới..."
              name="confirmNewPassword"
              type="password"
              value={formik.values.confirmNewPassword}
              onChange={formik.handleChange}
            />
          </div>
          {formik.errors.confirmNewPassword && formik.touched.confirmNewPassword && (
            <p id="error">*{formik.errors.confirmNewPassword}</p>
          )}
          <input type="submit" id="linked" value="Đổi mật khẩu" />
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

export default ChangePassword;
