import axios from "api/axios";

const END_POINT = {
  CATEGORIES: "categories",
  PRODUCTS: "products",
};

export const getCategoriesAPI = async () => {
  const rs = await axios({
    url: END_POINT.CATEGORIES,
    method: "GET",
  });

  return rs;
};

export const getProductsAPI = async () => {
  const rs = await axios({
    url: END_POINT.PRODUCTS,
    method: "GET",
  });

  return rs;
};