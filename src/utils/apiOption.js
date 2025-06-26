const baseURL = `https://api.themoviedb.org/3/`;

export const URL = `${baseURL}movie/`;

export const API_Options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzcwYzI3YjNkYTc4NmI3M2MzYTc1M2VkYmFiYjFkMyIsIm5iZiI6MTc0ODU0MDE1My44ODksInN1YiI6IjY4Mzg5YWY5MWQ5Yzc5NzgzNmE4N2YyYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5au9xpfx-5m_KSWwtFK8gEcWPGcIgt5vyF6QxVSmm9M'
  }
};

export const searchMoviesTmdbUrl = (movieName, year) => {
  return `${baseURL}search/movie?query=${movieName}&include_adult=false&language=en-US&page=1&year=${year}`;
};