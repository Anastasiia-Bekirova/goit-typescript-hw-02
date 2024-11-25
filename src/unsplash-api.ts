import axios from 'axios';
import {FetchImagesResponse} from './components/App/App.types'

axios.defaults.baseURL = 'https://api.unsplash.com';

export const fetchImages = async (searchedValue: string, page: number): Promise<FetchImagesResponse> => {
  const axiosOptions = {
    params: {
      query: searchedValue,
      orientation: 'landscape',
      page: page,
      per_page: 16,
      client_id: 'q-wKWV6XZCE_uKL0afgJIp2e4id1kG9qCJ1lyn3eyz8',
    },
  };

  const { data } = await axios.get<FetchImagesResponse>(`/search/photos`, axiosOptions);
  return data;
};