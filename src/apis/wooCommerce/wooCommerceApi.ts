import axios from 'axios';

const wooCommerceApi = axios.create({
  baseURL: 'https://drclauders.com.ua/wp-json/wc/v3',
});

wooCommerceApi.interceptors.request.use(c => {
  const config = { ...c };

  if (!config.params) {
    config.params = {};
  }

  config.params.consumer_key = 'ck_f79f48dd81c0d3088733a248d0ceba79c3609221';
  config.params.consumer_secret = 'cs_25a91c2630b58ec77e113eb6177d31ced4d87ef2';
  return config;
});

export default wooCommerceApi;
