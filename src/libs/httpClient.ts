import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'https://pantip.com',
  headers: {
    'Content-Type': 'application/json',
    Ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
  },
});

httpClient.interceptors.request.use((config) => config);

export { httpClient };
