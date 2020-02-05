import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-be-5c950.firebaseio.com/"
});

export default instance;
