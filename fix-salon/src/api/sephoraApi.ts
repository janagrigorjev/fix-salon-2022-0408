import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://sephora.p.rapidapi.com/us/products/v2/list',
  params: {
    pageSize: '60',
    currentPage: '1',
    categoryId: 'cat1080037',
  },
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
    'x-rapidapi-host': 'sephora.p.rapidapi.com',
  },
};

export const getSephoraProducts = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
