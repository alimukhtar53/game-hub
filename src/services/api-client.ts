import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ad920355811f4328bc787bcedbd984b7",
  },
});
