import React, { useEffect } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import productApis from "../../../apis/product/productApis";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FormatPrice from "../addproducts/format";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TableProduct() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loadAPI, setLoadAPI]=useState(false);


  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredProduct, setFilteredProduct] = useState([]);

  const [editFormData, setEditFormData] = useState({
    productId: "",
    name: "",
    quantities: "",
    images: "",
    status: "",
    price: "",
    category: "",
  });

  const [editProductId, setEditProductId] = useState(null);

  const handleEditClick = (event, product) => {
    event.preventDefault();
    handleShow();
    setEditProductId(product.id);

    const formValues = {
      productId: product.productId,
      name: product.name,
      quantities: product.quantities,
      images: product.images,
      status: product.status,
      price: product.price,
      category: product.category,
    };
    setEditFormData(formValues);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editContact = {
      productId: editFormData.productId,
      name: editFormData.name,
      quantities: editFormData.quantities,
      images: editFormData.images,
      status: editFormData.status,
      price: editFormData.price,
      category: editFormData.category,
    };

    const newContacts = [...filteredProduct];

    const index = filteredProduct.findIndex(
      (product) => product.id === editProductId
    );

    newContacts[index] = editContact;
    setFilteredProduct(newContacts);
    setEditProductId(null);
    setShow(false);
    toast.success("Chỉnh sửa sản phẩm thành công!");
  };

  const handleCancelClick = () => {
    setShow(false);
  };


  const deleteProducts = (id) => {

    const deleteProductData = async () => {
      if (window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này không?") == true)
        try {
          const responses = await productApis.deleteProduct(id);
          if (responses.status == 200) {
            
          }
        } catch (error) {}
    };
    deleteProductData()
    setLoadAPI(false)
    toast.success("Xoá sản phẩm thành công!");
    
  }

  const handleDeleteAll = () => {
    if (window.confirm("Bạn có chắc chắn muốn xoá tất cả không?") == true) {
      setFilteredProduct("");
      toast.success("Xoá tất cả thành công!");
    }
  };

  const getProductData = async () => {
    try {
      const response = await productApis.getProduct();
      if (response.status == 200) {
        setProducts(response.data);
        setFilteredProduct(response.data);
      }
    } catch (error) {}
  };

  const columns = [
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
      name: "Số lượng",
      selector: (product) => product.quantities,
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
      name: "Tình trạng",
      selector: (product) => product.status,
      sortable: true,
    },
    {
      name: "Giá tiền",
      selector: (product) => <FormatPrice price={product.price} />,
      sortable: true,
    },
    {
      name: "Danh mục",
      selector: (product) => product.category,
      sortable: true,
    },
    {
      name: "Điều Chỉnh",
      cell: (product) => (
        <button
          className="btn btn-primary"
          onClick={(event) => handleEditClick(event, product)}
        >
          Sửa
        </button>
      ),
    },
    {
      name: "",
      cell: (product) => (
        <button
          className="btn btn-danger"
          onClick={() => deleteProducts(product.id)}
        >
          Xoá
        </button>
      ),
    },
  ];

  useEffect(() => {
    getProductData();
    setLoadAPI(true)
  }, [loadAPI]);

  useEffect(() => {
    const result1 = products.filter((product) => {
      return product.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredProduct(result1);
  }, [search]);

  return (
    <div>
      <ToastContainer />
      <div className="customer-header">
        <div>
          <Link to="/admin/addprod">
            <button className="btn btn-success">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm sản phẩm
              mới
            </button>
          </Link>
        </div>
        <div>
          <button className="btn btn-danger" onClick={handleDeleteAll}>
            <i class="fa fa-trash" aria-hidden="true"></i> Xoá tất cả
          </button>
        </div>
      </div>
      <DataTable
        columns={columns}
        data={filteredProduct}
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
      />
      ;
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Chỉnh sửa sản phẩm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="modal">
            <label for="prodId">Mã sản phẩm: </label>
            <input
              type="text"
              name="productId"
              id="btncheck"
              placeholder="Nhập mã sản phẩm..."
              value={editFormData.productId}
              onChange={handleEditFormChange}
            />
            <br></br>
            <label for="name-prod">Tên sản phẩm: </label>
            <input
              type="text"
              name="name"
              id="btncheck"
              placeholder="Nhập tên sản phẩm..."
              value={editFormData.name}
              onChange={handleEditFormChange}
            />
            <br></br>
            <label for="quantity">Số lượng: </label>
            <input
              type="number"
              name="quantities"
              id="btncheck"
              placeholder="Nhập số lượng..."
              value={editFormData.quantities}
              onChange={handleEditFormChange}
            />

            <br></br>
            <label for="img">Hình ảnh: </label>
            <input
              type="url"
              name="images"
              id="btncheck"
              placeholder="Tải ảnh sản phẩm..."
              value={editFormData.images}
              onChange={handleEditFormChange}
            />
            <br></br>
            <label for="status">Tình trạng: </label><br></br>
            <select
              name="status"
              id="selectbox"
              onChange={handleEditFormChange}
              value={editFormData.status}
            >
              <option>Chọn</option>
              <option value="Còn hàng">Còn hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
            <br></br>
            <label for="price">Giá tiền: </label>
            <input
              type="number"
              name="price"
              id="btncheck"
              placeholder="Nhập giá tiền..."
              value={editFormData.price}
              onChange={handleEditFormChange}
            />
            <br></br>
            <FormatPrice price={editFormData.price} />
            <br></br>
            <label for="category">Danh mục: </label>
            <input
              type="text"
              name="category"
              id="btncheck"
              placeholder="Nhập danh mục sản phẩm..."
              value={editFormData.category}
              onChange={handleEditFormChange}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelClick}>
            Huỷ
          </Button>
          <Button variant="primary" onClick={handleEditFormSubmit}>
            Lưu
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default TableProduct;