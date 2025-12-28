import axios from 'api/axios';
import { ReactSession } from 'react-client-session';
import { SESSION_KEYS } from 'utils/constant';

export const postSyncCartAPI = async (cart) => {
  const user = ReactSession.get(SESSION_KEYS.USER);
  const headers = {};
  if (user && user.access_token) {
    headers['Authorization'] = `Bearer ${user.access_token}`;
  }

  return await axios({
    url: `/cart/sync`,
    method: 'POST',
    data: { cart },
    headers,
  });
};
