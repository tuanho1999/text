import React from "react";
import "./index.css";
import FormatPrice from "../../products/addproducts/format";
import { useState } from "react";
import { useEffect } from "react";
import userApis from "../../../apis/user/userApis";
import { useFormik } from "formik";
import * as Yup from "yup";
import orderApis from "../../../apis/order/orderApis";
import waitingApis from "../../../apis/waitinglist/watting";
import { useNavigate } from "react-router-dom";

function OrderCard({ product }) {

  const formik = useFormik({
    initialValues: {
      orderId: Date.now(),
      images: "",
      cusname: "",
      prodname: product.name,
      quantity: "",
      price: "",
      total: "",
    },

    validationSchema: Yup.object({
      cusname: Yup.string().required("Vui lòng chọn khách hàng!"),
      quantity: Yup.string().required("Vui lòng điền số lượng!"),
    }),

    onSubmit: (values) => {
      console.log(values);
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
          const responses = await waitingApis.postWaiting(values);
          return responses.data;
        } catch (error) {}
      };
      postDataWaiting();
    },
  });

  const [customers, setCustomers] = useState([]);

  const getUserData = async () => {
    try {
      const response = await userApis.getUser();
      if (response.status == 200) {
        setCustomers(response.data);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getUserData();
  }, []);

  const countTotal = parseInt(product.price) * parseInt(formik.values.quantity);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="order-card">
        <img
          id="product-images"
          src={product.images}
          value={formik.values.images}
          onChange={formik.handleChange}
          name="images"
        />
        <br></br>
        <input
          id="cus-Id"
          type="text"
          name="prodname"
          value={formik.values.prodname}
          onChange={formik.handleChange}
        ></input>
        <br></br>
        <b
          name="price"
          value={formik.values.price}
          onChange={formik.handleChange}
        >
          <FormatPrice price={product.price} />
          <br></br>
        </b>
        <label>Tên khách hàng:</label>
        <br></br>
        <select
          id="select-cus"
          name="cusname"
          value={formik.values.cusname}
          onChange={formik.handleChange}
        >
          <option>Chọn </option>
          {customers.map((customer) => (
            <option value={customer.name}>{customer.name}</option>
          ))}
        </select>
        <br></br>
        {formik.errors.cusname && formik.touched.cusname && (
          <p id="error1">*{formik.errors.cusname}</p>
        )}
        <label id="quantity-text">Số lượng:</label>
        <br></br>
        <input
          id="select-cus"
          type="number"
          name="quantity"
          min={1}
          max={100}
          value={formik.values.quantity}
          onChange={formik.handleChange}
        />
        <br></br>
        {formik.errors.quantity && formik.touched.quantity && (
          <p id="error1">*{formik.errors.quantity}</p>
        )}
        <label id="total-text">Tổng tiền: </label>
        <br></br>
        <FormatPrice price={countTotal} />
        <br></br>
        <input
          id="cus-Id"
          type="text"
          value={formik.values.total}
          name="total"
          onChange={formik.handleChange}
          placeholder="Xác nhận lại tổng tiền"
        ></input>
        <br></br>
        <input className="btn btn-success" type="submit" value="Mua" />
        <input className="btn btn-danger" type="reset" value="Huỷ" />
      </div>
    </form>
  );
}

export default OrderCard;
