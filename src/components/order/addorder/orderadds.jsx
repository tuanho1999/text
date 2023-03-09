import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";
import orderApis from "../../../apis/order/orderApis";
import waitingApis from "../../../apis/waitinglist/watting";
import { useState } from "react";
import productApis from "../../../apis/product/productApis";
import { useEffect } from "react";
import FormatPrice from "../../products/addproducts/format";
import userApis from "../../../apis/user/userApis";

function AddOrder(props) {
  const [customers, setCustomers] = useState([]);
  const [products, setProducts] = useState([]);

  const getUserData = async () => {
    try {
      const response = await userApis.getUser();
      if (response.status == 200) {
        setCustomers(response.data);
      }
    } catch (error) {}
  };

  const getProductData = async () => {
    try {
      const response = await productApis.getProduct();
      if (response.status == 200) {
        setProducts(response.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getProductData();
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  let Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      orderId: Date.now(),
      cusname: "",
      prodname: "",
      quantity: "",
      total: "",
    },
    validationSchema: Yup.object({
      cusname: Yup.string().required("Vui lòng điền tên khách hàng!"),
      prodname: Yup.string().required("Vui lòng điền tên sản phẩm"),
      quantity: Yup.string()
        .required("Vui lòng điền số lượng sản phẩm"),
      total: Yup.string().required(
        "Vui lòng điền tổng tiền của khách thanh toán"
      ),
    }),
    onSubmit: (values) => {
      console.log(values);
      let path = "/admin/dash";
      Navigate(path);
      window.location.reload();
      const postDataOrder = async () => {
        try {
          const response = await orderApis.postOrder(values);
          return response.data;
        } catch (error) {}
      };
      postDataOrder();
      const postDataWaiting = async () => {
        try {
          const response = await waitingApis.postWaiting(values);
          return response.data;
        } catch (error) {}
      };
      postDataWaiting();
    },
  });
  const handleBack = () => {
    let path1 = "/admin/order";
    Navigate(path1);
  };
 
 

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
          <label for="cusname">Khách hàng: </label>
          <br></br>
          <select name="cusname" id="selectbox" onChange={formik.handleChange}>
            <option>Chọn</option>
            {customers.map((customer) => (
              <option value={customer.name}>{customer.name}</option>
            ))}
          </select>
          <br></br>
          {formik.errors.cusname && formik.touched.cusname && (
            <p id="errors">*{formik.errors.cusname}</p>
          )}
          <div id="order-form">
            <div>

          <label for="prodname">Tên sản phẩm: </label>
          <select typeof="file" name="prodname" id="selectbox" onChange={formik.handleChange}>
          
            <option>Chọn</option>
            {products.map((product) => (
              <option value={product.name}>{product.name}</option>
            ))}
            
          </select>
          <br></br>
          {formik.errors.prodname && formik.touched.prodname && (
            <p id="errors">*{formik.errors.prodname}</p>
          )}
            </div>
            <div>

          <label for="quantity">Số lượng: </label>
          <input
            value={formik.values.quantity}
            type="number"
            placeholder="Nhập số lượng..."
            id="cusId"
            min={1}
            max={1000}
            name="quantity"
            onChange={formik.handleChange}
          ></input>
          <br></br>
          {formik.errors.quantity && formik.touched.quantity && (
            <p id="errors">*{formik.errors.quantity}</p>
          )}
            </div>
          </div>
          <label for="total">Tổng tiền: </label><br></br>
          <input
            value={formik.values.total}
            type="number"
            id="cusId"
            name="total"
            onChange={formik.handleChange}
          ></input>
          <br></br>
          <FormatPrice price={formik.values.total} />
          <br></br>
          {formik.errors.total && formik.touched.total && (
            <p id="errors">*{formik.errors.total}</p>
          )}
          <input type="submit" id="btnSave" value="Save" />
          <input
            onClick={handleBack}
            type="button"
            id="btnCancel"
            value="Cancel"
          />
        </form>
      </div>
    </div>
  );
}

export default AddOrder;
