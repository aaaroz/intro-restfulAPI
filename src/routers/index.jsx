import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/landing.page";
import CreateProduct from "../pages/create.product";
import PrivateRoute from "./private.route";
import LoginPage from "../pages/login.page";
import ProductList from "../pages/product.list";
import CreateAccount from "../pages/create.account";
import LoginAccount from "../pages/login.account";
import ProductDetails from "../pages/product.detail";

export default function SetupRouters() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/create-account" element={<CreateAccount />} />
      <Route path="/login-account" element={<LoginAccount />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/create-product" index element={<CreateProduct />} />
        <Route path="/list-product" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
}
