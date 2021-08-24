import axios from "axios";

// const API_key = "ffa8047cd00d6c9dfbbc941267906bc8";
axios.defaults.baseURL = "https://api.themoviedb.org/3";

async function getTrendingFilms() {
  const resp = await axios({
    method: "GET",
    url: "/trending/movie/week?api_key=8d4e0a5a0c37d4780eefdf617d0feea1",
  });
  return resp;
}

function getFilmById(id) {
  return axios({
    method: "GET",
    url: `/movie/${id}?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`,
  });
}

function getFilmsByQuery(query) {
  return axios({
    method: "GET",
    url:
      "/search/movie?api_key=8d4e0a5a0c37d4780eefdf617d0feea1&query=" + query,
  });
}

function getCastInfo(id) {
  return axios.get(
    `/movie/${id}/credits?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`
  );
}

function getReviewsInfo(id) {
  return axios.get(
    `/movie/${id}/reviews?api_key=8d4e0a5a0c37d4780eefdf617d0feea1`
  );
}

export {
  getTrendingFilms,
  getFilmById,
  getFilmsByQuery,
  getCastInfo,
  getReviewsInfo,
};
