import axios from "api/axios";

export const postOrderAPI = async (data) => {
  return await axios({
    url: `/order`,
    method: "POST",
    data,
  });
};

export const getOrdersAPI = async () => {
  return await axios({
    url: `/orders`,
    method: "GET",
  });
};

export const getOrdersByEmailAPI = async (email) => {
  return await axios({
    url: `/orders`,
    method: "GET",
    params: { email },
  });
};

export const updateOrderStatusAPI = async (orderId, status) => {
  return await axios({
    url: `/orders/${orderId}/status`,
    method: "PUT",
    data: { status },
  });
};