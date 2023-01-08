import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import "./index.css"
import productApis from "../../../apis/product/productApis";

function ProdAdd(props) {
  let Navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      id: Date.now(),
      productId: '',
      name: '',
      quantities: '',
      images: '',
      status: '',
      price: '',
      category: '',
    },
    validationSchema: Yup.object({
      productId: Yup.string().min(8, 'Mã sản phẩm phải là 8 số!')
      .max(8, 'Mã sản phẩm phải là 8 số!')
      .required('Vui lòng điền mã sản phẩm!'),
      name: Yup.string().required('Vui lòng điền tên sản phẩm!'),
      quantities: Yup.string().required('Vui lòng điền số lượng sản phẩm'),
      images: Yup.string()
      .required('Vui lòng chèn hình ảnh sản phẩm!'),
      status: Yup.string().required('Vui lòng điền tình trạng sản phẩm'),
      price: Yup.string().required('Vui lòng điền giá sản phẩm'),
      category: Yup.string().required('Vui lòng điền danh mục!'),
    }),
    onSubmit: values => {
      console.log(values);
      let path = '/admin/table';
      Navigate(path);
      const postDataProduct = async () => {
        try {
          const response = await productApis.postProduct(values);
          return response.data;
        }catch(error) {}
      };
      postDataProduct();
    },
  })
  const handleBack = () =>{
    let path1 = '/admin/table';
      Navigate(path1);
  }
  return (
    <div className="container-fluid">
      <div id="bar-header">
        <div id="task1">
          <b>Thêm sản phẩm mới</b>
        </div>
        <div></div>
      </div>
      <div id="add-prod">
        <form onSubmit={formik.handleSubmit}>
        <label for="prodId">Mã sản phẩm: </label>
        <input
          value={formik.values.productId}
          type="text"
          placeholder="Enter name..."
          id="cusId"
          name="productId"
          onChange={formik.handleChange}
        ></input>
        <br></br>
        {formik.errors.productId && formik.touched.productId && (
          <p id="error">*{formik.errors.productId}</p>
        )}
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
          <p id="error">*{formik.errors.name}</p>
        )}
        <label for="quantity">Số lượng: </label>
        <input
          value={formik.values.quantities}
          type="number"
          placeholder="Enter quantity..."
          id="cusId"
          name="quantities"
          onChange={formik.handleChange}

        ></input>
        <br></br>
        {formik.errors.quantities && formik.touched.quantities && (
          <p id="error">*{formik.errors.quantities}</p>
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
          <p id="error">*{formik.errors.images}</p>
        )}
        <label for="status">Tình trạng: </label>
        <input
          value={formik.values.status}
          type="text"
          placeholder="Enter status..."
          id="cusId"
          name="status"
          onChange={formik.handleChange}

        ></input>
        <br></br>
        {formik.errors.status && formik.touched.status && (
          <p id="error">*{formik.errors.status}</p>
        )}
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
        {formik.errors.price && formik.touched.price && (
          <p id="error">*{formik.errors.price}</p>
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
          <p id="error">*{formik.errors.category}</p>
        )}
        <br></br>
        <input type='submit' id="btnSave" value='Save'/>
        <input type='button' onClick={handleBack} id="btnCancel" value='Cancel'/>
        </form>
      </div>
    </div>
  );
}

export default ProdAdd;
