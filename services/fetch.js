import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.baseURL = "/api";
    return config;
  },
  (err) => err
);

axios.interceptors.response.use(
  (response) => response,
  (err) => {
    console.error("API error");
    console.error(err);
    return err;
  }
);

export default axios;
