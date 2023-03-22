import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./index.css";
import productApis from "../../../apis/product/productApis";
import FormatPrice from "./format";

function ProdAdd(props) {
  let Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      productId: Date.now(),
      name: "",
      quantities: "",
      images: "",
      status: "Còn hàng",
      price: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng điền tên sản phẩm!"),
      quantities: Yup.string().required("Vui lòng điền số lượng sản phẩm!"),
      images: Yup.string().required("Vui lòng chèn hình ảnh sản phẩm!"),
      status: Yup.string().required("Vui lòng điền tình trạng sản phẩm!"),
      price: Yup.string().required("Vui lòng điền giá sản phẩm!"),
      category: Yup.string().required("Vui lòng điền danh mục!"),
    }),
    onSubmit: (values) => {
      console.log(values);
      let path = "/admin/table";
      Navigate(path);
      const postDataProduct = async () => {
        try {
          const response = await productApis.postProduct(values);
          return response.data;
        } catch (error) {}
      };
      postDataProduct();
    },
  });
  const handleBack = () => {
    let path1 = "/admin/table";
    Navigate(path1);
  };

  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Thêm sản phẩm mới</b>
        </div>
        <div></div>
      </div>
      <div id="add-prod">
        <form onSubmit={formik.handleSubmit} id="form-prod">
          <label for="name-prod">Tên sản phẩm: </label>
          <input
            value={formik.values.name}
            type="text"
            placeholder="Enter product name..."
            id="cusId"
            name="name"
            onChange={formik.handleChange}
          ></input>
          <br></br>
          {formik.errors.name && formik.touched.name && (
            <p id="error1">*{formik.errors.name}</p>
          )}
          <label for="quantity">Số lượng: </label>
          <input
            value={formik.values.quantities}
            type="number"
            placeholder="Enter quantity..."
            id="cusId"
            min={1}
            max={1000}
            name="quantities"
            onChange={formik.handleChange}
          ></input>
          <br></br>
          {formik.errors.quantities && formik.touched.quantities && (
            <p id="error1">*{formik.errors.quantities}</p>
          )}
          <label for="img">Hình ảnh: </label>
          <input
            value={formik.values.images}
            type="url"
            placeholder="Enter image..."
            id="cusId"
            name="images"
            onChange={formik.handleChange}
          ></input>
          <br></br>
          {formik.errors.images && formik.touched.images && (
            <p id="error1">*{formik.errors.images}</p>
          )}
          {/* <label for="status">Tình trạng: </label> */}
          {/* <br></br> */}
          {/* <select name="status" id="selectbox" onChange={formik.handleChange} disabled> */}
            {/* <option>Chọn</option> */}
            {/* <option value="còn hàng">Còn hàng</option> */}
            {/* <option value="hết hàng">Hết hàng</option> */}
          {/* </select> */}
          {/* {formik.errors.status && formik.touched.status && (
            <p id="error1">*{formik.errors.status}</p>
          )} */}
          <br></br>
          <label for="price">Giá tiền: </label>

          <input
            value={formik.values.price}
            type="number"
            placeholder="Enter price..."
            id="cusId"
            name="price"
            onChange={formik.handleChange}
          ></input>
          <br></br>
          <FormatPrice price={formik.values.price} />
          <br></br>
          {formik.errors.price && formik.touched.price && (
            <p id="error1">*{formik.errors.price}</p>
          )}
          <label for="category">Danh mục: </label>
          <input
            value={formik.values.category}
            type="text"
            placeholder="Enter category..."
            id="cusId"
            name="category"
            onChange={formik.handleChange}
          ></input>
          <br></br>
          {formik.errors.category && formik.touched.category && (
            <p id="error1">*{formik.errors.category}</p>
          )}
          <br></br>
          <input type="submit" id="btnSave" value="Save" />
          <input
            type="button"
            onClick={handleBack}
            id="btnCancel"
            value="Cancel"
          />
        </form>
      </div>
    </div>
  );
}

export default ProdAdd;