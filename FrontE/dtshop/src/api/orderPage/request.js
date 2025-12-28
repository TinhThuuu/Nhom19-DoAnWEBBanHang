import axios from "api/axios";
import { ReactSession } from 'react-client-session';
import { SESSION_KEYS } from 'utils/constant';

export const postOrderAPI = async (data) => {
  const user = ReactSession.get(SESSION_KEYS.USER);
  const headers = {};
  if (user && user.access_token) {
    headers['Authorization'] = `Bearer ${user.access_token}`;
  }

  return await axios({
    url: `/order`,
    method: "POST",
    data,
    headers,
  });
};

export const getOrdersAPI = async () => {
  const user = ReactSession.get(SESSION_KEYS.USER);
  const headers = {};
  if (user && user.access_token) {
    headers['Authorization'] = `Bearer ${user.access_token}`;
  }

  return await axios({
    url: `/orders`,
    method: "GET",
    headers,
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