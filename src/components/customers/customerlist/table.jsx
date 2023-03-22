import React, { useEffect } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import userApis from "../../../apis/user/userApis";
import DataTable from "react-data-table-component";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TableCustomers(customer) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loadAPI, setLoadAPI]=useState(false);

  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCustomer, setFilteredCustomer] = useState([]);

  const deleteUser = (id) => {

    const deleteUserData = async () => {
      if (
        window.confirm("Bạn có chắc chắn muốn xoá khách hàng này không?") == true
      )
        try {
          const responses = await userApis.deleteUser(id); 
        } catch (error) {}
       
    };
    deleteUserData()
    setLoadAPI(false)
    toast.success("Xoá khách hàng thành công!")
  }
  
  const getUserData = async () => {
    try {
      const response = await userApis.getUser();
          setCustomers(response.data);
          setFilteredCustomer(response.data);
    } catch (error) {}
  };
 
  useEffect(() => {
    getUserData();
    setLoadAPI(true)
  }, [loadAPI]);


  const columns = [
    {
      name: "Họ và Tên",
      selector: (customer) => customer.name,
      sortable: true,
    },
    {
      name: "Địa chỉ",
      selector: (customer) => customer.address,
      sortable: true,
    },
    {
      name: "Ngày sinh",
      selector: (customer) => customer.birth,
      sortable: true,
    },
    {
      name: "Giới tính",
      selector: (customer) => customer.gender,
      sortable: true,
    },
    {
      name:"Email",
      selector:(customer) => customer.email,
      sortable: true,
    },

    {
      name: "SĐT",
      selector: (customer) => customer.phone,
      sortable: true,
    },
    {
      name: "Số lần mua",
      selector: (customer) => customer.buy,
      sortable: true,
    },
    {
      name: "Điểm",
      selector: (customer) => customer.point,
      sortable: true,
    },
    {
      name: "Điều Chỉnh",
      cell: (customer) => (
        <button
          className="btn btn-primary"
          onClick={(event) => handleEditClick(event, customer)}
        >
          Sửa
        </button>
      ),
    },
    {
      name: "",
      cell: (customer) => (
        <button
          className="btn btn-danger"
          onClick={() => deleteUser(customer.id)}
        >
          Xoá
        </button>
      ),
    },
  ];

  

  useEffect(() => {
    const result = customers.filter((customer) => {
      return customer.name.toLowerCase().match(search.toLowerCase());
    });
    setFilteredCustomer(result);
  }, [search]);

  const [editFormData, setEditFormData] = useState({
    name: "",
    address: "",
    birth: "",
    gender: "",
    phone: "",
    buy: "",
    point: "",
  });

  const [editCustomerId, setEditCustomerId] = useState(null);

  const handleEditClick = (event, customer) => {
    event.preventDefault();
    handleShow();
    setEditCustomerId(customer.id);

    const formValues = {
      name: customer.name,
      address: customer.address,
      birth: customer.birth,
      gender: customer.gender,
      email: customer.email,
      phone: customer.phone,
      buy: customer.buy,
      point: customer.point,
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
      name: editFormData.name,
      address: editFormData.address,
      birth: editFormData.birth,
      gender: editFormData.gender,
      email: editFormData.email,
      phone: editFormData.phone,
      buy: editFormData.buy,
      point: editFormData.point,
    };

    const newContacts = [...filteredCustomer];

    const index = filteredCustomer.findIndex(
      (customer) => customer.id === editCustomerId
    );

    newContacts[index] = editContact;
    setFilteredCustomer(newContacts);
    setEditCustomerId(null);
    setShow(false);
    toast.success("Chỉnh sửa khách hàng thành công!");
  };

  const handleCancelClick = () => {
    setShow(false);
  };

  const deleteAllUser = async () => {
    if (window.confirm("Bạn có chắc chắn muốn xoá tất cả không?") == true)
      try {
        const responses = await userApis.deleteAllUser();
        console.log(responses);
        setCustomers(responses.data);
        setFilteredCustomer(responses.data);
      } catch (error) {}
    // window.location.reload()
  };

  const handleDeleteAll = () => {
    if (window.confirm("Bạn có chắc chắn muốn xoá tất cả không?") == true) {
      setFilteredCustomer("");
      toast.success("Xoá tất cả thành công!");
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="customer-header">
        <div>
          <Link to="/admin/addcus">
            <button className="btn btn-success">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Thêm khách
              hàng mới
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
        data={filteredCustomer}
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
          <Modal.Title>Chỉnh sửa khách hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="modal">
            <label for="name">Họ và Tên: </label><br></br>
            <input
              type="text"
              name="name"
              id="btncheck"
              placeholder="Nhập tên..."
              value={editFormData.name}
              onChange={handleEditFormChange}
            />
            <br></br>
            <label for="address">Địa chỉ: </label>
            <input
              type="text"
              name="address"
              id="btncheck"
              placeholder="Nhập địa chỉ..."
              value={editFormData.address}
              onChange={handleEditFormChange}
            />
            <br></br>
            <label for="birth">Ngày Sinh: </label>
            <input
              type="date"
              name="birth"
              id="btncheck"
              placeholder="Nhập ngày sinh..."
              value={editFormData.birth}
              onChange={handleEditFormChange}
            />

            <br></br>
            <label for="gender">Giới tính: </label>
            <select
              name="gender"
              id="genderbox"
              value={editFormData.gender}
              onChange={handleEditFormChange}
            >
              <option>Chọn</option>
              <option value="Nam">Nam</option>
              <option value="Nữ">Nữ</option>
            </select>

            <br></br>
            <label for="email">Email: </label>
            <input
              type="email"
              name="email"
              id="btncheck"
              placeholder="Nhập email..."
              pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
              value={editFormData.email}
              onChange={handleEditFormChange}
            />

            <br></br>
            <label for="phone">Số điện thoại: </label>
            <input
              type="number"
              name="phone"
              id="btncheck"
              placeholder="Nhập số điện thoại..."
              pattern="(84|0[3|5|7|8|9])+([0-9]{8})\b"
              value={editFormData.phone}
              onChange={handleEditFormChange}
            />

            <br></br>
            <label for="buy">Số lần mua: </label>
            <input
              type="number"
              name="buy"
              id="btncheck"
              placeholder="Nhập số lần mua..."
              min={1}
              max={100}
              value={editFormData.buy}
              onChange={handleEditFormChange}
            />

            <br></br>
            <label for="point">Điểm: </label>
            <input
              type="text"
              name="point"
              id="btncheck"
              placeholder="Nhập số điểm..."
              min={1}
              max={2000}
              value={editFormData.point}
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

export default TableCustomers;