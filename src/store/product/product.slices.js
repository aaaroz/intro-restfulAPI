import { createSlice } from "@reduxjs/toolkit";
import hoodie from "../../assets/sample-hoodie.png";

const initialState = [
  {
    id: 0,
    productName: "Nikke 1",
    productCategory: "hoodie",
    productFreshness: "brand new",
    addDescription: "this is a hoodie",
    productPrice: 18,
    productImage: `${hoodie}`,
  },
];

const productSlices = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const {
        id,
        productName,
        productCategory,
        productFreshness,
        addDescription,
        productPrice,
        productImage,
      } = payload;
      const newProduct = {
        id,
        productName,
        productCategory,
        productFreshness,
        addDescription,
        productPrice,
        productImage,
      };
      state.push(newProduct);
    },

    changeProduct: (state, { payload }) => {
      const {
        id,
        productName,
        productCategory,
        productFreshness,
        addDescription,
        productPrice,
        productImage,
      } = payload;

      if (productName || productName === "") {
        state.map((product) => {
          if (product.id === id) {
            product.productName = productName;
          }
          return product;
        });
      }

      if (productCategory || productCategory === "") {
        state.map((product) => {
          if (product.id === id) {
            product.productCategory = productCategory;
          }
          return product;
        });
      }

      if (productFreshness || productFreshness === "") {
        state.map((product) => {
          if (product.id === id) {
            product.productFreshness = productFreshness;
          }
          return product;
        });
      }

      if (addDescription || addDescription === "") {
        state.map((product) => {
          if (product.id === id) {
            product.addDescription = addDescription;
          }
          return product;
        });
      }

      if (productPrice || productPrice === "") {
        state.map((product) => {
          if (product.id === id) {
            product.productPrice = productPrice;
          }
          return product;
        });
      }

      if (productImage || productImage === "") {
        state.map((product) => {
          if (product.id === id) {
            product.productImage = productImage;
          }
          return product;
        });
      }
    },

    deleteProduct: (state, { payload }) => {
      const { id } = payload;
      const filteredProduct = state.filter((product) => product.id !== id);
      return filteredProduct;
    },
  },
});

export const selectProducts = (state) => state.products;

export const { addProduct, changeProduct, deleteProduct } =
  productSlices.actions;
export default productSlices.reducer;
