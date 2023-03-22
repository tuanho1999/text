import React from "react";
import "./admin.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Side from "./components/homepage/sidebar/side";
import Head from "./components/homepage/header/head";
import ListCustom from "./components/customers/customerlist";
import DashBoard from "./components/dashboard";
import Order from "./components/order/ordertable";
import Rev from "./components/revenues/listrevenue";
import Comment from "./components/comments";
import AddCustom from "./components/customers/addcustomer/addcustom";
import ProdAdd from "./components/products/addproducts/prodadd";
import AddOrder from "./components/order/addorder/orderadd";
import ProductReport from "./components/products/listproduct";
import ChangePassword from "./components/changePassword";
import Information from "./components/information";

const Admin = (props) => {
  return (
    <div className="App">
      <div className="head-app">
        <Head />
      </div>
      <div className="body-app">
        <div className="side-app">
          <Side />
        </div>
        <div id="app-context">
          <Routes>
            <Route path="/dash" element={<DashBoard />} />
            <Route path="/table" element={<ProductReport />} />
            <Route path="/listcustom" element={<ListCustom />} />
            <Route path="/order" element={<Order />} />
            <Route path="/rev" element={<Rev />} />
            <Route path="/comment" element={<Comment />} />
            <Route path="/addcus" element={<AddCustom />} />
            <Route path="/addprod" element={<ProdAdd />} />
            <Route path="/addorder" element={<AddOrder />} />
            <Route path="/changePassword" element={<ChangePassword />} />
            <Route path="/information" element={<Information />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

Admin.propTypes = {};

export default Admin;
