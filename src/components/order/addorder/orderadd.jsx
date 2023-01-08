import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./index.css"
import orderApis from "../../../apis/order/orderApis";

function AddOrder(props) {
  let Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: Date.now(),
      orderId: '',
      cusname: '',
      prodname: '',
      quantity: '',
      total: '',
      status: '',
    },
    validationSchema: Yup.object({
      orderId: Yup.string().min(6, 'Mã sản phẩm phải là 6 số!')
      .max(6, 'Mã sản phẩm phải là 6 số!')
      .required('Vui lòng điền mã đơn hàng!'),
      cusname: Yup.string().min(5, 'Tên khách hàng phải ít nhất 5 kí tự!')
      .max(25, 'Tên khách hàng phải dưới 25 kí tự!')
      .required('Vui lòng điền tên khách hàng!'),
      prodname: Yup.string().required('Vui lòng điền tên sản phẩm'),
      quantity: Yup.string()
      .required('Vui lòng điền số lượng sản phẩm'),
      total: Yup.string().required('Vui lòng điền tổng tiền của khách thanh toán'),
      status: Yup.string().required('Vui lòng điền tình trạng đơn hàng'),
    }),
    onSubmit: values => {
      console.log(values);
      let path = '/admin/order';
      Navigate(path);
      const postDataOrder = async () => {
        try {
          const response = await orderApis.postOrder(values);
          return response.data;
        }catch(error) {}
      };
      postDataOrder();
    },
  })
  const handleBack = () =>{
    let path1 = '/admin/order';
      Navigate(path1);
  }
  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Thêm đơn hàng mới</b>
        </div>
        <div></div>
      </div>
      <div id="order-add">
        <form onSubmit={formik.handleSubmit}>
        <label for="orderId">Mã đơn hàng: </label>
        <input
          value={formik.values.orderId}
          type="text"
          placeholder="Enter product id..."
          id="cusId"
          name="orderId"
          onChange={formik.handleChange}
        ></input>
        <br></br>
        {formik.errors.orderId && formik.touched.orderId && (
          <p id="error">*{formik.errors.orderId}</p>
        )}
        <label for="cusname">Khách hàng: </label>
        <input
          value={formik.values.cusname}
          type="text"
          placeholder="Enter customer name..."
          id="cusId"
          name="cusname"
          onChange={formik.handleChange}

        ></input>
        <br></br>
        {formik.errors.cusname && formik.touched.cusname && (
          <p id="error">*{formik.errors.cusname}</p>
        )}
        <label for="prodname">Tên sản phẩm: </label>
        <input
          value={formik.values.prodname}
          type="text"
          placeholder="Enter product..."
          id="cusId"
          name="prodname"
          onChange={formik.handleChange}

        ></input>
        <br></br>
        {formik.errors.prodname && formik.touched.prodname && (
          <p id="error">*{formik.errors.prodname}</p>
        )}
        <label for="quantity">Số lượng: </label>
        <input
          value={formik.values.quantity}
          type="number"
          placeholder="Enter quantity..."
          id="cusId"
          name="quantity"
          onChange={formik.handleChange}

        ></input>
        <br></br>
        {formik.errors.quantity && formik.touched.quantity && (
          <p id="error">*{formik.errors.quantity}</p>
        )}
        <label for="total">Tổng tiền: </label>
        <input
          value={formik.values.total}
          type="number"
          placeholder="Enter total..."
          id="cusId"
          name="total"
          onChange={formik.handleChange}

        ></input>
        <br></br>
        {formik.errors.total && formik.touched.total && (
          <p id="error">*{formik.errors.total}</p>
        )}
        <label for="status">Tình trạng: </label>
        <input
          value={formik.values.status}
          type="text"
          placeholder="Enter status..."
          name="status"
          id="cusId"
          onChange={formik.handleChange}

        ></input>
        <br></br>
        {formik.errors.status && formik.touched.status && (
          <p id="error">*{formik.errors.status}</p>
        )}
        <br></br>
        <input type='submit' id="btnSave" value='Save'/>
        <input onClick={handleBack} type='button' id="btnCancel" value='Cancel'/>
        </form>
      </div>
    </div>
  );
}

export default AddOrder;
