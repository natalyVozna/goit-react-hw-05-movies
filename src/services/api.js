import axios from 'axios';

const key = 'e9cee7be5a008a68e4280761266315f1';
const fetchApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

// export const getMovies = async params => {
//   const response = await fetchApi.get(`movie/?api_key=${key}`, { params });
//   return response.data;

// };
export const getTrendingMovies = async (type = 'movie', time = 'day') => {
  const { data } = await fetchApi.get(
    `trending/${type}/${time}?api_key=${key}`
  );
  //   console.log('getTrendingMovi', data);

  return data;
};
export const getFullInfoAboutMovie = async (movie_id = 436270) => {
  const { data } = await fetchApi.get(`movie/${movie_id}?api_key=${key}`);
  console.log('getFullInfoAboutMo', data);
  return data;
};
export const getMovieByQuery = async (query = 'batman') => {
  const { data } = await fetchApi.get(
    `search/movie?api_key=${key}&query=${query}`
  );
  console.log('getMovyByQue', data);

  return data;
};
export const getActors = async (movie_id = 436270) => {
  const { data } = await fetchApi.get(
    `movie/${movie_id}/credits?api_key=${key}`
  );
  console.log('getActors', data);

  return data;
};
export const getReviews = async (movie_id = 436270) => {
  const { data } = await fetchApi.get(
    `movie/${movie_id}/reviews?api_key=${key}`
  );
  console.log('getReviews', data);

  return data;
};
