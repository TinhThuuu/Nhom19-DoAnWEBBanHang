import axios from "api/axios";

const END_POINT = {
  PRODUCTS: "products",
};

export const getProductsAPI = async (params) => {
  const rs = await axios({
    url: `${END_POINT.PRODUCTS}`,
    method: "GET",
    params,
  });

  return rs;
};
