import { useEffect, useState } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import Header from "../components/header";

export default function ProductDetails() {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const location = useLocation();

  console.log(location);

  useEffect(() => {
    fetch(`https://651a2054340309952f0ce26a.mockapi.io/api/v1/products/${id}`)
      .then((res) => res.json())
      .then(setProduct);
  }, [id]);

  return (
    <>
      <Header />
      {product ? (
        <div className="container my-3">
          <button className="btn btn-secondary">
            <Link
              to="/list-product"
              className="text-white text-decoration-none"
            >
              back to product list
            </Link>
          </button>
          <h1>Product Details</h1>
          <h2>{product.productName}</h2>
          <h3>{product.addDescription}</h3>
          <h4>{product.productCategory}</h4>
          <p>{product.productFreshness}</p>
          <p>{product.productPrice}</p>
          <img src={product.productImage} alt={product.productName} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
