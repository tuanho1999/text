import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import orderApis from "../../../apis/order/orderApis";
import { useEffect } from "react";
import FormatPrice from "../../products/addproducts/format";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ChangeStatus from "./changeStatus";
import productApis from "../../../apis/product/productApis";

function Order() {
  const [orders, setOrders] = useState([]);
  const [products,setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredOrder, setFilteredOrder] = useState([]);
  const [loadAPI, setLoadAPI]=useState(false);

  const getOrderData = async () => {
    try {
      const response = await orderApis.getOrder();
      if (response.status == 200) {
        setOrders(response.data);
        setFilteredOrder(response.data);
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

  const column = [
    {
      name: "Mã đơn hàng",
      selector: (order) => order.orderId,
      sortable: true,
    },
    {
      name: "Khách hàng",
      selector: (order) => order.cusname,
      sortable: true,
    },
    {
      name: "Tên sản phẩm",
      selector: (order) => order.prodname,
      sortable: true,
    },
    {
      name: "Số lượng",
      selector: (order) => order.quantity,
      sortable: true,
    },
    {
      name: "Tổng tiền",
      selector: (order) => <FormatPrice price={order.total} />,
      sortable: true,
    },
    {
      name: "Tình trạng",
      selector: (order) => <ChangeStatus order={"Đang giao"} />,
      sortable: true,
    },

    {
      name: "Điều Chỉnh",
      cell: (order) => (
        <button
          className="btn btn-danger"
          onClick={() => deleteOrders(order.id)}
        >
          Xoá
        </button>
      ),
    },
  ];

  const columns = [
    {
      name: "Mã đơn hàng",
      selector: (order) => order.orderId,
      sortable: true,
    },
    {
      name: "Khách hàng",
      selector: (order) => order.cusname,
      sortable: true,
    },
    {
      name: "Tên sản phẩm",
      selector: (order) => order.prodname,
      sortable: true,
    },
    {
      name: "Số lượng",
      selector: (order) => order.quantity,
      sortable: true,
    },
    {
      name: "Tổng tiền",
      selector: (order) => <FormatPrice price={order.total} />,
      sortable: true,
    },
  ];

  useEffect(() => {
    getOrderData();
    setLoadAPI(true)
  }, [loadAPI]);

  useEffect(() => {
    const result = orders.filter((order) => {
      return order.cusname.toLowerCase().match(search.toLowerCase());
    });
    setFilteredOrder(result);
  }, [search]);

  const deleteOrders = (id) => {

    const deleteOrderData = async () => {
      if (
        window.confirm("Bạn có chắc chắn muốn xoá đơn hàng này không?") == true
      )
      try {
        const responses = await orderApis.deleteOrder(id);
        toast.success("Xoá đơn hàng thành công!")
      } catch (error) {}
    };
    deleteOrderData()
    setLoadAPI(false)
    
  }

  const handleDeleteAll = () => {
    if (window.confirm("Bạn có chắc chắn muốn xoá tất cả không?") == true) {
      setFilteredOrder("");
      toast.success("Xoá tất cả đơn hàng thành công!");
    }
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  const time = current.toLocaleTimeString("vi-VN", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="container-fluid">
      <ToastContainer />
      <div id="header-bar2">
        <div id="task2">
          <b>Danh sách đơn hàng</b>
        </div>
        <div>
          <p id="demoss">
            {time} {date}
          </p>
        </div>
      </div>
      <div id="productlist">
        <div id="btnProducts">
          <Link to="/admin/addorder">
            <button className="btn btn-success">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm đơn hàng
              mới
            </button>
          </Link>
          <button className="btn btn-danger" onClick={handleDeleteAll}>
            <em class="fa fa-trash"></em> Xoá tất cả
          </button>
        </div>
        <div id="product-table">
          <DataTable
            columns={column}
            data={filteredOrder}
            pagination
            paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            fixedHeader
            fixedHeaderScrollHeight="500px"
            selectableRowsHighlight
            highlightOnHover
            subHeader
            subHeaderComponent={
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="w-25 form-control"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            }
          ></DataTable>
        </div>
      </div>
      <div id="prod-table3">
        <h1 id="title-report">TỔNG ĐƠN HÀNG</h1>
        <p id="line2"></p>
        <div id="prod-table2">
          <DataTable
            columns={columns}
            data={orders}
            pagination
            paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}
            fixedHeader
            fixedHeaderScrollHeight="500px"
            selectableRowsHighlight
            highlightOnHover
          ></DataTable>
        </div>
      </div>
    </div>
  );
}

export default Order;
