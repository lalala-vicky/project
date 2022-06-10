import axios from "axios";
import qs from "qs";

const requests = axios.create({
  baseURL: "http://127.0.0.1:3007",
  timeout: 3000,
  transformRequest: (data) => {
    return qs.stringify(data);
  },
  paramsSerializer: (params) => {
    return qs.stringify(params, { arrayFormat: "brackets" });
  },
});
export default requests;
