import axios from "axios";

const API = axios.create({ baseURL: "https://fakestoreapi.com" });
API.interceptors.response.use(
	(res) => res.data,
	(err) => Promise.reject(err)
);

export default API;
