import { Loader } from 'components/Loader/Loader';
import MovieCard from 'components/MovieCard/MovieCard';
import { NotFound } from 'components/NotFound/NotFound';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useFetch } from 'hooks/useFetch';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByQuery } from 'services/api';
import { Gallery, Container } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const getMovies = useCallback(query => {
    getMovieByQuery(query)
      .then(resMovies => {
        if (resMovies.results.length === 0) {
          setError('Nothing found');
        }
        setMovies(resMovies.results);
        setLoading(false);
      })
      .catch(error => setError(error.message))
      .finally(setLoading(false));
  }, []);

  const [fetchData, isLoading, isError] = useFetch(getMovies);

  useEffect(() => {
    if (query !== '') {
      setLoading(true);
      fetchData(query);
    }
  }, [fetchData, query]);

  if (isLoading || loading) {
    return <Loader />;
  }
  if (isError) {
    return <NotFound text="An error occturred, please try again" />;
  }

  return (
    <Container>
      <Searchbar />
      {movies?.length === 0 && error ? (
        <NotFound text="Nothing found" />
      ) : (
        <Gallery>
          {movies?.map(({ title, id, poster_path }) => (
            <MovieCard key={id} title={title} id={id} url={poster_path} />
          ))}
        </Gallery>
      )}
    </Container>
  );
};

export default Movies;
