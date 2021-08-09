import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/e-clone-7bb63/us-central1/api",
});

export default instance;
