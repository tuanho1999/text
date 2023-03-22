import React from "react";
import "./index.css";
import { useState } from "react";
import productApis from "../../../apis/product/productApis";
import { useEffect } from "react";
import FormatPrice from "../addproducts/format";
import TableProduct from "./table";
import DataTable from "react-data-table-component";
import Table from "react-bootstrap/Table";

function ProductReport(props) {
  const [products, setProducts] = useState([]);
  const getProductData = async () => {
    try {
      const response = await productApis.getProduct();
      if (response.status == 200) {
        setProducts(response.data);
      }
    } catch (error) {}
  };

  const columnes = [
    {
      name: "Mã sản phẩm",
      selector: (product) => product.productId,
      sortable: true,
    },
    {
      name: "Tên sản phẩm",
      selector: (product) => product.name,
      sortable: true,
    },
    {
      name: "Giá tiền",
      selector: (product) => <FormatPrice price={product.price} />,
      sortable: true,
    },
    {
      name: "Hình ảnh",
      selector: (product) => (
        <img width={70} height={70} src={product.images} />
      ),
      sortable: true,
    },
    {
      name: "Danh mục",
      selector: (product) => product.category,
      sortable: true,
    },
  ];

  useEffect(() => {
    getProductData();
  }, []);

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
      <div id="header">
        <div id="task3">
          <b>Danh sách sản phẩm</b>
        </div>
        <div>
          <p id="demoss">
            {time} {date}
          </p>
        </div>
      </div>
      <div id="productlist">
        <div id="product-table">
          <TableProduct />
        </div>
      </div>
      {/* <div id="prod-table">
        <h1 id="title-report">SẢN PHẨM BÁN CHẠY</h1>
        <p id="line2"></p>
        <div id="prod-table1">
          <DataTable
            columns={columnes}
            data={products}
            pagination
            paginationRowsPerPageOptions={[5, 10, 20, 30, 40, 50]}  
            fixedHeaderScrollHeight="500px"
            selectableRowsHighlight
            highlightOnHover
          ></DataTable>
        </div>
      </div> */}
      <div id="out-table">
        <h1 id="title-report">SẢN PHẨM ĐÃ HẾT</h1>
        <p id="line2"></p>
        <div id="out-table2">
          <Table striped bordered hover>
            <tr>
              <th id="head-table">Mã đơn hàng</th>
              <th id="head-table">Tên sản phẩm</th>
              <th id="head-table">Ảnh</th>
              <th id="head-table">Số lượng </th>
              <th id="head-table">Tình trạng </th>
              <th id="head-table">Giá tiền </th>
              <th id="head-table">Danh mục </th>
            </tr>
            <tr>
              <td>264728</td>
              <td>Lego robot car (red)</td>
              <td>
                <img
                  id="rem-car"
                  src="https://shopdochoitreem.net/wp-content/uploads/2022/04/anh-bia-do-choi-cho-be-o-to-dieu-khien-tu-xa-cho-tre-em-bien-hinh-robot-otbh-do-choi-mo-hinh-cho-be-trai-thong-minh-giai-tri-5.jpg"
                />
              </td>
              <td>0</td>
              <td>
                <p id="sold-out">Hết hàng</p>
              </td>
              <td>500.000 đ</td>
              <td>Đồ chơi trẻ em</td>
            </tr>
          </Table>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default ProductReport;
=======
export default ProductReport;
>>>>>>> 99f3d04eb607c8d901442d3bddaec127550888fe
