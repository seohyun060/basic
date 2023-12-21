import axios, { AxiosRequestHeaders, CancelTokenSource } from 'axios';

/**
 * axios 설정
 */
export const customAxios = axios.create({
  baseURL: `${import.meta.env.VITE_API_HOST}/api`,
  timeout: 5000,
  headers: {
    'x-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Credentials': true,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Cache-Control': 'no-cache',
  },
  responseType: 'json',
});

/**
 * authorizedHeaders 설정
 * @returns AxiosRequestHeader
 */
// const getAuhorizedHeaders = (headers: AxiosRequestHeaders): AxiosRequestHeaders => {
//   const authCode = getLoginStore()?.token;
//   if (authCode) {
//     headers.Authorization = `Bearer ${authCode}`;
//   }

//   return headers;
// };

/**
 * formData 헤더 설정
 */
export const formHeaders = {
  headers: {
    'Content-Type': 'multipart/form-data',
  },
};

const executingRequests: { [key: string]: CancelTokenSource } = {};

/*
// axios request interceptor 설정
customAxios.interceptors.request.use(
  function (config) {
    if (config.headers.Authorization !== null) {
      config.headers = getAuhorizedHeaders(config.headers);
    }

    return config;
  },
  function (request) {
    const currentRequest = request;

    if (executingRequests[currentRequest.url]) {
      const source = executingRequests[currentRequest.url];
      delete executingRequests[currentRequest.url];
      source.cancel();
    }

    const source = axios.CancelToken.source();
    currentRequest.CancelToken = source.token;
    executingRequests[currentRequest.url] = source;

    return currentRequest;
  }
);

// axios response interceptor 설정
customAxios.interceptors.response.use(
  function (response) {
    if (executingRequests[response.request.reponseURL]) {
      delete executingRequests[response.request.reponseURL];
    }

    return response;
  },
  function (error) {
    const { config } = error;
    const originalRequest = config;

    if (executingRequests[originalRequest.url]) {
      delete executingRequests[originalRequest.url];
    }

    if (error.code === 'ECONNABORTED') {
      alert('네트워크 연결에 실패하였습니다.');
    }

    if (error.code === 'ERR_BAD_REQUEST' && error.response) {
      const customCode = error.response?.data?.code;
      const loginFailed = error.response.request.reponseURL.includes('/auth/login');

      if (customCode === 'A01' && !loginFailed) {
        removeLoginStore();
        alert('로그인후 이용해 주세요.');
        window.location.href = '/user/login?token=expired';
      }

      if (customCode === 'D02') {
        alert('전화번호가 중복되었습니다.');
      }
    }

    return Promise.reject(error.response);
  }
);

customAxios.defaults.withCredentials = true;
*/
