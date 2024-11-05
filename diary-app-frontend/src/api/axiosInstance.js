import axios from "axios";

//axiosのインスタンスを作成
const api = axios.create({
  baseURL: "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
})

export default api;
