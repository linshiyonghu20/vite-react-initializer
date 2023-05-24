import axios from 'axios';

const BASE_URL = '/api';

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 定义接口超时
});

instance.defaults.headers.post['Content-Type'] =
  'application/json;charset=utf-8';

instance.interceptors.response.use(
  (response) => {
    // 业务状态码不为0时，抛出异常
    if (response.data?.code !== 0) {
      const errMsg = response.data?.msg || '服务器错误，请稍后重试';
      return Promise.reject(errMsg);
    }
    return Promise.resolve(response.data?.data);
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
