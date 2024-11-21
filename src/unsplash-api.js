import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = (searchedValue, page) => {
  const axiosOptions = {
    params: {
      query: searchedValue,
      orientation: 'landscape',
      page: page,
      per_page: 16,
      client_id: 'q-wKWV6XZCE_uKL0afgJIp2e4id1kG9qCJ1lyn3eyz8',
    },
  };

  return axios.get(`/search/photos`, axiosOptions);
};