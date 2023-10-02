// import { useDispatch } from "react-redux";
// import { deleteProduct } from "../store/product/product.slices";
// import ModalInputEdit from "../components/modal.input.edit";
import { useEffect, useState } from "react";
import { APIProducts } from "../apis/APIProducts";
import { Link } from "react-router-dom";
import Header from "../components/header";

function ProductList() {
  const [state, setState] = useState();
  // const dispatch = useDispatch();

  useEffect(() => {
    APIProducts.getProducts().then(setState);
  }, []);

  return (
    <>
      <Header />
      <h3 className="text-center my-3">List Product</h3>
      <div className="container">
        {state ? (
          <table className="table table-hover table-bordered">
            <thead>
              <tr className="fs-7">
                <th scope="col">No</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Category</th>
                <th scope="col">Product Freshness</th>
                <th scope="col">Additional Description</th>
                <th scope="col">Product Image</th>
                <th scope="col">Product Price</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {state.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.productName}</td>
                  <td>{product.productCategory}</td>
                  <td>{product.productFreshness}</td>
                  <td>{product.addDescription}</td>
                  <td>
                    <img
                      className="align-item-center"
                      src={product.productImage}
                      alt="product"
                      width={80}
                      height={70}
                    />
                  </td>
                  <td>${product.productPrice}</td>
                  <td className="d-flex py-3 gap-1">
                    {/* <ModalInputEdit product={product} />
                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      dispatch(deleteProduct({ id: product.id }));
                    }}
                  >
                    Delete
                  </button> */}
                    <Link to={`/product/${product.id}`}>
                      <button className="btn btn-success">Detail</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h5 className="text-center">Loading...</h5>
        )}
      </div>
    </>
  );
}
export default ProductList;
