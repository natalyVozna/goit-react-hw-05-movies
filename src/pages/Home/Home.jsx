import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/api';
import { Container, Title, Gallery } from './Home.styled';
import HomeCard from 'components/HomeCard/HomeCard';
import { useFetch } from 'components/hooks/useFetch';

const Home = () => {
  const [movies, setMovies] = useState([]);

  const [fetchData, isLoading, isError] = useFetch(params => {
    getTrendingMovies().then(resMovies => setMovies(resMovies.results));
  });

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (isLoading) {
    return <div>Loading</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }

  if (movies?.length === 0) {
    return <div>No match</div>;
  }
  console.log(movies);

  return (
    <Container>
      <Title>Trending today</Title>
      <Gallery>
        {movies?.map(({ title, id, poster_path }) => (
          <HomeCard key={id} title={title} id={id} url={poster_path} />
        ))}
      </Gallery>
    </Container>
  );
};

export default Home;
