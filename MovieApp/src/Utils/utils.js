import axios from "axios";

export const getMovieBySearch = (search,type) => {
  return axios(
    `${import.meta.env.VITE_BASE_URL}/?apikey=${
      import.meta.env.VITE_API_KEY
    }&${type}=${search}`
  )
    .then((res) => res.data.Search || [res.data])
    .catch((err) => []);
};
