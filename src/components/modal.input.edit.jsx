import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { changeProduct } from "../store/product/product.slices";

function ModalInputEdit({ product }) {
  const dispatch = useDispatch();

  const [isShow, setIsShow] = useState(false);
  const handleClose = () => setIsShow(false);
  const handleShow = () => setIsShow(true);

  return (
    <>
      <button className="btn btn-success" onClick={handleShow}>
        Edit
      </button>

      <Modal
        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form id="formUpdate">
            <div className="mb-3 px-5">
              <label htmlFor="productName">Product Name</label>
              <input
                type="text"
                id="productName"
                name="productName"
                className="form-control"
                value={product.productName}
                onChange={(e) => {
                  dispatch(
                    changeProduct({
                      id: product.id,
                      productName: e.target.value,
                    })
                  );
                }}
                required
              />
            </div>
            <div className="mb-3 px-5">
              <label htmlFor="selectCategory">Product Category</label>
              <select
                name="productCategory"
                id="selectCategory"
                className="form-select"
                value={product.productCategory}
                onChange={(e) => {
                  dispatch(
                    changeProduct({
                      id: product.id,
                      productCategory: e.target.value,
                    })
                  );
                }}
                required
              >
                <option value="">Choose one category</option>
                <option value="hoodie">Hoodie</option>
                <option value="t-shirt">T-Shirt</option>
                <option value="jeans">Jeans</option>
              </select>
            </div>
            <div className="mb-3 px-5">
              <label htmlFor="inputFile">Image of Product</label>
              <input
                type="file"
                className="form-control"
                id="inputFile"
                name="productImage"
                accept="image/png, image/jpg, image/jpeg"
                onChange={(e) => {
                  dispatch(
                    changeProduct({
                      id: product.id,
                      productImage: URL.createObjectURL(e.target.files[0]),
                    })
                  );
                }}
                required
              />
            </div>
            <div className="px-5">
              <label>Product Freshness</label>
            </div>
            <div className="form-check ms-4 px-5">
              <input
                id="brandNew"
                type="radio"
                name="productFreshness"
                className="form-check-input"
                value="brand new"
                checked={product.productFreshness === "brand new"}
                onChange={(e) => {
                  dispatch(
                    changeProduct({
                      id: product.id,
                      productFreshness: e.target.value,
                    })
                  );
                }}
                required
              />
              <label htmlFor="brandNew" className="form-check-label">
                Brand New
              </label>
            </div>
            <div className="form-check ms-4 px-5">
              <input
                id="secondHand"
                type="radio"
                name="productFreshness"
                className="form-check-input"
                value="second hand"
                checked={product.productFreshness === "second hand"}
                onChange={(e) => {
                  dispatch(
                    changeProduct({
                      id: product.id,
                      productFreshness: e.target.value,
                    })
                  );
                }}
                required
              />
              <label htmlFor="secondHand" className="form-check-label">
                Second Hand
              </label>
            </div>
            <div className="form-check mb-3 ms-4 px-5">
              <input
                id="refurbished"
                type="radio"
                name="productFreshness"
                className="form-check-input"
                value="refurbished"
                checked={product.productFreshness === "refurbished"}
                onChange={(e) => {
                  dispatch(
                    changeProduct({
                      id: product.id,
                      productFreshness: e.target.value,
                    })
                  );
                }}
                required
              />
              <label htmlFor="refurbished" className="form-check-label">
                Refurbished
              </label>
            </div>
            <div className="form-floating mb-3 ms-5 pe-5">
              <textarea
                id="additionalDescription"
                name="addDescription"
                className="form-control"
                placeholder="add your description"
                value={product.addDescription}
                onChange={(e) => {
                  dispatch(
                    changeProduct({
                      id: product.id,
                      addDescription: e.target.value,
                    })
                  );
                }}
                required
              ></textarea>
              <label htmlFor="additionalDescription">
                Additional Description
              </label>
            </div>
            <div className="ps-5">
              <label htmlFor="price">Product Price</label>
            </div>
            <div className="input-group mb-3 px-5">
              <span className="input-group-text">$</span>
              <input
                id="price"
                type="number"
                name="productPrice"
                className="form-control"
                value={product.productPrice}
                onChange={(e) => {
                  dispatch(
                    changeProduct({
                      id: product.id,
                      productPrice: e.target.value,
                    })
                  );
                }}
                required
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" form="formUpdate" onClick={handleClose}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalInputEdit;
