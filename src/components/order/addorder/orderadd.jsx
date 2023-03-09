import React from "react";
import "./index.css";
import { useState } from "react";
import productApis from "../../../apis/product/productApis";
import { useEffect } from "react";
import userApis from "../../../apis/user/userApis";
import OrderCard from "./orderCard";

function AddOrders(props) {
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

  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Thêm đơn hàng mới</b>
        </div>
        <div></div>
      </div>
      <div className="card-prod">
        {products.map((product) => (
          <OrderCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default AddOrders;
