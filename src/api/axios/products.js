import { API as axios } from "./axios";

export const getProductsReq = () => axios.get("/products/getProducts");
export const getFilteredProductsReq = (type, subtype) =>
  axios.get(`/products/getFilteredProducts?type=${type}&subtype=${subtype}`);
export const createProductReq = (productData) =>
  axios.post("/products/createProduct", productData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
export const deleteProductReq = (productId) =>
  axios.delete(`/products/deleteProducts/${productId}`);
