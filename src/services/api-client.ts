import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1e4944338d4140538d14dce1ca9cd878",
  },
});
